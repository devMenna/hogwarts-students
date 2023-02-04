import { useMemo, useState} from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import { Button } from '@mui/material';
import { Replay } from '@mui/icons-material';



function AvatarGenerator() {

  const [random, setRandom] = useState(0)

  const avatar = useMemo(() => {
    return createAvatar(adventurer, {
      size: 260,
      seed: random,
      features: ["birthmark","blush","freckles"],
      featuresProbability: 100,
      glasses: ["variant01","variant02","variant03",'variant04','variant05'],
      glassesProbability: 50,
      skinColor: ["ecad80","f2d3b1"],
      backgroundType: ["gradientLinear"],
      backgroundColor: ["2D5B71","0C1F31"]
    }).toDataUriSync();
  }, [random]);

  return (
  <div style={{display: 'flex', alignItems:'center', marginBottom: '6vw'}}>
    <img src={avatar} alt="Avatar" id='avatar' style={{borderRadius: '10%', marginLeft: '7vw'}} />

    <Button onClick={() => setRandom(Math.random())} style={{
      backgroundColor: '#2E5B70',
      textDecoration: 'none',
      color: 'white',
      padding: '0.7vw 1.1vw 0.7vw 1.1vw',
      marginLeft: '1vw',
      fontSize: '1vw',
      fontWeight: 500
      }}> Generate 
      
      <Replay style={{
        fontSize: 'large',
        color: '#FDD023',
        marginLeft: 5}} /> 
        
        </Button>
  </div>);
}

export default AvatarGenerator;
