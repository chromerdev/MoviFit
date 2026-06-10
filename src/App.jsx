// ============================================================
// ARQUIVO: App.jsx  (COMPONENTE PRINCIPAL)
// ------------------------------------------------------------
// Aqui montamos a "estrutura geral" do site:
//  - O tema (cores claras ou escuras)
//  - A navegação entre páginas (rotas)
// Tudo que aparece no site fica "dentro" deste componente.
// ============================================================

// --- Importações ---
import { RouterProvider } from 'react-router-dom';                 // Liga o sistema de rotas (troca de páginas)
import { ThemeProvider } from '@mui/material/styles';              // Fornece o tema (cores) para todo o site
import CssBaseline from '@mui/material/CssBaseline';               // Padroniza o estilo base do navegador
import { ColorModeProvider, useColorMode } from './contexts/ColorModeContext'; // Controle do modo claro/escuro
import { lightTheme, darkTheme } from './theme';                   // Os dois temas: claro e escuro
import router from './routes/router';                             // A lista de páginas/rotas do site
import './App.css';                                               // Estilos do App

// ------------------------------------------------------------
// ThemedApp: decide QUAL tema usar (claro ou escuro) e
// desenha as páginas do site.
// ------------------------------------------------------------
function ThemedApp() {
  const { isDark } = useColorMode(); // Pergunta ao contexto: o modo escuro está ligado?

  return (
    // Aplica o tema escuro OU o claro, dependendo de "isDark"
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />                  {/* Reseta estilos padrão do navegador */}
      <RouterProvider router={router} /> {/* Mostra a página correta de acordo com a URL */}
    </ThemeProvider>
  );
}

// ------------------------------------------------------------
// App: envolve tudo no "Provedor" do modo de cor, para que
// qualquer parte do site possa ligar/desligar o modo escuro.
// ------------------------------------------------------------
function App() {
  return (
    <ColorModeProvider>
      <ThemedApp />
    </ColorModeProvider>
  );
}

// Exporta o App para ser usado no main.jsx
export default App;
