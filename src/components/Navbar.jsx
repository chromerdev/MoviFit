// ============================================================
// COMPONENTE: Navbar  (BARRA DE NAVEGAÇÃO do topo)
// ------------------------------------------------------------
// É a barra fixa no topo do site. Contém:
//  - O logo (que leva para a Home)
//  - Os links para as páginas (Início, Calculadora, Blog, Contato)
//  - O botão de alternar entre modo claro e escuro
// ============================================================

// --- Importações ---
import Box from '@mui/material/Box';                                   // "Caixa" para organizar o layout
import IconButton from '@mui/material/IconButton';                     // Botão que mostra um ícone
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';   // Ícone de lua (modo escuro)
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'; // Ícone de sol (modo claro)
import { useTheme } from '@mui/material/styles';                       // Acessa as cores do tema atual
import useMediaQuery from '@mui/material/useMediaQuery';               // Detecta o tamanho da tela
import { Link, useLocation } from 'react-router-dom';                 // Link entre páginas e a URL atual
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';       // Ícone de edição (importado para uso futuro)
import { useColorMode } from '../contexts/ColorModeContext';          // Controle do modo claro/escuro

export default function Navbar() {
  // --- Informações usadas para montar a barra ---
  const location = useLocation();           // Descobre em qual página estamos
  const currentPath = location.pathname;    // O caminho atual da URL (ex: "/blog")
  const { isDark, toggleColorMode } = useColorMode(); // Modo escuro ligado? + função de trocar
  const theme = useTheme();                 // Cores do tema atual
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // É tela pequena (celular)?

  // Lista dos links que aparecem na barra. Cada um tem o texto e o destino.
  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Calculadora', path: '/calculadora' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

  // Cores do botão de destaque, que mudam conforme o modo claro/escuro
  const ctaBg = isDark ? theme.palette.secondary.main : theme.palette.primary.main;
  const ctaHover = isDark ? '#d4ab14' : '#3d3490';
  const ctaText = isDark ? '#1A1A2E' : '#FFFFFF';

  return (
    <>
      {/* Barra fixa no topo da tela */}
      <Box
        component="nav"
        sx={{
          position: 'fixed', // Fica "grudada" no topo mesmo ao rolar a página
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: theme.palette.background.paper,
          borderBottom: `0.5px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Logo na esquerda, links no meio, botão na direita
          padding: '0 2rem',
          zIndex: 1100, // Fica acima dos outros elementos
          boxSizing: 'border-box',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* LOGO — ao clicar, leva para a página inicial */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          {/* Usa um logo vertical no celular e horizontal no computador */}
          <img
            src={isMobile ? '/Vertical%20Roxo.png' : '/Horizontal%20Roxo.png'}
            alt="MoviFit Logo"
            style={{ height: isMobile ? '40px' : '38px' }}
          />
        </Box>

        {/* LINKS DE NAVEGAÇÃO */}
        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {navLinks.map((link) => {
            // Verifica se este link é o da página atual (para destacá-lo)
            const isActive = currentPath === link.path;
            return (
              <Box
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  position: 'relative',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500, // Link ativo fica em negrito
                  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                  padding: '6px 14px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { // Efeito ao passar o mouse por cima
                    backgroundColor: isDark ? '#2C2C4A' : '#EBEBF5',
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {link.label}
                {/* Linha embaixo do link da página atual */}
                {isActive && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '14px',
                      right: '14px',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '1px',
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        {/* BOTÃO DE TROCAR O TEMA (claro/escuro) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconButton
            onClick={toggleColorMode} // Ao clicar, alterna entre claro e escuro
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '8px',
              padding: '6px',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: isDark ? '#2C2C4A' : '#EBEBF5',
                color: theme.palette.primary.main,
              },
            }}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {/* Mostra o ícone de sol no modo escuro e de lua no modo claro */}
            {isDark ? (
              <LightModeOutlinedIcon sx={{ fontSize: '18px' }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: '18px' }} />
            )}
          </IconButton>
        </Box>
      </Box>

      {/* Espaço vazio do tamanho da barra, para o conteúdo não ficar escondido atrás dela */}
      <Box sx={{ height: '60px' }} />
    </>
  );
}
