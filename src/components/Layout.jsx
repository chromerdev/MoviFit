// ============================================================
// COMPONENTE: Layout  (MOLDURA das páginas)
// ------------------------------------------------------------
// O Layout é a "moldura" que se repete em todas as páginas:
//  - A barra de navegação (Navbar) no topo
//  - A área onde o conteúdo da página atual é mostrado (Outlet)
// ============================================================

import { Outlet } from 'react-router-dom'; // "Buraco" onde a página atual é encaixada
import Box from '@mui/material/Box';        // "Caixa" para organizar o layout
import Navbar from './Navbar';              // A barra de navegação do topo

function Layout() {
  return (
    <>
      {/* Barra de navegação fixa no topo, igual em todas as páginas */}
      <Navbar />

      {/* Área principal: aqui aparece o conteúdo da página atual */}
      <Box
        component="main"
        sx={{
          minHeight: 'calc(100vh - 60px)', // Ocupa a altura da tela menos a Navbar (60px)
          bgcolor: 'background.default',    // Cor de fundo conforme o tema
          transition: 'background-color 0.3s ease', // Transição suave ao trocar o tema
        }}
      >
        {/* O Outlet é substituído pela página correspondente à URL atual */}
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
