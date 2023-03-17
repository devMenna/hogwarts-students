import { useSelector } from 'react-redux';
import Header from '../../Components/Header';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const Dashboard = () => {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    console.log(userData);
    if (!userData) {
      navigate('/character-creation');
    }
  }, [userData, navigate]);

  if (!userData) {
    return;
  }

  const cardStyle = {
    backgroundColor: 'transparent',
    maxWidth: '28%',
    margin: '3%',
    border: '0.2vw solid #FCCF23',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '50%',
  };

  const buttonStyle = {
    backgroundColor: '#2E5B70',
    textDecoration: 'none',
    color: 'white',
    padding: '0',
    marginTop: '15%',
    fontSize: '0.8vw',
    fontWeight: 500,
    maxHeight: '20%',
  };

  return (
    <Box>
      <Header />
      <Box
        className='dashboard-content'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Card style={cardStyle}>
          <CardMedia
            component='img'
            image={userData.userAvatar}
            alt='user avatar'
            style={{ marginBottom: '0%', width: '40%' }}
          />
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              color='white'
              style={{ fontSize: '1.1vw' }}
            >
              {userData.userName}
            </Typography>
            <Typography
              variant='body3'
              color='white'
              style={{ fontSize: '81%' }}
            >
              House : {userData.userHouse} <br />
              Year : {userData.userYear}
            </Typography>
          </CardContent>
          <Button style={buttonStyle} onClick={() => navigate(-1)}>
            Edit
          </Button>
        </Card>

        <Box
          className='dashboard-text'
          style={{ margin: '4%', marginBottom: 0 }}
        >
          <p style={{ color: '#FCCF23', width: '100%', fontSize: '3vw' }}>
            About {userData.userHouse}
          </p>

          <List sx={{ display: 'flex' }}>
            <ListItem
              style={{ minWidth: '24%', fontSize: '1.3vw', color: '#FCCF23' }}
            >
              Students traits :{' '}
            </ListItem>
            {userData.houseTraits.map((elem) => (
              <ListItem key={nanoid()}>{elem.name}</ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <ImageList
        cols={4}
        sx={{
          width: '90%',
          margin: '5% 8% 5% 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ImageListItem style={{ width: '20%' }}>
          <img
            src={userData.houseAnimalPic}
            alt={userData.houseAnimal}
            loading='lazy'
          />
          <ImageListItemBar
            title='House Animal : '
            subtitle={userData.houseAnimal}
          />
        </ImageListItem>
        <ImageListItem style={{ width: '20%' }}>
          <img
            src={userData.houseGhostPic}
            alt={userData.houseGhost}
            loading='lazy'
          />
          <ImageListItemBar
            title='House Ghost : '
            subtitle={userData.houseGhost}
          />
        </ImageListItem>
        <ImageListItem style={{ width: '20%' }}>
          <img
            src={userData.houseFounderPic}
            alt={userData.houseFounder}
            loading='lazy'
          />
          <ImageListItemBar
            title='House Founder : '
            subtitle={userData.houseFounder}
          />
        </ImageListItem>
        <ImageListItem style={{ width: '20%' }}>
          <img
            src={userData.houseHeadPic}
            alt={userData.houseHead}
            loading='lazy'
          />
          <ImageListItemBar
            title='House head : '
            subtitle={userData.houseHead}
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Dashboard;
