// ============================================================
// PÁGINA: Contato
// ------------------------------------------------------------
// Mostra os canais de atendimento (WhatsApp, e-mail, Instagram,
// endereço) e um FORMULÁRIO para o usuário enviar uma mensagem.
// Antes de "enviar", o formulário VALIDA os campos.
// ============================================================

// --- Importações ---
import Box from '@mui/material/Box';                 // "Caixa" para organizar o layout
import Container from '@mui/material/Container';     // Limita e centraliza o conteúdo
import Typography from '@mui/material/Typography';   // Textos
import TextField from '@mui/material/TextField';     // Campos de digitação
import { useState } from 'react';                    // Cria "estados" (memória do componente)
import Button from '@mui/material/Button';           // Botão
import Swal from 'sweetalert2';                      // Janelas de aviso bonitas
import Paper from '@mui/material/Paper';             // Cartão com sombra
import PageHeader from '../components/PageHeader';   // Cabeçalho reutilizável
import EmailIcon from '@mui/icons-material/Email';           // Ícone de e-mail
import InstagramIcon from '@mui/icons-material/Instagram';   // Ícone do Instagram
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Ícone de localização
import WhatsAppIcon from '@mui/icons-material/WhatsApp';     // Ícone do WhatsApp
import { useTheme } from '@mui/material/styles';     // Acessa as cores do tema

function Contato() {
  // --- ESTADOS: guardam o que o usuário digita em cada campo ---
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const theme = useTheme(); // Cores do tema atual

  // ------------------------------------------------------------
  // FUNÇÃO: chamada quando o usuário clica em "Enviar".
  // Faz a VALIDAÇÃO antes de confirmar o envio.
  // ------------------------------------------------------------
  const handleEnviar = () => {
    // 1) Verifica se algum campo está vazio
    if (nome === '' || email === '' || mensagem === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Por favor, preencha todos os campos.',
      });
      return; // Para aqui se faltar algo
    }

    // 2) Verifica se o e-mail tem um formato válido (texto@texto.texto)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'E-mail inválido',
        text: 'Por favor, digite um e-mail válido.',
      });
      return;
    }

    // 3) Tudo certo: mostra a mensagem de sucesso
    Swal.fire({
      icon: 'success',
      title: 'Enviado!',
      text: 'Mensagem enviada com sucesso!',
      confirmButtonColor: theme.palette.primary.main,
    });

    // 4) Limpa os campos do formulário
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* CABEÇALHO da página */}
      <PageHeader
        title="Contato"
        subtitle="Entre em contato conosco. Preencha o formulário abaixo ou use nossos canais de atendimento."
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Em coluna no celular, em linha no PC
          gap: 3,
          width: '100%',
          maxWidth: '1050px',
          mx: 'auto',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {/* CARTÃO 1: outros canais de atendimento */}
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Outros canais de atendimento
          </Typography>

          {/* WhatsApp (abre o WhatsApp ao clicar) */}
          <Box
            component="a"
            href="https://wa.me/5569993739439"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <WhatsAppIcon color="primary" />
            <Typography>(69) 99373-9439</Typography>
          </Box>

          {/* E-mail (abre o programa de e-mail ao clicar) */}
          <Box
            component="a"
            href="mailto:contato@movifit.com"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: 'primary.main' },
            }}>
            <EmailIcon color="primary" />
            <Typography>contato@movifit.com</Typography>
          </Box>

          {/* Instagram (abre o perfil ao clicar) */}
          <Box
            component="a"
            href="https://www.instagram.com/movifit.oficial/"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': { color: 'primary.main' },
            }}>
            <InstagramIcon color="primary" />
            <Typography>@movifit.oficial</Typography>
          </Box>

          {/* Endereço físico (apenas texto, sem link) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <LocationOnIcon color="primary" />
            <Typography>Av. Sete de Setembro, 1200 — Porto Velho/RO</Typography>
          </Box>
        </Paper>

        {/* CARTÃO 2: o formulário de mensagem */}
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '500px', borderRadius: 3 }}>
          {/* Campo: Nome */}
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
          />
          {/* Campo: E-mail */}
          <TextField
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
          />
          {/* Campo: Mensagem (várias linhas) */}
          <TextField
            label="Mensagem"
            variant="outlined"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            multiline
            rows={4}
            sx={{ width: '100%', maxWidth: '500px', mb: 2 }}
          />
          {/* Botão que chama a função de validação e envio */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleEnviar}
            sx={{ width: '100%', py: 1.5 }}
          >
            Enviar
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contato;
