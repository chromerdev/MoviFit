import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

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
  },
];

function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Cabeçalho */}
      <Box mb={4}>
        <Typography variant="h3" fontWeight="bold" sx={{ fontFamily : "Arial" }}>
          Blog
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Confira nossas últimas postagens.
        </Typography>
      </Box>

      {/* Categorias */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Chip label="Saúde da mulher" color="primary" />
        <Chip label="Condições de Saúde" color="secondary" />
        <Chip label="Dr. Responde" color="warning" />
        <Chip label="Gravidez e primeira infância" color="success" />
      </Box>

      {/* GRID CORRETO */}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },

          gap: 3,
        }}
      >
        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              height: 430,
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "0.3s",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
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
              }}
            >
              <Chip
                label={post.categoria}
                size="small"
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
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Blog;