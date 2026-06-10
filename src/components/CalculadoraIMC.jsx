// ============================================================
// COMPONENTE: Calculadora de IMC (Índice de Massa Corporal)
// ------------------------------------------------------------
// O que faz: o usuário digita o PESO e a ALTURA, e o programa
// calcula o IMC e mostra a CLASSIFICAÇÃO (abaixo do peso,
// peso normal, sobrepeso, etc.).
//
// Fórmula do IMC:  peso (kg) ÷ (altura em metros)²
// ============================================================

// --- Importações: ferramentas visuais que vamos usar ---
import * as React from 'react';                 // Biblioteca base do React
import Box from '@mui/material/Box';             // "Caixa" para organizar o layout
import TextField from '@mui/material/TextField'; // Campo de digitação
import Button from '@mui/material/Button';       // Botão
import Typography from '@mui/material/Typography'; // Textos
import Medidor from './Medidor';                 // Nosso medidor (ponteiro) padronizado

export default function CalculadoraIMC() {
  // --- ESTADOS: a "memória" do componente ---
  // Cada estado guarda um dado que pode mudar e atualizar a tela.
  const [peso, setPeso] = React.useState('');               // Peso digitado
  const [altura, setAltura] = React.useState('');           // Altura digitada
  const [imc, setImc] = React.useState(null);               // Resultado do IMC
  const [classificacao, setClassificacao] = React.useState(''); // Texto da classificação

  // ============================================================
  // FUNÇÃO PRINCIPAL: calcula o IMC quando o formulário é enviado
  // ============================================================
  const calcularIMC = (e) => {
    e.preventDefault(); // Impede a página de recarregar ao enviar o formulário

    // Só calcula se peso e altura foram preenchidos
    if (peso && altura) {
      // 1) Converte a altura de centímetros para metros (ex: 170cm -> 1.70m)
      const alturaMetros = parseFloat(altura) / 100;

      // 2) Aplica a fórmula do IMC: peso ÷ (altura × altura)
      const valorImc = parseFloat(peso) / (alturaMetros * alturaMetros);

      // 3) Guarda o resultado com 1 casa decimal (ex: 22.5)
      setImc(valorImc.toFixed(1));

      // 4) Descobre a CLASSIFICAÇÃO de acordo com as faixas oficiais.
      //    IMPORTANTE: as faixas se encaixam sem "buracos" — cada faixa
      //    termina exatamente onde a próxima começa (< 25, < 30, < 35, < 40).
      //    Assim, qualquer valor (como 24.95) é classificado corretamente.
      if (valorImc < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (valorImc < 25) {
        setClassificacao('Peso normal');
      } else if (valorImc < 30) {
        setClassificacao('Sobrepeso');
      } else if (valorImc < 35) {
        setClassificacao('Obesidade Grau I');
      } else if (valorImc < 40) {
        setClassificacao('Obesidade Grau II');
      } else {
        setClassificacao('Obesidade Grau III');
      }
    }
  };

  // ============================================================
  // PARTE VISUAL (o que aparece na tela)
  // ============================================================
  return (
    <Box>
      {/* Título da Calculadora */}
      <Typography variant="h6" gutterBottom>
        Calcule seu Índice de Massa Corporal (IMC)
      </Typography>

      {/* FORMULÁRIO: campos de entrada + botão */}
      <Box component="form" onSubmit={calcularIMC} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        {/* Campo do Peso */}
        <TextField
          label="Peso (kg)"
          variant="outlined"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} // Atualiza o estado ao digitar
          required
          fullWidth
          inputProps={{ step: '0.1' }}
        />
        {/* Campo da Altura */}
        <TextField
          label="Altura (cm)"
          variant="outlined"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)} // Atualiza o estado ao digitar
          required
          fullWidth
        />
        {/* Botão que dispara o cálculo */}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1, py: 1.5 }}>
          Calcular IMC
        </Button>
      </Box>

      {/* RESULTADO: só aparece depois que o IMC foi calculado.
          Este bloco é IGUAL ao da Calculadora TMB (padronizado). */}
      {imc && (
        <Box sx={{ mt: 4, p: { xs: 2, md: 4 }, bgcolor: 'background.default', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 4 } }}>

            {/* Medidor (ponteiro) mostrando o valor na escala de 10 a 50 */}
            <Box sx={{ flexShrink: 0 }}>
              <Medidor value={imc} min={10} max={50} />
            </Box>

            {/* Textos do resultado */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Rótulo + valor numérico */}
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.5 }}>
                Seu IMC
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1 }}>
                {imc}
              </Typography>

              {/* Rótulo + classificação */}
              <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, fontWeight: 500 }}>
                Classificação
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
                {classificacao}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
