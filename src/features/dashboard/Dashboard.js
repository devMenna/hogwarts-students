import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header'

const Dashboard = () => {

    const userData = useSelector((state) => state.user.mainUser)
    console.log(userData)

  return (
    <div>
        <Header />
        <p>Hi</p>
    </div>
  )
}

export default Dashboard