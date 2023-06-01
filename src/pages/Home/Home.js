import React,{useEffect} from 'react'
import GameCard from '../../component/GameCard/GameCard'
import spinwheel from '../../assets/spin-wheel.png'
import carddisplay from '../../assets/carddisplay.jpg'
import { useNavigate } from "react-router-dom";
import './Home.css'
import { getallcoupon } from '../../action/action';
import { useDispatch } from 'react-redux';

const Home = () => {
  let navigate=useNavigate();
  const user = JSON.parse(window.localStorage.getItem("userprofile"));
  let dispatch=useDispatch()
  useEffect(() => {
    if(user){
      dispatch(getallcoupon({id:user?.result?._id}))
    }
  }, [])


  
  return (
    <div className='homediv'>
      <GameCard src={spinwheel} game={"Spin-the-Wheel"} discrption={"Spin the wheel and win amazing prizes!! try your luck"} onClick={()=>{navigate('/spinwheel')}}/>
      <GameCard src={carddisplay} game={"Pick-the-Card"} discrption={"Pick the card and win amazing prizes!! try your luck"} onClick={()=>{navigate('/cardpick')}}/>
    </div>
  )
}

export default Home