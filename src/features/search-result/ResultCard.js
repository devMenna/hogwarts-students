import { Box, Button, Chip, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import { Favorite } from '@mui/icons-material';
import { favoritesResult } from '../favorites/favoritesSlice';

const ResultCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchVal = window.location.href
    .split('/')
    .find((element) => element === 'potions' || element === 'spells');

  const searchCategory = useSelector((state) => state[searchVal]);

  const selectedItem = searchCategory.find((elem) => elem.id === id);
  console.log(selectedItem);

  const handleClick = (e) => {
    dispatch(favoritesResult(selectedItem));
  };

  const buttonStyle = {
    backgroundColor: '#2E5B70',
    textDecoration: 'none',
    color: 'white',
    padding: '0.7vw 1.1vw 0.7vw 1.1vw',
    marginLeft: '1vw',
    fontSize: '1vw',
    fontWeight: 500,
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 5,
          backgroundColor: '#12324A',
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Box
          component='img'
          sx={{
            height: 400,
            width: 450,
          }}
          alt={searchVal}
          src={
            selectedItem.attributes?.image
              ? selectedItem.attributes.image
              : 'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          }
        />

        <Container>
          {searchVal === 'potions' && (
            <Container
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: 2 }}>
                <Chip
                  label={'Effect: ' + selectedItem.attributes.effect}
                  sx={{
                    color: 'white',
                    background: '#2E5B70',
                    marginRight: 1,
                    marginTop: 1,
                    fontWeight: 10,
                    fontSize: '0.9vw',
                  }}
                />
              </Box>

              <Typography gutterBottom variant='h5' component='div'>
                {selectedItem.attributes.name}
              </Typography>

              <Typography
                variant='body2'
                style={{ width: '60%', marginTop: '5%', fontSize: '1.3vw' }}
              >
                <span style={{ color: '#FCCF23' }}>Ingredients: </span>
                {selectedItem.attributes.ingredients}
              </Typography>
              <Typography
                variant='body2'
                style={{
                  width: '60%',
                  marginTop: '5%',
                  marginBottom: '5%',
                  fontSize: '1.3vw',
                }}
              >
                <span style={{ color: '#FCCF23' }}>Characteristics: </span>{' '}
                {selectedItem.attributes.characteristics}
              </Typography>
            </Container>
          )}
          {searchVal === 'spells' && (
            <Container
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: 2 }}>
                <Chip
                  label={'Effect: ' + selectedItem.attributes.effect}
                  sx={{
                    color: 'white',
                    background: '#2E5B70',
                    marginRight: 1,
                    marginTop: 1,
                    fontWeight: 10,
                    fontSize: '0.9vw',
                  }}
                />
              </Box>

              <Typography gutterBottom variant='h5' component='div'>
                <span style={{ color: '#FCCF23' }}>
                  {selectedItem.attributes.category}:{' '}
                </span>{' '}
                {selectedItem.attributes.name}
              </Typography>

              <Typography
                variant='body2'
                style={{ width: '60%', marginTop: '3%', fontSize: '1.3vw' }}
              >
                <span style={{ color: '#FCCF23' }}>Incantation: </span>
                {selectedItem.attributes.incantation}
              </Typography>
              <Typography
                variant='body2'
                style={{
                  width: '60%',
                  marginTop: '3%',
                  marginBottom: '3%',
                  fontSize: '1.3vw',
                }}
              >
                <span style={{ color: '#FCCF23' }}>Hand: </span>{' '}
                {selectedItem.attributes.hand}
              </Typography>
              <Typography
                variant='body2'
                style={{
                  width: '60%',
                  marginTop: '3%',
                  marginBottom: '3%',
                  fontSize: '1.3vw',
                }}
              >
                <span style={{ color: '#FCCF23' }}>Light: </span>{' '}
                {selectedItem.attributes.light}
              </Typography>
            </Container>
          )}

          <Button
            variant='contained'
            sx={buttonStyle}
            href={selectedItem.attributes.wiki}
            target='_blank'
          >
            Check out the Wiki
          </Button>

          <Button
            variant='contained'
            sx={buttonStyle}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button variant='contained' sx={buttonStyle} onClick={handleClick}>
            <Favorite />
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default ResultCard;
