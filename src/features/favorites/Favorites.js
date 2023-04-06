import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';

const Favorites = () => {
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
      <Container sx={{ mt: '5%' }}>
        <ImageList
          cols={2}
          style={{
            margin: '1% 5% 2% 2%',
          }}
          gap={20}
        >
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'h'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'h'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'test'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'test'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'test'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'test'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'test'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'test'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'test'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'test'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
          <ImageListItem
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '0.5px solid yellow',
              borderRadius: 10,
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              srcSet={
                'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              }
              alt={'test'}
              loading='lazy'
              style={{ width: '15vw', height: '15vw' }}
            />
            <ImageListItemBar
              title={'test'}
              style={{ textAlign: 'center' }}
              subtitle={
                <span style={{ fontSize: '1rem' }}>hello what am i</span>
              }
              position='below'
            />
          </ImageListItem>
        </ImageList>
      </Container>
    </Box>
  );
};

export default Favorites;
