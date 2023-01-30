import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <Box className = 'appBar' style={{backgroundColor: '#2E5B70'}}>
      <List>
      <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default Header