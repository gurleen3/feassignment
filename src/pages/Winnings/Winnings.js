import React,{useState,useEffect} from 'react'
import './Winnings.css'
import { getallcoupon } from '../../action/action';
import { useDispatch,useSelector } from 'react-redux';


const Winnings = () => {
  const user = JSON.parse(window.localStorage.getItem("userprofile"));
  let dispatch=useDispatch()
  const data=useSelector((state)=>state?.authreducer?.coupon?.result?.coupon)
  useEffect(() => {
    if(user){
      dispatch(getallcoupon({id:user?.result?._id}))
    }
  }, [])
  

  return (
    <div className='couponDiv'>
      {data?.length?data?.map((val,ind)=>{
        return <div className='coupon'>{val}</div>
      }):<p>Play a game to see your winning</p>}

    </div>
  )
}

export default Winnings