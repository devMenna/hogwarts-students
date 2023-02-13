import { Container, Typography, Button, Modal } from '@mui/material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import React from 'react'
import { Box } from '@mui/system';

const Homepage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ABCAD1',
    boxShadow: 24,
    p: 4,
    fontFamily: 'medievalsharp',
    fontSize: '2vw',
  };


  return (
    <Container className='home'>

        <Container className='home-content' style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
          {!open &&
            <Typography style={{fontFamily: 'medievalsharp', fontWeight: 700, fontSize: '3.5vw'}}>
                <h2 className='span-container'>
                <span className='span-title'>Welcome</span>
                <span className='span-title'>To</span>
                <span className='span-title'>Hogwarts</span>
                <span className='span-title'><ElectricBoltIcon style={{fontSize: '5vw', color: '#FDD023'}}/> </span>
                </h2>
            </Typography>}
        {!open &&<Button variant="contained" className='start btn' onClick={handleOpen}>Get started</Button>}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
>
        <Box sx={{ ...style, width: 900, height: 500 }}>
        <h2 id="parent-modal-title">Dear Hogwarts student ..</h2>
        <p id="parent-modal-description" style={{fontWeight: 500}}>
        You must've received your letter recently, congratulations!<br /><br></br> We're here to help you stay organized at Hogwarts. You can search for potions [ in case like us you're scared of professor Snape] , learn new spells, and more! how about you tell us a little about yourself?
    </p>
    <Button variant='contained' className='btn' href={'/character-creation'}  style={{marginRight: 7}} >Character creation</Button>
    <Button variant='contained' className='btn' >I'm here to browse</Button>
    <p style={{fontSize: '1.2vw', fontWeight: 100, marginTop: '1vw'}}>Have you not been sorted yet? What are you waiting for go <a href='https://www.wizardingworld.com' style={{textDecoration: 'none', color: '#FDD023'}}>Get sorted ..</a></p>
  </Box>

  </Modal>
        </Container>
    </Container>
  )
}

export default Homepage