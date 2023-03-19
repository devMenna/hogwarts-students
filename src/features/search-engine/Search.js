import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { potionsResult } from './potionsSlice';
import { spellsResult } from './spellsSlice';
import SearchResult from '../search-result/SearchResult';

const Search = () => {
  const dispatch = useDispatch();
  const searchVal = window.location.href
    .split('/')
    .find((element) => element === 'potions' || element === 'spells');

  const currentState = useSelector((state) => state[searchVal]);

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

  return (
    <Box>
      <Header />

      <SearchResult />
    </Box>
  );
};

export default Search;
