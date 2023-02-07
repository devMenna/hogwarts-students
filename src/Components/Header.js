import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AutoFixHigh, Face, Home, Science  } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Header = () => {

  const userAvatar = useSelector((state) => state.user.mainUser?.userAvatar)


  return (
    <Box className = 'appBar' style={{bgColor: 'background.paper'}}>
      <Box>
      <List style={{display: 'flex', flexDirection: 'row', width: '40%'}}>
      <ListItem >
            <ListItemButton>
              <ListItemIcon style={{color: '#FCCF23', fontSize: 'medium'}} >
                <Home style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
      <ListItem>
            <ListItemButton>
              <ListItemIcon style={{color: '#FCCF23', fontSize: 'medium'}}>
                <Science style={{width: '90%'}} />
              </ListItemIcon>
              <ListItemText primary="Potions" />
            </ListItemButton>
          </ListItem>
      <ListItem>
            <ListItemButton>
              <ListItemIcon style={{color: '#FCCF23', fontSize: 'medium'}}>
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
      <Box>
      {userAvatar && <img src={userAvatar? userAvatar : ''} style={{margin: '1vw', width: '2vw'}} />}
      </Box>

    </Box>
  )
}

export default Header