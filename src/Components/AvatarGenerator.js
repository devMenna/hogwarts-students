import { useMemo, useState} from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import { Button } from '@mui/material';



function AvatarGenerator() {

  const [random, setRandom] = useState(1)

  const avatar = useMemo(() => {
    return createAvatar(adventurer, {
      size: 128,
      seed: random,
      features: ["birthmark","blush","freckles"],
      featuresProbability: 100,
      glasses: ["variant01","variant02","variant03",'variant04','variant05'],
      glassesProbability: 60,
      skinColor: ["ecad80","f2d3b1"]
    }).toDataUriSync();
  }, [random]);

  return (
  <div>
    <img src={avatar} alt="Avatar" />
    <Button onClick={() => setRandom(Math.random())}> Generate </Button>
  </div>);
}

export default AvatarGenerator;
