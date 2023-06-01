import React,{useState,useEffect}from 'react'
import WheelComponent from "react-wheel-of-prizes";
import Confetti from 'react-confetti'
import {Modal} from '@mui/material'
import './Spinwheel.css'
import { coupon } from '../../action/action';
import { useDispatch } from 'react-redux';

const SpinWheel = () => {

  const [prize,setprize]=useState('')
  const [openconfetti,setopenconfetti]=useState(false)
  const user = JSON.parse(window.localStorage.getItem("userprofile"));
  let dispatch=useDispatch()
  const segments = [
    "better luck next time",
    "won 70% off on Myntra",
    "won 10 ruppe cashback",
    "better luck next time",
    "won 2 movie ticket",
    "won uber pass",
    "won 20% off on mama earth",
    "won a Bus voucher"
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000"
  ];
  const onFinished = (winner) => {
    setprize(winner);
    if(winner!=='better luck next time'){
      setopenconfetti(true)
    }
  };

  useEffect(()=>{

  },[openconfetti])

  const randomNumber=()=>{
    let difference = segments.length - 0;

    let rand = Math.random();

    
    rand = Math.floor( rand * difference);

    rand = rand + 0;

    return segments[rand]
  }


  const handlesavecoupon=async()=>{
    
    dispatch(coupon({id:user?.result?._id,coupon:prize}))
    setopenconfetti(false)

  }


  return (
    <>
    <div>
      <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment={randomNumber}
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
    />
      {openconfetti&& <Confetti  width={window.innerWidth} height={window.innerHeight}/>}
      <Modal
        open={openconfetti}
        onClose={handlesavecoupon}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      {
        user?.result?._id?
        <div className='ModalDiv'>
          <h1>Congratulations!</h1>
          
          <h3>You have won {prize}</h3>
        </div>

        :
        <div className='ModalDiv'>
          <h1>Congratulations!</h1>
          
          <h3>You have won {prize} please login in to grab this</h3>
        </div>

      }
       
      </Modal>

    </div>
    </>
  )
}

export default SpinWheel