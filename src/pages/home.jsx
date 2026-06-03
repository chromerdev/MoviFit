import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography"
import StandardImageList from '../components/ImageList'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <React.Fragment>
        <Container maxWidth="lg" sx={{ py: 5 }}>

          <Box>
            <Typography variant="h3" fontWeight="bold"
              sx={{ fontFamily: "Arial" }}>Seja bem vindo!
            </Typography>
            <Typography color='text.secondary'
              sx={{ mt: 1, mb: 4 }}>Esse é o MovFit seu ajudante na busca de uma vida mais saudável
            </Typography>
          </Box>

          <Box sx={{ height: '110vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <StandardImageList />
          </Box>

          <Box>
            <Typography variant="h4" fontWeight="bold"
              sx={{ color: "primary.main", fontFamily: "Arial" }}>Quais os nossos serviços?
            </Typography>
            <Typography color='text.secondary' variant='h6' sx={{ mt: 5, mb: 4, textIndent: "2em" }}>
              Aqui disponibilizamos ferramentas e conteúdos pensados para auxiliar nossos
              clientes na construção de uma rotina mais saudável, prática e equilibrada.
              Entre os nossos serviços, contamos com uma calculadora de Índice de Massa
              Corporal (IMC), que permite ao usuário acompanhar de forma simples sua condição
              física e entender melhor sua relação entre peso e altura.
            </Typography>
            <Typography color='text.secondary' variant='h6' sx={{ mt: 5, mb: 4, textIndent: "2em" }}>
              Também oferecemos um blog com artigos, dicas e informações voltadas para saúde,
              bem-estar, alimentação e qualidade de vida, trazendo conteúdos atualizados para
              incentivar hábitos mais saudáveis no dia a dia. Além disso, disponibilizamos uma
              página de contato para que nossos clientes possam tirar dúvidas, enviar sugestões
              ou entrar em comunicação direta com nossa equipe sempre que precisarem.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ButtonGroup variant="text" size='large' aria-label="button group"
              sx={{ '& .MuiButtonGroup-grouped:not(:last-of-type)': { borderRight: '1px solid' } }}>
              <Button component={Link} to="/calculadora" color="primary">
                Calculadora</Button>
              <Button component={Link} to="/blog" color="primary">
                Blog</Button>
              <Button component={Link} to="/contato" color="primary">
                Entre em contato conosco</Button>
            </ButtonGroup>
          </Box>

        </Container>
      </React.Fragment>
    </div>
  );
}

export default Home;
