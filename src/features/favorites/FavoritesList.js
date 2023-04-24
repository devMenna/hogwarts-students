import { Check } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  ImageListItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noteFavorite, resetNote } from './noteSlice';

const FavoritesList = ({ favItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState('');

  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleDoneEditing = (id) => {
    setIsEditing(false);

    const newNote = {
      ...allNotes.find((note) => note.favoriteItemId === id),
      note: note,
    };

    const updatedNotes = allNotes.filter((note) => note.favoriteItemId !== id);
    updatedNotes.push(newNote);

    dispatch(resetNote());
    updatedNotes.forEach((note) => dispatch(noteFavorite(note))); // Dispatch the updated notes
  };

  const textStyle = {
    width: '50%',
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: '1vw',
  };
  const buttonStyle = {
    backgroundColor: '#2E5B70',
    textDecoration: 'none',
    color: 'white',
    padding: '0.5vw 1vw 0.5vw 1vw',
    marginLeft: '8vw',
    top: 0,
    marginBottom: '0.8vw',
    fontSize: '0.6em',
    fontWeight: 400,
  };
  const boxStyle = {
    backgroundColor: '#557789a6',
    color: 'white',
    borderRadius: 10,
    marginBottom: '5%',
    marginLeft: '5%',
    input: { color: 'white', borderBlockColor: 'white' },
    width: '20vw',
  };

  return (
    <ImageListItem
      key={favItem.id}
      sx={{
        marginTop: 5,
        backgroundColor: '#12324A',
        padding: 5,
        borderRadius: 10,
        maxWidth: '569px',
        border: '0.5px solid yellow',
        display: 'block',
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
            <Typography gutterBottom variant='h5' component='div'>
              {favItem.type + ': '}
              {favItem.attributes.name}
            </Typography>

            {favItem.type === 'spell' && (
              <Box sx={{ marginLeft: '50%', width: '111%' }}>
                <Typography variant='body2' style={textStyle}>
                  <span style={{ color: '#FCCF23' }}>Incantation: </span>
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
                  <span style={{ color: '#FCCF23' }}>Ingredients: </span>
                  {favItem.attributes.ingredients}
                </Typography>
                <Typography variant='body2' style={textStyle}>
                  <span style={{ color: '#FCCF23' }}>Characteristics: </span>{' '}
                  {favItem.attributes.characteristics}
                </Typography>
                <Typography variant='body2' style={textStyle}>
                  <span style={{ color: '#FCCF23' }}>Effect: </span>{' '}
                  {favItem.attributes.effect}
                </Typography>
              </Box>
            )}
          </Container>
        </Container>
      </Box>

      <Typography
        variant='h6'
        style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <span style={{ color: '#FCCF23' }}>Note: </span>
        {isEditing ? (
          <Box style={{ display: 'flex' }}>
            <TextField
              className='input-field'
              value={note}
              onChange={handleNoteChange}
              style={boxStyle}
            />

            <Button
              onClick={() => {
                handleDoneEditing(favItem.id);
              }}
              style={{ ...buttonStyle }}
            >
              <Check />
            </Button>
          </Box>
        ) : (
          <Box>
            <span style={{ marginRight: '5%' }}> {note}</span>
            <Button onClick={handleEditClick} style={{ ...buttonStyle }}>
              Edit note
            </Button>
          </Box>
        )}
      </Typography>
    </ImageListItem>
  );
};

export default FavoritesList;
