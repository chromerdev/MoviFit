import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Calculadora', path: '/calculadora' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

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
        backgroundColor: '#ffffff',
        borderBottom: '0.5px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        zIndex: 1100,
        boxSizing: 'border-box',
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
          src="/Imagotipo_MoviFit.png"
          alt="MoviFit Logo"
          style={{ height: '45px' }}
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
                color: isActive ? '#CC1F1F' : '#6b7280',
                padding: '6px 14px',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                  color: '#000000',
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
                    backgroundColor: '#CC1F1F',
                    borderRadius: '1px',
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      <Box
        component={Link}
        to="/criar-postagem"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#CC1F1F',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          borderRadius: '8px',
          padding: '8px 18px',
          textDecoration: 'none',
          gap: '8px',
          border: 'none',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: '#b01919',
          },
        }}
      >
        <EditOutlinedIcon sx={{ fontSize: '15px' }} />
        Criar postagem
      </Box>
    </Box>
    <Box sx={{ height: '60px' }} />
  </>
);
}
