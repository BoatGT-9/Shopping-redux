import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import MyCart from './MyCart'
const Page = () => {
    const page = useSelector((state)=>state.pages);
  return (
    <div>
        
      <Home/>
    </div>
  )
}

export default Page
