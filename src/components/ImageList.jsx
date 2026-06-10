// ============================================================
// COMPONENTE: StandardImageList  (GALERIA DE IMAGENS)
// ------------------------------------------------------------
// Mostra uma grade (grid) de imagens. É usado na página Home
// para deixar a apresentação mais visual e atraente.
// ============================================================

import ImageList from '@mui/material/ImageList';         // Grade de imagens
import ImageListItem from '@mui/material/ImageListItem'; // Cada imagem dentro da grade

export default function StandardImageList() {
  return (
    <ImageList
      sx={{ width: '100%', maxWidth: 1000, borderRadius: 4, overflow: 'hidden', m: 0 }}
      cols={4}        // Número de colunas
      rowHeight={164} // Altura de cada linha de imagens
      gap={8}         // Espaçamento entre as imagens
    >
      {/* Percorre a lista "itemData" e cria uma imagem para cada item */}
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            // "srcSet" e "src" carregam a imagem em tamanho adequado
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy" // Carrega a imagem só quando ela vai aparecer na tela (mais rápido)
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// ------------------------------------------------------------
// itemData: a LISTA de imagens (endereço da imagem + título).
// Para adicionar/remover imagens da galeria, edite esta lista.
// ------------------------------------------------------------
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://www.altoastral.com.br/antigas/uploads/legacy/2016/11/corrida.jpg',
    title: 'Runner',
  },
  {
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
    title: 'Remedio',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://i.pinimg.com/1200x/e4/30/bc/e430bc98c9eeee9cca5cbf4e27e52439.jpg',
    title: 'Fruit salad',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
