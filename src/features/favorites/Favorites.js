import {
  Box,
  Chip,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const chipStyle = {
    color: 'white',
    background: '#2E5B70',
    marginRight: 1,
    marginTop: 3,
    fontWeight: 10,
    fontSize: '0.9vw',
  };

  const textStyle = {
    width: '50%',
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: '1vw',
  };

  const favoritesList = useSelector((state) => state.favorites);
  console.log(favoritesList);

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
            margin: '5%',
          }}
          gap={20}
        >
          {favoritesList.slice(0, 4).map((favItem) => (
            <ImageListItem
              key={favItem.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 5,
                backgroundColor: '#12324A',
                padding: 5,
                borderRadius: 10,
                maxWidth: '569px',
                flexDirection: 'column',
                border: '0.5px solid yellow',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Box
                  component='img'
                  sx={{
                    maxHeight: 180,
                    maxWidth: 300,
                    marginLeft: 1,
                  }}
                  alt={favItem.attributes.name}
                  src={
                    favItem.attributes?.image
                      ? favItem.attributes.image
                      : 'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                  }
                />

                <Container>
                  <Container
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ marginBottom: 2 }}>
                      <Chip
                        label={'Effect: ' + favItem.attributes.effect}
                        sx={chipStyle}
                      />
                      <Chip label={'Type : ' + favItem.type} sx={chipStyle} />
                    </Box>

                    <Typography gutterBottom variant='h5' component='div'>
                      {favItem.attributes.name}
                    </Typography>

                    {favItem.type === 'spell' && (
                      <Box sx={{ marginLeft: '50%', width: '100%' }}>
                        <Typography variant='body2' style={textStyle}>
                          <span style={{ color: '#FCCF23' }}>
                            Incantation:{' '}
                          </span>
                          {favItem.attributes.incantation}
                        </Typography>
                        <Typography variant='body2' style={textStyle}>
                          <span style={{ color: '#FCCF23' }}>Hand: </span>{' '}
                          {favItem.attributes.hand}
                        </Typography>
                        <Typography variant='body2' style={textStyle}>
                          <span style={{ color: '#FCCF23' }}>Light: </span>{' '}
                          {favItem.attributes.light}
                        </Typography>
                      </Box>
                    )}

                    {favItem.type === 'potion' && (
                      <Box sx={{ marginLeft: '50%', width: '100%' }}>
                        <Typography variant='body2' style={textStyle}>
                          <span style={{ color: '#FCCF23' }}>
                            Ingredients:{' '}
                          </span>
                          {favItem.attributes.ingredients}
                        </Typography>
                        <Typography variant='body2' style={textStyle}>
                          <span style={{ color: '#FCCF23' }}>
                            Characteristics:{' '}
                          </span>{' '}
                          {favItem.attributes.characteristics}
                        </Typography>
                      </Box>
                    )}
                  </Container>
                </Container>
              </Box>

              <Typography variant='h6'>
                <span style={{ color: '#FCCF23' }}>Note: </span>
                We need to study this for professor snape's class
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Favorites;
