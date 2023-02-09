import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import axios from 'axios'
import { Button } from '@mui/material'

const Dashboard = () => {

    const userData = useSelector((state) => state.user.mainUser)
    console.log(userData.userHouse)


   const call = async() => {

    const allHouseData = await axios.get('https://wizard-world-api.herokuapp.com/houses')

    const houseId = allHouseData.data.find(element => element.name === userData.userHouse ).id

    const houseCall = await axios.get('https://wizard-world-api.herokuapp.com/houses/' + houseId)

    console.log(houseCall.data)
   }



  return (
    <div>
        <Header />
        
        <p>Hi</p>
        <Button contained onClick={call}>Click</Button>
    </div>
  )
}

export default Dashboard