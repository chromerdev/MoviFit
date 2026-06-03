import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from 'react-router-dom';
import StandardImageList from '../components/ImageList';
import PageHeader from '../components/PageHeader';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <PageHeader
        title="Seja bem-vindo!"
        subtitle="Esse é o MoviFit, seu ajudante na busca de uma vida mais saudável."
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 5, md: 8 } }}>
        <StandardImageList />
      </Box>

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
        <Typography color="text.secondary" sx={{ mb: 2, textIndent: '2em', lineHeight: 1.8 }}>
          Aqui disponibilizamos ferramentas e conteúdos pensados para auxiliar nossos
          clientes na construção de uma rotina mais saudável, prática e equilibrada.
          Entre os nossos serviços, contamos com uma calculadora de Índice de Massa
          Corporal (IMC), que permite ao usuário acompanhar de forma simples sua condição
          física e entender melhor sua relação entre peso e altura.
        </Typography>
        <Typography color="text.secondary" sx={{ textIndent: '2em', lineHeight: 1.8 }}>
          Também oferecemos um blog com artigos, dicas e informações voltadas para saúde,
          bem-estar, alimentação e qualidade de vida, trazendo conteúdos atualizados para
          incentivar hábitos mais saudáveis no dia a dia. Além disso, disponibilizamos uma
          página de contato para que nossos clientes possam tirar dúvidas, enviar sugestões
          ou entrar em comunicação direta com nossa equipe sempre que precisarem.
        </Typography>
      </Paper>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          component={Link}
          to="/calculadora"
          variant="contained"
          size="large"
          startIcon={<CalculateOutlinedIcon />}
        >
          Calculadora
        </Button>
        <Button
          component={Link}
          to="/blog"
          variant="outlined"
          size="large"
          startIcon={<ArticleOutlinedIcon />}
        >
          Blog
        </Button>
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
