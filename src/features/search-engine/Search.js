import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { potionsResult } from './potionsSlice';

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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      setIsLoading(true);

      const resultSet = (await axios.get('https://api.potterdb.com/v1/potions'))
        .data.data;
      setData(resultSet);

      console.log(resultSet);
      dispatch(potionsResult(resultSet));

      if (resultSet) {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = async (e) => {};

  return (
    <Box>
      <Header />

      <form onSubmit={searchSubmit}>
        <Box>
          <Typography className='get-started' variant='h6'>
            <p>
              Here you can search and prep for your potions or spells class!
              <br />
              Type words and let US do the magic! "Pun intended"
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
