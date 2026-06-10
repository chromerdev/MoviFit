// ============================================================
// COMPONENTE: Medidor (Gauge / Velocímetro)
// ------------------------------------------------------------
// O que é: um "ponteiro" em formato de semicírculo que mostra
// visualmente um valor dentro de uma faixa (mínimo até máximo).
//
// É usado pelas DUAS calculadoras (IMC e TMB) para que o
// resultado das duas fique IGUAL na tela. Por isso ele é
// genérico: recebe o valor, o mínimo e o máximo de fora.
// ============================================================

// Importações das ferramentas que vamos usar
import { useTheme } from '@mui/material/styles';      // Pega as cores do tema do site
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'; // O gráfico de ponteiro em si

// "props" são os dados que este componente recebe de quem o usa:
//  - value: o número que o ponteiro vai apontar
//  - min:   o menor valor da escala (início do ponteiro)
//  - max:   o maior valor da escala (fim do ponteiro)
export default function Medidor({ value, min = 0, max = 100 }) {
  const theme = useTheme(); // Acessa o tema (para usar as cores padrão do site)

  // Garante que o valor seja sempre um número. Se vier vazio, vira 0.
  const numeroValor = parseFloat(value) || 0;

  return (
    <Gauge
      width={140}
      height={140}
      value={numeroValor}   // Valor que o ponteiro aponta
      valueMin={min}        // Início da escala
      valueMax={max}        // Fim da escala
      startAngle={-110}     // Ângulo onde o desenho começa (lado esquerdo)
      endAngle={110}        // Ângulo onde o desenho termina (lado direito)
      sx={{
        // Estilo do NÚMERO que aparece no centro do medidor
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 28,
          fontWeight: '800',
          fill: theme.palette.text.primary,
        },
        // Cor do arco PREENCHIDO (a parte que representa o valor).
        // Usamos uma cor única do tema (sem escala de cores).
        [`& .${gaugeClasses.valueArc}`]: {
          fill: theme.palette.primary.main,
        },
        // Cor do arco de FUNDO (a parte vazia, de referência)
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.divider,
        },
      }}
    />
  );
}
