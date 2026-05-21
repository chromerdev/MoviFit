import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MedidorIMC from './Medidor';

export default function CalculadoraIMC() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState(null);
  const [classificacao, setClassificacao] = React.useState('');
  const [colorClass, setColorClass] = React.useState('#4caf50');

  // Função responsável por calcular o IMC e definir as cores de classificação
  const calcularIMC = (e) => {
    e.preventDefault();
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const calcImc = parseFloat(peso) / (alturaMetros * alturaMetros);
      setImc(calcImc.toFixed(1));

      let color = '#CC1F1F';
      if (calcImc < 18.5) { setClassificacao('Abaixo do peso'); color = '#4fc3f7'; }
      else if (calcImc >= 18.5 && calcImc < 24.9) { setClassificacao('Peso normal'); color = '#4caf50'; }
      else if (calcImc >= 25 && calcImc < 29.9) { setClassificacao('Sobrepeso'); color = '#ffb74d'; }
      else if (calcImc >= 30 && calcImc < 34.9) { setClassificacao('Obesidade Grau I'); color = '#ff7043'; }
      else if (calcImc >= 35 && calcImc < 39.9) { setClassificacao('Obesidade Grau II'); color = '#d32f2f'; }
      else { setClassificacao('Obesidade Grau III'); color = '#b71c1c'; }

      setColorClass(color);
    }
  };

  // Calcula a posição do ponteiro na barra de degradê (escala de 16 a 40)
  const getIndicatorPosition = (valor) => {
    const min = 16;
    const max = 40;
    const clamped = Math.min(Math.max(valor, min), max);
    return ((clamped - min) / (max - min)) * 100;
  };

  return (
    <Box>
      {/* Título da Calculadora */}
      <Typography variant="h6" gutterBottom>
        Calcule seu Índice de Massa Corporal (IMC)
      </Typography>

      {/* Formulário do IMC */}
      <Box component="form" onSubmit={calcularIMC} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <TextField
          label="Peso (kg)"
          variant="outlined"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
          fullWidth
          inputProps={{ step: '0.1' }}
        />
        <TextField
          label="Altura (cm)"
          variant="outlined"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1, py: 1.5, backgroundColor: '#CC1F1F', '&:hover': { backgroundColor: '#b01919' } }}>
          Calcular IMC
        </Button>
      </Box>

      {/* Resultado do IMC */}
      {imc && (
        <Box sx={{ mt: 4, p: { xs: 2, md: 4 }, bgcolor: '#fbfaf5', borderRadius: 3, border: '1px solid #eaeaea' }}>

          {/* Gráfico e Textos de Classificação */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
            {/* Gráfico do IMC */}
            <Box sx={{ flexShrink: 0 }}>
              <MedidorIMC value={imc} color={colorClass} />
            </Box>

            {/* Informações em Texto */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body1" sx={{ color: '#555', fontWeight: 500, mb: 0.5 }}>
                Seu IMC
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#d32f2f', lineHeight: 1 }}>
                {imc}
              </Typography>

              <Typography variant="body1" sx={{ color: '#555', mt: 2, fontWeight: 500 }}>
                Classificação
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#000', lineHeight: 1.2, mb: 1 }}>
                {classificacao}
              </Typography>

              {/* Retângulo com a classificação */}
              <Box sx={{
                px: 1.5,
                py: 0.5,
                bgcolor: `${colorClass}22`,
                color: colorClass,
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                {classificacao}
              </Box>
            </Box>
          </Box>

          {/* Barra de Escala */}
          <Box sx={{ mt: 5, px: 1 }}>
            <Typography variant="body2" sx={{ color: '#555', fontWeight: 500, mb: 1 }}>
              Escala de IMC
            </Typography>

            {/* Barra e Ponteiro */}
            <Box sx={{ position: 'relative', width: '100%', height: '28px' }}>
              {/* Barra Colorida */}
              <Box sx={{
                position: 'absolute',
                top: '10px',
                left: 0,
                right: 0,
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #4fc3f7 0%, #4caf50 25%, #ffb74d 45%, #ff7043 65%, #d32f2f 85%, #b71c1c 100%)'
              }} />

              {/* Ponteiro */}
              <Box sx={{
                position: 'absolute',
                top: '4px',
                left: `${getIndicatorPosition(imc)}%`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                bgcolor: '#fff',
                border: '2px solid #d32f2f',
                transform: 'translateX(-50%)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                zIndex: 2,
              }} />
            </Box>

            {/* Números da Escala */}
            <Box sx={{ position: 'relative', width: '100%', height: '20px', mt: 0.5 }}>
              <Typography sx={{ position: 'absolute', left: '0%', transform: 'translateX(0%)', fontSize: '0.75rem', color: '#333' }}>16</Typography>
              <Typography sx={{ position: 'absolute', left: '10.4%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#333' }}>18.5</Typography>
              <Typography sx={{ position: 'absolute', left: '37.5%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#333' }}>25</Typography>
              <Typography sx={{ position: 'absolute', left: '58.3%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#333' }}>30</Typography>
              <Typography sx={{ position: 'absolute', left: '79.1%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: '#333' }}>35</Typography>
              <Typography sx={{ position: 'absolute', left: '100%', transform: 'translateX(-100%)', fontSize: '0.75rem', color: '#333' }}>40+</Typography>
            </Box>

          </Box>
        </Box>
      )}
    </Box>
  );
}
