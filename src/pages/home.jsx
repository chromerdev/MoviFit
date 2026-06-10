// ============================================================
// PÁGINA: Home  (PÁGINA INICIAL)
// ------------------------------------------------------------
// É a primeira página que o usuário vê. Contém:
//  - Um cabeçalho de boas-vindas
//  - Uma galeria de imagens
//  - Um texto explicando os serviços
//  - Botões que levam às outras páginas
// ============================================================

// --- Importações ---
import Box from '@mui/material/Box';                 // "Caixa" para organizar o layout
import Container from '@mui/material/Container';     // Limita e centraliza o conteúdo
import Typography from '@mui/material/Typography';   // Textos
import Paper from '@mui/material/Paper';             // Cartão com leve sombra/borda
import Button from '@mui/material/Button';           // Botões
import Stack from '@mui/material/Stack';             // Empilha elementos (na horizontal ou vertical)
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'; // Ícone de calculadora
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';     // Ícone de artigo (blog)
import MailOutlineIcon from '@mui/icons-material/MailOutlineOutlined';     // Ícone de e-mail
import { Link } from 'react-router-dom';             // Link para navegar entre páginas
import StandardImageList from '../components/ImageList'; // A galeria de imagens
import PageHeader from '../components/PageHeader';    // O cabeçalho reutilizável

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* CABEÇALHO de boas-vindas */}
      <PageHeader
        title="Seja bem-vindo!"
        subtitle="Esse é o MoviFit, seu ajudante na busca de uma vida mais saudável."
      />

      {/* GALERIA DE IMAGENS */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 5, md: 8 } }}>
        <StandardImageList />
      </Box>

      {/* CARTÃO com a explicação dos serviços */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
          Quais os nossos serviços?
        </Typography>
        {/* Primeiro parágrafo de texto */}
        <Typography color="text.secondary" sx={{ mb: 2, textIndent: '2em', lineHeight: 1.8 }}>
          Aqui disponibilizamos ferramentas e conteúdos pensados para auxiliar nossos
          clientes na construção de uma rotina mais saudável, prática e equilibrada.
          Entre os nossos serviços, contamos com uma calculadora de Índice de Massa
          Corporal (IMC), que permite ao usuário acompanhar de forma simples sua condição
          física e entender melhor sua relação entre peso e altura.
        </Typography>
        {/* Segundo parágrafo de texto */}
        <Typography color="text.secondary" sx={{ textIndent: '2em', lineHeight: 1.8 }}>
          Também oferecemos um blog com artigos, dicas e informações voltadas para saúde,
          bem-estar, alimentação e qualidade de vida, trazendo conteúdos atualizados para
          incentivar hábitos mais saudáveis no dia a dia. Além disso, disponibilizamos uma
          página de contato para que nossos clientes possam tirar dúvidas, enviar sugestões
          ou entrar em comunicação direta com nossa equipe sempre que precisarem.
        </Typography>
      </Paper>

      {/* BOTÕES que levam às outras páginas */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }} // Em coluna no celular, em linha no computador
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {/* Botão para a Calculadora */}
        <Button
          component={Link}
          to="/calculadora"
          variant="contained"
          size="large"
          startIcon={<CalculateOutlinedIcon />}
        >
          Calculadora
        </Button>
        {/* Botão para o Blog */}
        <Button
          component={Link}
          to="/blog"
          variant="outlined"
          size="large"
          startIcon={<ArticleOutlinedIcon />}
        >
          Blog
        </Button>
        {/* Botão para o Contato */}
        <Button
          component={Link}
          to="/contato"
          variant="outlined"
          size="large"
          startIcon={<MailOutlineIcon />}
        >
          Entre em contato conosco
        </Button>
      </Stack>
    </Container>
  );
}

export default Home;
