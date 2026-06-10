// ============================================================
// ARQUIVO: router.jsx  (ROTAS / MAPA DE PÁGINAS)
// ------------------------------------------------------------
// Aqui dizemos QUAL página aparece para CADA endereço (URL).
// Exemplo: se a URL for "/blog", mostramos a página Blog.
//
// Todas as páginas ficam dentro do "Layout", que adiciona a
// barra de navegação (Navbar) no topo de todas elas.
// ============================================================

import { createBrowserRouter } from 'react-router-dom'; // Cria o sistema de rotas
import Layout from '../components/Layout';               // Moldura comum (Navbar + conteúdo)
import Home from '../pages/home';                        // Página inicial
import Blog from '../pages/blog';                        // Página do blog
import Calculadora from '../pages/calculadora';          // Página das calculadoras
import Contato from '../pages/contato';                  // Página de contato

// Lista de rotas: cada "path" (caminho da URL) leva a um "element" (página)
const router = createBrowserRouter([
  {
    path: "/",            // Caminho raiz
    element: <Layout />,   // Usa o Layout como moldura
    children: [            // Páginas que aparecem dentro do Layout
      {
        path: "/",          // Endereço inicial
        element: <Home />,   // Mostra a Home
      },
      {
        path: "/blog",       // Endereço /blog
        element: <Blog />,    // Mostra o Blog
      },
      {
        path: "/calculadora", // Endereço /calculadora
        element: <Calculadora />, // Mostra as Calculadoras
      },
      {
        path: "/contato",     // Endereço /contato
        element: <Contato />,  // Mostra o Contato
      },
    ]
  },
]);

// Exporta as rotas para serem usadas no App
export default router;
