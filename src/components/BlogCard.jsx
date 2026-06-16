// ============================================================
// COMPONENTE: BlogCard
// ------------------------------------------------------------
// Mostra um cartão de blog reutilizável com imagem, categoria,
// título, data e descrição. Ao clicar, abre o artigo em nova aba.
// ============================================================

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ExpandMore = styled(({ expand, ...other }) => {
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function BlogCard({ post }) {

  const [expanded, setExpanded] = useState(false);
  const [favorito, setFavorito] = useState(false);
  

  const handleExpandClick = (event) => {
    event.stopPropagation(); // impede abrir o link
    setExpanded(prev => !prev);
  };

  return (
    <Card
      sx={{
        minHeight: 430,
        height: 'auto',
        borderRadius: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea
        onClick={() => setExpanded(!expanded)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          component="img"
          image={post.imagem}
          alt={post.titulo}
          sx={{
            height: 220,
            objectFit: 'cover',
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Chip
            label={post.categoria}
            size="small"
            color="primary"
            variant="outlined"
            sx={{
              width: 'fit-content',
              mb: 2,
            }}
          />

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 1,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: 64,
            }}
          >
            {post.titulo}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {post.data}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.descricao}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="adicionar aos favoritos"
            onClick={(event) => {
              event.stopPropagation();
              setFavorito(!favorito);
            }}>
            <FavoriteIcon color={favorito ? 'error' : 'inherit'} />
          </IconButton>

          <IconButton aria-label="compartilhar"
            onClick={(event) => {
              event.stopPropagation();
              window.open(post.url, '_blank');
            }}>
            <ShareIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="mostrar mais"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.conteudo}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
