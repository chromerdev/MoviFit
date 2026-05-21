import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GenericTabs from '../components/Tabs';
import CalculadoraIMC from '../components/CalculadoraIMC';

function Calculadora() {
  const tabsData = [
    {
      label: 'Calculadora IMC',
      content: <CalculadoraIMC />,
    },
    {
      label: 'Calculadora TMB',
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>
            Calculadora de Taxa Metabólica Basal (TMB)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Em desenvolvimento...
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Calculadoras de Saúde
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: '#666', textAlign: 'center', maxWidth: '600px' }}>
        Acompanhe sua saúde e bem-estar através de nossas calculadoras. Escolha a opção desejada abaixo e insira seus dados para obter os resultados.
      </Typography>
      
      <GenericTabs tabs={tabsData} />
    </Box>
  );
}

export default Calculadora;
