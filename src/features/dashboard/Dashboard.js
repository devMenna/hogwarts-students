import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../character-creation/characterSlice'
import Header from '../../Components/Header'

const Dashboard = () => {

    const userData = useSelector(selectUserData)
    console.log(userData)

  return (
    <div>
        <Header />
        <p>Hi</p>
    </div>
  )
}

export default Dashboard