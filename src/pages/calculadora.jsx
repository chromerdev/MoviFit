// ============================================================
// PÁGINA: Calculadora
// ------------------------------------------------------------
// Esta é a PÁGINA que junta tudo. Ela mostra um cabeçalho e duas
// abas (guias): uma com a Calculadora de IMC e outra com a de TMB.
// O usuário clica na aba que quiser usar.
// ============================================================

// --- Importações ---
import Container from '@mui/material/Container';            // Centraliza e limita a largura do conteúdo
import GenericTabs from '../components/Tabs';               // Componente de abas (guias)
import PageHeader from '../components/PageHeader';          // Cabeçalho com título e subtítulo
import CalculadoraIMC from '../components/CalculadoraIMC';  // Calculadora de IMC
import CalculadoraTMB from '../components/CalculadoraTMB';  // Calculadora de TMB

function Calculadora() {
  // Lista das abas: cada item tem um "label" (nome da aba) e o
  // "content" (o componente que aparece quando a aba é aberta).
  const tabsData = [
    {
      label: 'Calculadora IMC',
      content: <CalculadoraIMC />,
    },
    {
      label: 'Calculadora TMB',
      content: <CalculadoraTMB />,
    },
  ];

  // --- PARTE VISUAL ---
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Cabeçalho da página */}
      <PageHeader
        title="Calculadoras de Saúde"
        subtitle="Acompanhe sua saúde e bem-estar através de nossas calculadoras. Escolha a opção desejada abaixo e insira seus dados para obter os resultados."
      />
      {/* Abas que trocam entre a calculadora de IMC e a de TMB */}
      <GenericTabs tabs={tabsData} />
    </Container>
  );
}

// Exporta a página para ser usada nas rotas do site
export default Calculadora;
