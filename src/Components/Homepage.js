import { Container, Typography, Button } from '@mui/material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import React from 'react'
import "@fontsource/medievalsharp";

const Homepage = () => {
  return (
    <Container className='home'>

        <Container className='home-content' style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <Typography style={{fontFamily: 'medievalsharp', fontWeight: 700, fontSize: '4vw'}}>
                <h2>
                <span>Welcome</span>
                <span>To</span>
                <span>Hogwarts</span>
                <span><ElectricBoltIcon style={{fontSize: '5vw', color: '#FDD023'}}/> </span>
                </h2>
</Typography>
        <Button variant="contained" color= "secondary" className='start'>Get started</Button>

        </Container>
    </Container>
  )
}

export default Homepage