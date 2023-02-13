import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AutoFixHigh, Face, Home, Science  } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Header = () => {

  const userData = useSelector((state) => state.user.mainUser)

  const logoStyle ={
    color: '#FCCF23',
     fontSize: 'medium'
  }


  return (
    <Box className = 'appBar' style={{bgColor: 'background.paper'}}>
      <Box>
      <List style={{display: 'flex', flexDirection: 'row', width: '40%'}}>
      <ListItem >
            <ListItemButton>
              <ListItemIcon style={logoStyle} >
                <Home style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
      <ListItem>
            <ListItemButton>
              <ListItemIcon style={logoStyle}>
                <Science style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Potions" />
            </ListItemButton>
          </ListItem>
      <ListItem>
            <ListItemButton>
              <ListItemIcon style={logoStyle}>
                <AutoFixHigh style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Spells" />
            </ListItemButton>
          </ListItem>
      <ListItem>
            <ListItemButton>
              <ListItemIcon style={{color: '#FCCF23', fontSize: 'medium'}}>
                <Face style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
      <Box style={{display: 'flex', flexDirection: 'row-reverse'}}>
      {userData && <img alt='user-avatar' src={userData? userData.userAvatar : ''} style={{margin: '1vw', width: '3vw',}} />}
      {userData && <p style={{margin: '2vw', width: '55%',}} >{userData? userData.userName : ''} </p>}
      </Box>

    </Box>
  )
}

export default Header