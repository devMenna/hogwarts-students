import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const navigate = useNavigate()

    const userData = useSelector((state) => state.user.mainUser)
    console.log(userData)

    useEffect(() => {
      if(!userData){
        navigate('/')
      }

    } , [userData, navigate])

    const cardStyle ={
      backgroundColor: 'transparent',
      maxWidth: '18%', margin:'2%', border:'0.2vw solid #FCCF23'
    }

    const buttonStyle = {
      backgroundColor: '#2E5B70',
      textDecoration: 'none',
      color: 'white',
      padding: '0.7vw ',
      marginBottom: '0.5vw',
      fontSize: '0.9vw',
      fontWeight: 500
      }


  return (
    <Box >
        <Header />
        <Box className = 'dashboard-content' style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>

        <Card style={cardStyle}>
        <CardMedia
          component="img"
          image= {userData.userAvatar}
          alt="user avatar"
          style={{marginBottom: '0%'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='white'>
            {userData.userName}
          </Typography>
          <Typography variant="body3" color='white' style={{fontSize: '90%' }} >
          House : {userData.userHouse} <br />
          Year : {userData.userYear} 
          </Typography>
        </CardContent>
        <Button style={buttonStyle} onClick={() => navigate('/character-creation')}>Edit</Button>
    </Card>
    <Box className='dashboard-text'>
    <p style={{color: '#FCCF23', marginRight: '3vw', marginTop: '2vw', width:'100%', fontSize: '3vw'}}>About {userData.userHouse}</p>
    </Box>
    <img src={userData.houseHeadPic} alt='test'></img>
    </Box>
    </Box>
  )
}

export default Dashboard