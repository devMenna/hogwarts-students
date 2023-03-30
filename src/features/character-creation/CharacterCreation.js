import React, { useMemo, useState } from 'react';
import Header from '../../Components/Header';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { adventurer } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { Replay } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { createdUser } from './characterSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import houses from '../../utils/houses';

const CharacterCreation = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [isSelected, setIsSelected] = useState(null);
  const [random, setRandom] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const avatar = useMemo(() => {
    return createAvatar(adventurer, {
      size: 270,
      seed: random,
      features: ['birthmark', 'blush', 'freckles'],
      featuresProbability: 100,
      glasses: [
        'variant01',
        'variant02',
        'variant03',
        'variant04',
        'variant05',
      ],
      glassesProbability: 50,
      skinColor: ['ecad80', 'f2d3b1'],
    }).toDataUriSync();
  }, [random]);

  const submitHandle = async () => {
    const allHouseData = (
      await axios.get('https://wizard-world-api.herokuapp.com/houses')
    ).data;

    const houseId = allHouseData.find(
      (element) =>
        element.name === houses.find((house) => house.id === isSelected).house
    ).id;

    const houseCall = (
      await axios.get(
        'https://wizard-world-api.herokuapp.com/houses/' + houseId
      )
    ).data;
    console.log(houseCall);

    const currentHouse = houses.find((house) => house.id === isSelected);

    const formattedInput = {
      userName: name,
      userYear: year,
      userAvatar: avatar,
      userHouse: currentHouse.house,
      houseAnimal: houseCall.animal,
      houseAnimalPic: currentHouse.houseAnimal,
      houseFounder: houseCall.founder,
      houseFounderPic: currentHouse.houseFounder,
      houseGhost: houseCall.ghost,
      houseGhostPic: currentHouse.houseGhost,
      houseHead: currentHouse.houseHead,
      houseHeadPic: currentHouse.headPic,
      houseTraits: houseCall.traits,
      //  ...houseCall.data
    };

    dispatch(createdUser(formattedInput));

    navigate('/dashboard');
  };

  const houseClick = (id) => {
    setIsSelected(id);
  };

  const yearChange = (e) => {
    setYear(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const boxStyle = {
    backgroundColor: '#557789a6',
    color: 'white',
    borderRadius: '1%',
    marginBottom: '5%',
    input: { color: 'white', borderBlockColor: 'white' },
  };

  const labelStyle = {
    fontSize: '1.2vw',
    width: '100%',
    fontWeight: 100,
    marginBottom: '0.8vw',
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
    <Box className='page-content'>
      <Header />
      <Typography className='get-started' variant='h6'>
        <p>
          Let's get you started, we only need a few information...
          <br /> Trust the process it's worth it.
        </p>
      </Typography>

      <Container
        className='avatar-box'
        sx={{
          borderRadius: '16px',
          mt: '12%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          minWidth: '100%',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '6vw' }}
        >
          <img
            src={avatar}
            className='avatar'
            alt='Avatar'
            id='avatar'
            style={{ borderRadius: '10%', marginLeft: '9vw' }}
          />

          <Button onClick={() => setRandom(Math.random())} style={buttonStyle}>
            {' '}
            Generate
            <Replay
              style={{
                fontSize: 'large',
                color: '#FDD023',
                marginLeft: 5,
              }}
            />
          </Button>
        </div>

        <List sx={{ width: '50%' }}>
          <ListItem
            disablePadding
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '80%',
            }}
          >
            <label htmlFor='name' style={labelStyle}>
              Name
            </label>

            <TextField
              id='name'
              fullWidth
              sx={boxStyle}
              value={name}
              onChange={nameChange}
            />
          </ListItem>

          <ListItem
            disablePadding
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <label htmlFor='year' style={labelStyle}>
              Year
            </label>
            <Select
              labelId='year'
              id='year'
              value={year}
              onChange={yearChange}
              autoWidth
              label='Year'
              style={boxStyle}
            >
              <MenuItem value={'1st'} default>
                1st
              </MenuItem>
              <MenuItem value={'2nd'}>2nd</MenuItem>
              <MenuItem value={'3rd'}>3rd</MenuItem>
              <MenuItem value={'4th'}>4th</MenuItem>
              <MenuItem value={'5th'}>5th</MenuItem>
              <MenuItem value={'6th'}>6th</MenuItem>
              <MenuItem value={'7th'}>7th</MenuItem>
            </Select>
          </ListItem>

          <ListItem
            disablePadding
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <label htmlFor='name' style={labelStyle}>
              House
            </label>

            <ImageList cols={4}>
              {houses.map((item) => (
                <ImageListItem key={item.id}>
                  <div
                    className={isSelected === item.id ? 'selected-house' : null}
                  >
                    <Button
                      disableTouchRipple
                      disableFocusRipple
                      onClick={() => houseClick(item.id)}
                    >
                      <img
                        id={item.id}
                        src={item.houseLogo}
                        srcSet={item.houseLogo}
                        alt={item.house}
                        loading='lazy'
                        style={{
                          width: '80%',
                        }}
                      />
                    </Button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          </ListItem>
        </List>
      </Container>
      {name && year && isSelected && (
        <Button
          onClick={submitHandle}
          className='submit'
          style={{ ...buttonStyle, marginTop: '2vw', marginBottom: '3vw' }}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default CharacterCreation;
