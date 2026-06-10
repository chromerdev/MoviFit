// ============================================================
// ARQUIVO: ColorModeContext.jsx  (CONTEXTO do Modo Claro/Escuro)
// ------------------------------------------------------------
// O que é um "Contexto"? É uma forma de COMPARTILHAR uma
// informação com TODO o site sem precisar passar de componente
// em componente, um por um.
//
// Aqui guardamos se o modo ESCURO está ligado (isDark) e uma
// função para ALTERNAR entre claro e escuro (toggleColorMode).
// ============================================================

import { createContext, useContext, useState } from 'react';

// Cria o "canal" de comunicação compartilhado
const ColorModeContext = createContext();

// ------------------------------------------------------------
// Provedor: "abraça" o site e disponibiliza o modo de cor
// para todos os componentes dentro dele.
// ------------------------------------------------------------
export function ColorModeProvider({ children }) {
  // Estado que guarda se está no modo escuro (começa em "false" = claro)
  const [isDark, setIsDark] = useState(false);

  // Inverte o valor: se estava claro vira escuro, e vice-versa
  const toggleColorMode = () => setIsDark((prev) => !prev);

  return (
    // Disponibiliza "isDark" e "toggleColorMode" para os componentes filhos
    <ColorModeContext.Provider value={{ isDark, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

// Atalho para qualquer componente "ler" o modo de cor facilmente.
// Ex.: const { isDark, toggleColorMode } = useColorMode();
export const useColorMode = () => useContext(ColorModeContext);
