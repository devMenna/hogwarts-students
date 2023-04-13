import { Box, ImageList, Typography } from '@mui/material';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';
import FavoritesList from './FavoritesList';

const Favorites = () => {
  const favoritesList = useSelector((state) => state.favorites);

  return (
    <Box>
      <Header />
      <Box>
        <Typography variant='h4'>
          <p>Favorite spells and potions</p>
        </Typography>
      </Box>
      <Box>
        <ImageList
          cols={2}
          style={{
            margin: '3% 2% 3% 4%',
          }}
          gap={20}
        >
          {favoritesList.slice(0, 4).map((favItem) => (
            <FavoritesList favItem={favItem} key={favItem.id} />
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Favorites;
