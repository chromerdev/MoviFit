// ============================================================
// COMPONENTE: PageHeader (Cabeçalho de Página)
// ------------------------------------------------------------
// O que é: mostra o TÍTULO grande e um SUBTÍTULO no topo de uma
// página. É reutilizável: recebe o texto de fora.
// ============================================================

// --- Importações ---
import Box from '@mui/material/Box';               // "Caixa" para organizar o layout
import Typography from '@mui/material/Typography'; // Textos
import PropTypes from 'prop-types';                // Valida os dados recebidos

// props:
//  - title:    o título principal (obrigatório)
//  - subtitle: o texto menor abaixo do título (opcional)
//  - align:    alinhamento do texto ('center' por padrão)
export default function PageHeader({ title, subtitle, align = 'center' }) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
      {/* TÍTULO principal */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          mb: 1.5,
          fontSize: { xs: '2rem', md: '2.75rem' },
        }}
      >
        {title}
      </Typography>

      {/* SUBTÍTULO: só aparece se foi informado */}
      {subtitle && (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0, // Centraliza se o alinhamento for central
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

// Validação dos dados recebidos pelo componente
PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center']),
};
