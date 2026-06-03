import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: 'calc(100vh - 60px)',
          bgcolor: 'background.default',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
