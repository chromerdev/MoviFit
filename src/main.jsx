// ============================================================
// ARQUIVO: main.jsx  (PONTO DE PARTIDA do site)
// ------------------------------------------------------------
// Este é o PRIMEIRO arquivo que roda. Ele pega o componente
// principal (App) e o "desenha" dentro da página HTML, na
// <div id="root">. Sem este arquivo, nada apareceria na tela.
// ============================================================

import { StrictMode } from 'react'              // Ajuda a detectar problemas durante o desenvolvimento
import { createRoot } from 'react-dom/client'   // Função que conecta o React à página HTML
import './index.css'                            // Estilos globais (CSS) do site
import App from './App.jsx'                      // Componente principal que contém todo o site

// Procura a <div id="root"> no HTML e desenha o App dentro dela
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
