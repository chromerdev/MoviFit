// ============================================================
// COMPONENTE: Calculadora de TMB (Taxa Metabólica Basal)
// ------------------------------------------------------------
// O que faz: calcula quantas calorias o corpo gasta por dia
// EM REPOUSO (só para manter as funções vitais). O usuário
// informa peso, altura, idade e sexo.
//
// Usa a fórmula de Harris-Benedict (diferente para cada sexo).
//
// O RESULTADO desta calculadora é mostrado no MESMO formato da
// Calculadora de IMC (medidor + valor + descrição) para ficarem
// visualmente IGUAIS.
// ============================================================

// --- Importações: ferramentas visuais que vamos usar ---
import * as React from 'react';                 // Biblioteca base do React
import Box from '@mui/material/Box';             // "Caixa" para organizar o layout
import TextField from '@mui/material/TextField'; // Campo de digitação
import MenuItem from '@mui/material/MenuItem';   // Opção dentro de uma lista de seleção
import Button from '@mui/material/Button';       // Botão
import Typography from '@mui/material/Typography'; // Textos
import Swal from 'sweetalert2';                  // Janela de aviso (alerta bonito)
import Medidor from './Medidor';                 // Nosso medidor (ponteiro) padronizado

export default function CalculadoraTMB() {
  // --- ESTADOS: a "memória" do componente ---
  const [peso, setPeso] = React.useState('');     // Peso digitado
  const [altura, setAltura] = React.useState('');  // Altura digitada
  const [idade, setIdade] = React.useState('');    // Idade digitada
  const [sexo, setSexo] = React.useState('');      // Sexo selecionado
  const [tmb, setTmb] = React.useState(null);      // Resultado da TMB

  // ============================================================
  // FUNÇÃO PRINCIPAL: calcula a TMB quando o formulário é enviado
  // ============================================================
  const calcularTMB = (e) => {
    e.preventDefault(); // Impede a página de recarregar

    // Se faltar algum campo, mostra um aviso e para por aqui
    if (!peso || !altura || !idade || !sexo) {
      Swal.fire('Preencha todos os campos!');
      return;
    }

    // Aplica a fórmula correta de acordo com o sexo selecionado
    let resultado = 0;
    if (sexo === 'masculino') {
      resultado = (13.7 * peso) + (5 * altura) - (6.8 * idade) + 66;
    } else {
      resultado = (9.6 * peso) + (1.8 * altura) - (4.7 * idade) + 655;
    }

    // Guarda o resultado já arredondado (sem casas decimais)
    setTmb(Math.round(resultado));
  };

  // ============================================================
  // PARTE VISUAL (o que aparece na tela)
  // ============================================================
  return (
    <Box>
      {/* Título da Calculadora */}
      <Typography variant="h6" gutterBottom>
        Calcule sua Taxa Metabólica Basal (TMB)
      </Typography>

      {/* FORMULÁRIO: campos de entrada + botão */}
      <Box component="form" onSubmit={calcularTMB} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        {/* Campo do Peso */}
        <TextField
          label="Peso (kg)"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
          fullWidth
        />
        {/* Campo da Altura */}
        <TextField
          label="Altura (cm)"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
          fullWidth
        />
        {/* Campo da Idade */}
        <TextField
          label="Idade (anos)"
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          fullWidth
        />
        {/* Lista de seleção do Sexo */}
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

        {/* Botão que dispara o cálculo */}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1, py: 1.5 }}>
          Calcular TMB
        </Button>
      </Box>

      {/* RESULTADO: só aparece depois que a TMB foi calculada.
          Este bloco é IGUAL ao da Calculadora IMC (padronizado). */}
      {tmb !== null && (
        <Box sx={{ mt: 4, p: { xs: 2, md: 4 }, bgcolor: 'background.default', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 4 } }}>

            {/* Medidor (ponteiro) mostrando o valor na escala de 1000 a 4000 */}
            <Box sx={{ flexShrink: 0 }}>
              <Medidor value={tmb} min={1000} max={4000} />
            </Box>

            {/* Textos do resultado */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {/* Rótulo + valor numérico */}
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.5 }}>
                Sua TMB
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1 }}>
                {tmb}
              </Typography>

              {/* Rótulo + descrição da unidade */}
              <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, fontWeight: 500 }}>
                Gasto calórico
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.2 }}>
                kcal por dia
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
