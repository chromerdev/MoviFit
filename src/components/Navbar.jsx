import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useLocation } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useColorMode } from '../contexts/ColorModeContext';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isDark, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Calculadora', path: '/calculadora' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

  const ctaBg = isDark ? theme.palette.secondary.main : theme.palette.primary.main;
  const ctaHover = isDark ? '#d4ab14' : '#3d3490';
  const ctaText = isDark ? '#1A1A2E' : '#FFFFFF';

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: theme.palette.background.paper,
          borderBottom: `0.5px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          zIndex: 1100,
          boxSizing: 'border-box',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={isMobile ? '/Vertical%20Roxo.png' : '/Horizontal%20Roxo.png'}
            alt="MoviFit Logo"
            style={{ height: isMobile ? '40px' : '38px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {navLinks.map((link) => {
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
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                  padding: '6px 14px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: isDark ? '#2C2C4A' : '#EBEBF5',
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {link.label}
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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconButton
            onClick={toggleColorMode}
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
            {isDark ? (
              <LightModeOutlinedIcon sx={{ fontSize: '18px' }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: '18px' }} />
            )}
          </IconButton>

          <Box
            component={Link}
            to="/criar-postagem"
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: ctaBg,
              color: ctaText,
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '8px',
              padding: '8px 18px',
              textDecoration: 'none',
              gap: '8px',
              border: 'none',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: ctaHover,
              },
            }}
          >
            <EditOutlinedIcon sx={{ fontSize: '15px' }} />
            Criar postagem
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: '60px' }} />
    </>
  );
}
