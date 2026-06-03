import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: 'calc(100vh - 60px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          py: 6,
        }}
      >
        <ConstructionOutlinedIcon sx={{ fontSize: 80, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 800, color: 'primary.main' }}>
          Página em Desenvolvimento
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>
          Desculpe, a página que você está procurando ainda não foi desenvolvida.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<HomeOutlinedIcon />}
          sx={{ mt: 2 }}
        >
          Voltar para a Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
