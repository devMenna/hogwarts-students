import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const boxStyle = {
  backgroundColor: '#557789a6',
  color: 'white',
  borderRadius: '1%',
  marginBottom: '2%',
  input: { color: 'white', borderBlockColor: 'white' },
};

const buttonStyle = {
  backgroundColor: '#2E5B70',
  textDecoration: 'none',
  color: 'white',
  padding: '0.7vw 1.1vw 0.7vw 1.1vw',
  marginLeft: '2%',
  fontSize: '0.7vw',
  fontWeight: 500,
};

const SearchResult = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState('');

  const searchVal = window.location.href
    .split('/')
    .find((element) => element === 'potions' || element === 'spells');

  const searchResult = useSelector((state) => state[searchVal]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = (e) => {};

  return (
    <Box>
      <form>
        <Box>
          <Typography className='get-started' variant='h6'>
            <p>
              Here you can search and prep for your spells or potions class!
              <br />
              put in the words and let US do the magic! "Pun intended"
            </p>
          </Typography>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}
          >
            <TextField
              sx={boxStyle}
              style={{ marginTop: '12%', width: '15%' }}
              placeholder='Enter potion or spell name'
            />

            <Button type='submit' style={buttonStyle}>
              Search
            </Button>
          </Box>
        </Box>
      </form>
      {searchResult && (
        <ImageList
          cols={3}
          style={{
            margin: '1% 5% 5% 5%',
          }}
          gap={10}
        >
          {searchResult.slice(0, 21).map((item) => (
            <Link
              to={`${searchVal}-details/${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none', color: 'white' }}
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
                    item.attributes?.image
                      ? item.attributes.image
                      : 'https://images.unsplash.com/photo-1663465374413-83cba00bff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                  }
                  srcSet={item.attributes?.image}
                  alt={item.name}
                  loading='lazy'
                  style={{ width: '20vw', height: '20vw' }}
                />
                <ImageListItemBar
                  title={item.name}
                  style={{ textAlign: 'center' }}
                  subtitle={
                    <span style={{ fontSize: '1rem' }}>
                      {item.attributes.name}
                    </span>
                  }
                  position='below'
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default SearchResult;
