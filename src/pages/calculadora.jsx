import Container from '@mui/material/Container';
import GenericTabs from '../components/Tabs';
import PageHeader from '../components/PageHeader';
import CalculadoraIMC from '../components/CalculadoraIMC';
import CalculadoraTMB from '../components/CalculadoraTMB';

function Calculadora() {
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

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <PageHeader
        title="Calculadoras de Saúde"
        subtitle="Acompanhe sua saúde e bem-estar através de nossas calculadoras. Escolha a opção desejada abaixo e insira seus dados para obter os resultados."
      />
      <GenericTabs tabs={tabsData} />
    </Container>
  );
}

export default Calculadora;
