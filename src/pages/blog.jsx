import { useState } from "react";
import {
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import PageHeader from "../components/PageHeader";

const posts = [
  {
    id: 1,
    categoria: "Saúde da mulher",
    titulo: "Menopausa: o que é a reposição hormonal...",
    descricao:
      "Ainda cercada de mitos, terapia pode ajudar a aliviar sintomas...",
    data: "Atualizado em 20/05/2026",
    imagem:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      url:
      "https://www.amesuamente.org.br/blog/cinco-mitos-sobre-terapia/"
  },
  {
    id: 2,
    categoria: "Condições de Saúde",
    titulo: "Quais são e o que fazem os órgãos do sistema nervoso?",
    descricao:
      "Ele é formado por órgãos e estruturas que atuam no controle do corpo...",
    data: "Atualizado em 19/05/2026",
    imagem:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      url:
      "https://www.einstein.br/n/vida-saudavel/quais-sao-e-o-que-fazem-os-orgaos-do-sistema-nervoso"
  },
  {
    id: 3,
    categoria: "Dr. Responde",
    titulo: "Por que o uso do clobutinol é contraindicado?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 18/05/2026",
    imagem:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      url:
      "https://www.einstein.br/n/vida-saudavel/por-que-o-uso-do-clobutinol-e-contraindicado-entenda-os-riscos"
  },
  {
    id: 4,
    categoria: "Saúde da mulher",
    titulo: "Quais os melhores execicios para quem estar gravido?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 26/05/2026",
    imagem:
      "https://imgs.search.brave.com/nKyBcg4rLSlQHXuFvDPA0pJAjl_W0REDakZaBKSoFgc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LmF0aGxldGljLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi9hdGl2/aWRhZGVzLWZpc2lj/YXMtcGFyYS1tdWxo/ZXJlcy1ncmF2aWRh/cy0xLS5wbmc_eDY5/MzYz",
      url:
      "https://www.tuasaude.com/melhores-exercicios-para-praticar-na-gravidez/"
  },
  {
    id: 5,
    categoria: "Dr. Responde",
    titulo: "Qual a diferença entre whey concentrado, isolado e hidrosilado?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 03/05/2026",
    imagem:
      "https://imgs.search.brave.com/S_mDz384eE1tDGi2AFEaIBij2_1fm-TYs3cQJylT4f8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ldmlk/YS5jb20uYnIvY2Ru/L3Nob3AvYXJ0aWNs/ZXMvd2hleS1jb25j/ZW50cmFkby1pc29s/YWRvLWhpZHJvbGlz/YWRvLndlYnA_dj0x/NzczNDk0NjYwJndp/ZHRoPTExMDA",
      url:
      "https://g1.globo.com/saude/bem-estar/noticia/2025/08/26/qual-whey-protein-e-melhor-concentrado-isolado-ou-hidrolisado-veja-diferencas-e-saiba-qual-escolher.ghtml"
  },
  {
    id: 6,
    categoria: "Condições de Saúde",
    titulo: "Eu tenho problemas de hipertensão quais são os melhores exercícios?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 21/05/2026",
    imagem:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      url:
      "https://imgs.search.brave.com/t2v0XHkmNCS-HvvTjmSA2gU2C7eeqPts_U9ZL9RuaVc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS51bmltZWRjYW1w/aW5hcy5jb20uYnIv/NGMxZWQ3M2QtMTVj/Zi00Y2Q3LWJmYzUt/OGEzMDM4OTNjMWU5"
  },
    {
    id: 7,
    categoria: "Alimentação",
    titulo: "Tenho pré-diabetes, qual alimentação eu devo seguir?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 21/05/2026",
    imagem:
      "https://imgs.search.brave.com/1W8Q8tmUZCd9xl1QOOXDErOTKydjL2FNL1aQTmWM9l4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaWFi/ZXRlcy5vcmcuYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDUvZGVzY29icmkt/cXVlLXRlbmhvLWRp/YWJldGVzLWNvbW8t/ZGV2ZXJhLWZpY2Fy/LW1pbmhhLWFsaW1l/bnRhY2FvLmpwZw",
      url:
      "https://www.raianecrespo.com.br/alimentacao-em-diabetes-e-pre-diabetes/"
  },
    {
    id: 8,
    categoria: "Alimentação",
    titulo: "Qual dieta meu filho deveria seguir para crecer saudavel?",
    descricao:
      "Autoridades sanitárias suspenderam o registro do medicamento...",
    data: "Atualizado em 21/05/2026",
    imagem:
      "https://imgs.search.brave.com/klqPSx3bdJkn-U6PclHDqDhy9-lS5XNLG4M6ZreK3AY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vZG91/dG9yLmNvbS5ici93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/OC9vZG91dG9yLWFs/aW1lbnRhY2FvLWlu/ZmFudGlsLjItMTAy/NHg1NzYuanBn",
      url:
      "https://institutopensi.org.br/dez-passos-para-uma-alimentacao-saudavel-para-seu-filho"
  },
];

function Blog() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const postsFiltrados = categoriaSelecionada ? posts.filter(
    (post) => post.categoria === categoriaSelecionada
  ): posts;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Cabeçalho */}
      <PageHeader
        title="Blog"
        subtitle="Confira nossas últimas postagens sobre saúde, bem-estar e qualidade de vida."
        align="left"
      />

      {/* Categorias */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Chip label="Saúde da mulher" color="primary" onClick={() => setCategoriaSelecionada("Saúde da mulher")}/>
        <Chip label="Condições de Saúde" color="secondary" onClick={() => setCategoriaSelecionada("Condições de Saúde")}/>
        <Chip label="Dr. Responde" color="warning" onClick={() => setCategoriaSelecionada("Dr. Responde")}/>
        <Chip label="Alimentação" color="success" onClick={() => setCategoriaSelecionada("Alimentação")}/>
        <Chip label="Todos" variant="outlined" clickable onClick={() => setCategoriaSelecionada("")}/>
      </Box>

      {/* GRID*/}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },

          gap: 3,
        }}>
        {postsFiltrados.map((post) => (
          <Card
            key={post.id}
            sx={{
              height: 430,
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea
              onClick={() => window.open(post.url, "_blank")}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "flex-start",
              }}
            >
              {/* Imagem */}
              <CardMedia
                component="img"
                image={post.imagem}
                alt={post.titulo}
                sx={{
                  height: 220,
                  objectFit: "cover",
                }}
              />

              {/* Conteúdo */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Chip
                  label={post.categoria}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{
                    width: "fit-content",
                    mb: 2,
                  }}
                />

                {/* Título */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: 64,
                  }}
                >
                  {post.titulo}
                </Typography>

                {/* Data */}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {post.data}
                </Typography>

                {/* Descrição */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.descricao}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Blog;