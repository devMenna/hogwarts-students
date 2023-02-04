import React, { useState } from 'react'
import AvatarGenerator from '../../Components/AvatarGenerator'
import Header from '../../Components/Header'
import { Box, ImageList, ImageListItem, ImageListItemBar, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, TextField, Typography,  } from '@mui/material'
import { Container } from '@mui/system';

const CharacterCreation = () => {

  const [year, setYear] = useState(1);
  const handleChange = (event) => {
  setYear(event.target.value);
};

  const boxStyle = {
    backgroundColor:'#557789a6',
    color:'white',
    borderRadius: '1%',
    marginBottom: '5%',
    input: {color: 'white', borderBlockColor: 'white'},
    
    }

  const labelStyle = {
      fontSize: '1.2vw',
       width: '100%',
       fontWeight: 100,
       marginBottom:'0.8vw'
  }

  const houses = [{'house': 'Gryffindor', 
                   'imageSource': 'https://i.pinimg.com/564x/05/fe/a7/05fea7e886d20a43dca6ba9b3bb335ce.jpg'},
                   {'house': 'Slytherin', 
                   'imageSource': 'https://i.pinimg.com/564x/34/ad/bf/34adbf92b50198013bc64775ed0a5616.jpg'},
                   {'house': 'Ravenclaw', 
                   'imageSource': 'https://i.pinimg.com/564x/7c/81/8c/7c818c14c74964610a3601bda3eba946.jpg'},
                   {'house': 'Hufflepuff', 
                   'imageSource': 'https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg'}]

  return (
    <Box className='page-content'>
      <Header />
      <Typography className='get-started' variant='h6' >
            <p>Let's get you started, we only need a few information...<br /> Trust the process it's worth it.</p>
        </Typography>

        <Container className='avatar-box' sx={{
          borderRadius: '16px' ,
          mt: '12%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          minWidth:'100%',
          }}>


        <AvatarGenerator className='avatar'/>



        <List sx={{width:'50%'}}>
          <ListItem disablePadding style={{
            display:'flex',
            flexDirection:'column',
            width:'80%'

             }}>

            <label for="name" style={labelStyle}>
                Name</label>

            <TextField id='name'  fullWidth  sx={boxStyle}  />

          </ListItem>

          <ListItem disablePadding style={{
            display:'flex',
             flexDirection:'column',
             alignItems: 'flex-start',
             width: '100%'
             }}>

            <label for="year" style={labelStyle}>
                Year</label>
                <Select
                  labelId="year"
                  id="year"
                  value={year}
                  onChange={handleChange}
                  autoWidth
                  label="Year"
                  style={boxStyle}
                >
                <MenuItem value={1} default>1st</MenuItem>
                <MenuItem value={2}>2nd</MenuItem>
                <MenuItem value={3}>3rd</MenuItem>
                <MenuItem value={4}>4th</MenuItem>
                <MenuItem value={5}>5th</MenuItem>
                <MenuItem value={6}>6th</MenuItem>
                <MenuItem value={7}>7th</MenuItem>
        </Select>

      </ListItem>

      <ListItem disablePadding style={{
            display:'flex',
             flexDirection:'column',
             alignItems: 'flex-start',
             width: '100%'
             }} >

            <label for="name" style={labelStyle}>
                House</label>

                <ImageList cols={4}>
                {houses.map((item) => (
                 <ImageListItem>
                 <img
                 src={item.imageSource}
                 srcSet={item.imageSource}
                 alt={item.house}
                 loading="lazy"
                 style={{
                  width: '70%'
                 }}
            />

          </ImageListItem>
         
        ))}
      </ImageList>

          </ListItem>
          

        </List>

    </Container>

    </Box>
  )
}

export default CharacterCreation

