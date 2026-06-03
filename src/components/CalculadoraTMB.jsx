import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import { Gauge } from "@mui/x-charts/Gauge";

export default function CalculadoraTMB() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [tmb, setTmb] = React.useState(null);

 const calculadoraTaxa = (e) => {
  e.preventDefault(); // impede reload da página

  if (!peso || !altura || !idade || !sexo) {
    Swal.fire('Preencha todos os campos!');
    return;
  }

  let resultado = 0;
  if (sexo === 'masculino') {
    resultado = (13.7 * peso) + (5 * altura) - (6.8 * idade) + 66;
  } else {
    resultado = (9.6 * peso) + (1.8 * altura) - (4.7 * idade) + 655;
  }

  setTmb(resultado);
};

  return (
    <Box
      component="form"
      onSubmit={calculadoraTaxa}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
    >
      <Typography variant="h5">Calculadora de TMB</Typography>

      <TextField
        label="Peso (kg)"
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Altura (cm)"
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Idade (anos)"
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
        fullWidth
      />
      <TextField
        select
        label="Sexo"
        fullWidth
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
      >
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="feminino">Feminino</MenuItem>
      </TextField>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 1, py: 1.5, backgroundColor: '#CC1F1F', '&:hover': { backgroundColor: '#b01919' } }}
      >
        Calcular TMB
      </Button>

      {tmb !== null && (
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <Gauge
            value={tmb}
            min={1000}
            max={4000}
            width={300}
            height={200}
            valueLabelDisplay="on"
            text={({ value }) => `TMB: ${value.toFixed(0)} kcal/dia`}
          />
        </div>
      )}
    </Box>
  );
}
