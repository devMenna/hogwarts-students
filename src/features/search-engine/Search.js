import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { potionsResult } from './potionsSlice';
import { spellsResult } from './spellsSlice';

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

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState('');

  const dispatch = useDispatch();
  const searchVal = window.location.href
    .split('/')
    .find((element) => element === 'potions' || element === 'spells');

  const currentState = useSelector((state) => state[searchVal]);
  console.log(currentState['potions']);

  useEffect(() => {
    (async function () {
      const resultSet = (
        await axios.get('https://api.potterdb.com/v1/' + searchVal)
      )?.data?.data;

      if (searchVal === 'potions' && !currentState.length) {
        dispatch(potionsResult(resultSet));
      } else if (searchVal === 'spells' && !currentState.length) {
        dispatch(spellsResult(resultSet));
      }
    })();
  }, [dispatch, searchVal, currentState]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = (e) => {};

  return (
    <Box>
      <Header />

      <form onSubmit={searchSubmit}>
        <Box>
          <Typography className='get-started' variant='h6'>
            <p>
              Here you can search and prep for your {searchVal} class!
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
              value={searchInput}
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
    </Box>
  );
};

export default Search;
