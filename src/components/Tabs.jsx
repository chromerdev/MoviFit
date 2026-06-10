// ============================================================
// COMPONENTE: GenericTabs (Abas / Guias reutilizáveis)
// ------------------------------------------------------------
// O que é: cria um conjunto de ABAS clicáveis. Ao clicar em uma
// aba, mostra o conteúdo dela e esconde o das outras.
// É "genérico": recebe uma lista de abas de fora, então pode ser
// reutilizado em qualquer parte do site.
// ============================================================

// --- Importações ---
import * as React from 'react';            // Biblioteca base do React
import PropTypes from 'prop-types';        // Ferramenta que valida os dados recebidos
import Tabs from '@mui/material/Tabs';      // Barra que contém as abas
import Tab from '@mui/material/Tab';        // Cada aba individual
import Box from '@mui/material/Box';        // "Caixa" para organizar o layout

// ------------------------------------------------------------
// CustomTabPanel: o "painel" que mostra o conteúdo de UMA aba.
// Ele só aparece quando a aba dele está selecionada.
// ------------------------------------------------------------
function CustomTabPanel(props) {
  // children = conteúdo; value = aba ativa; index = posição desta aba
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index} // Esconde o painel se a aba não for a ativa
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* Só desenha o conteúdo quando esta aba é a selecionada */}
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Validação dos dados que o painel recebe (ajuda a evitar erros)
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Função auxiliar: gera atributos de acessibilidade para cada aba
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// ------------------------------------------------------------
// GenericTabs: o componente principal das abas.
// Recebe "tabs" = lista de { label, content }.
// ------------------------------------------------------------
export default function GenericTabs({ tabs }) {
  // Estado que guarda QUAL aba está selecionada (começa na primeira, 0)
  const [value, setValue] = React.useState(0);

  // Função chamada quando o usuário clica em outra aba
  const handleChange = (event, newValue) => {
    setValue(newValue); // Atualiza a aba ativa
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      {/* Barra superior com os botões das abas */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs" variant="fullWidth" textColor="primary" indicatorColor="primary">
          {/* Cria um botão para cada aba da lista */}
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {/* Cria um painel de conteúdo para cada aba da lista */}
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

// Validação: "tabs" precisa ser uma lista de objetos com label e content
GenericTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
