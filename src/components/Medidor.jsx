import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function MedidorIMC({ value, color = '#4caf50' }) {
  const theme = useTheme();
  const numValue = parseFloat(value) || 0;

  return (
    <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
      <Gauge
        width={140}
        height={140}
        value={numValue}
        valueMin={10}
        valueMax={50}
        startAngle={-110}
        endAngle={110}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 28,
            fontWeight: '800',
            fill: theme.palette.text.primary,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: color,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.divider,
          },
        }}
      />
    </Stack>
  );
}
