import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function PageHeader({ title, subtitle, align = 'center' }) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
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
      {subtitle && (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center']),
};
