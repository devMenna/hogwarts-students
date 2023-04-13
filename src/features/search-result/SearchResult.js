import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
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
  const searchVal = window.location.href
    .split('/')
    .find((element) => element === 'potions' || element === 'spells');

  const searchResult = useSelector((state) => state[searchVal]);

  const sec = searchResult.find((elem) =>
    elem.attributes.name.toLowerCase().includes('s')
  );
  console.log(sec);

  useEffect(() => {
    setData(searchResult);
  }, [searchResult]);

  const [data, setData] = useState([...searchResult]);

  const handleInputChange = (e) => {
    setData(
      searchResult.filter((elem) =>
        elem.attributes.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  const searchSubmit = (e) => {};

  return (
    <Box>
      <form onSubmit={searchSubmit}>
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
              onChange={handleInputChange}
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
      {data && (
        <ImageList
          cols={4}
          style={{
            margin: '1% 5% 5% 5%',
          }}
          gap={10}
        >
          {data.slice(0, 20).map((item) => (
            <Link
              to={item.id}
              key={item.id}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <ImageListItem
                className='card-hover'
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
                  style={{ width: '15vw', height: '15vw' }}
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
