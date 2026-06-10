// ============================================================
// ARQUIVO: theme.js  (TEMAS DE CORES do site)
// ------------------------------------------------------------
// Aqui definimos as PALETAS DE CORES usadas no site inteiro.
// Existem dois temas: um CLARO e um ESCURO. O usuário troca
// entre eles pelo botão na barra de navegação (Navbar).
//
// Usar o tema (ex: "primary.main") em vez de cores fixas garante
// que tudo mude junto quando o modo claro/escuro é alternado.
// ============================================================

import { createTheme } from '@mui/material/styles'; // Função do MUI que cria um tema

// ------------------------------------------------------------
// TEMA CLARO: fundo claro, textos escuros
// ------------------------------------------------------------
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F3FA', // Cor de fundo das páginas
      paper: '#FFFFFF',   // Cor de fundo de cartões/caixas
    },
    primary: {
      main: '#5248B0',        // Cor principal (roxo) — botões, destaques
      contrastText: '#FFFFFF', // Cor do texto sobre a cor principal
    },
    secondary: {
      main: '#5248B0',        // Cor secundária
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#3D3D5C',   // Cor do texto principal
      secondary: '#5248B0', // Cor de textos secundários
    },
    divider: '#DDDAF8',     // Cor de linhas e bordas divisórias
  },
});

// ------------------------------------------------------------
// TEMA ESCURO: fundo escuro, textos claros
// ------------------------------------------------------------
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1A1A2E',
      paper: '#2C2C4A',
    },
    primary: {
      main: '#8C86D4',
      contrastText: '#1A1A2E',
    },
    secondary: {
      main: '#F5C518',
      contrastText: '#1A1A2E',
    },
    text: {
      primary: '#8C86D4',
      secondary: '#B0ABE0',
    },
    divider: '#3D3D5C',
  },
});
