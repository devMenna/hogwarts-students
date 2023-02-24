import { nanoid } from "@reduxjs/toolkit";

const houses = [{id: nanoid() , house: 'Gryffindor', 
houseLogo: 'https://i.pinimg.com/564x/05/fe/a7/05fea7e886d20a43dca6ba9b3bb335ce.jpg',
houseHead : 'Minerva Mcgonagall' ,
headPic : 'https://i.pinimg.com/564x/96/8d/a3/968da3567f7e5d47deaad196ce7256a1.jpg',
houseGhost: 'https://images.ctfassets.net/usf1vwtuqyxm/1hW383qP5gy0sAeISEyKk0/7294ee2589d8c9c2d3ea515cdd2ec7d7/01-Nick-764-13-10-17.gif',
houseFounder: 'https://1970789444.rsc.cdn77.org/assets/character/godric-gryffindor_20220715144130.png',
houseAnimal : 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png',},

{id: nanoid() , house: 'Slytherin', 
houseLogo: 'https://i.pinimg.com/564x/34/ad/bf/34adbf92b50198013bc64775ed0a5616.jpg',
houseHead : 'Severus Snape' ,
headPic : 'https://i.pinimg.com/564x/c1/cd/6e/c1cd6ef254e9622e952f777aee60ff07.jpg',
houseGhost: 'https://i.pinimg.com/originals/9a/fa/50/9afa506285f1e9f08d130f23e118527a.gif',
houseFounder: 'https://1970789444.rsc.cdn77.org/assets/character/salazar-slytherin_20220623153011.png',
houseAnimal : 'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png'},

{id: nanoid() , house: 'Ravenclaw', 
houseLogo: 'https://i.pinimg.com/564x/7c/81/8c/7c818c14c74964610a3601bda3eba946.jpg',
houseHead : 'Pomona Sprout',
headPic : 'https://i.pinimg.com/564x/4f/4e/79/4f4e798a5730321dde235c4a7d2145f5.jpg',
houseGhost: 'https://images.ctfassets.net/usf1vwtuqyxm/6rf6M2lIQMKWawwWagQwia/b0bc40e808bd52a590579bc61fb12e0c/04-Grey-Lady-764-17-10-17.gif',
houseFounder: 'https://1970789444.rsc.cdn77.org/assets/character/rowena-ravenclaw_20220623152932.png',
houseAnimal : 'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png'},

{id: nanoid() ,house: 'Hufflepuff', 
houseLogo: 'https://i.pinimg.com/564x/76/45/b9/7645b9b88e14bc3d8c12954bb130fd76.jpg',
houseHead : 'Filius Flitwick',
headPic : 'https://i.pinimg.com/564x/77/de/d7/77ded7b145970a1841eb264beed0ac16.jpg',
houseGhost: 'https://static.wikia.nocookie.net/harrypotter/images/d/d4/PM_Hogwarts_ghost_Fat_Friar.gif/',
houseFounder: 'https://1970789444.rsc.cdn77.org/assets/character/helga-hufflepuff_20220715133010.png',
houseAnimal : 'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png'}]

export default houses