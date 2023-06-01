import React,{useState}from 'react'
import Grid from '@mui/material/Grid';
import cardplay from '../../assets/cardplay.jpg'
import './Cardpick.css'
import Confetti from 'react-confetti'
import {Modal} from '@mui/material'
import { coupon } from '../../action/action';
import { useDispatch } from 'react-redux';


const CardPick = () => {
  const [activeCard, setActiveCard] = useState(false)
  const [ind,setind]=useState()
  const [prize,setprize]=useState('')
  const [openconfetti,setopenconfetti]=useState(false)
  let dispatch=useDispatch()
  const user = JSON.parse(window.localStorage.getItem("userprofile"));
  const handleFlip = (id) => {
    setActiveCard(!activeCard)
    setind(id)
    let p=randomNumber()
    if(p!=='better luck next time'){
      setprize(p)
      setopenconfetti(true)
    }
  }
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
 
  
  const randomNumber=()=>{
    let difference = segments.length - 0;

    let rand = Math.random();

    
    rand = Math.floor( rand * difference);

    rand = rand + 0;

    return segments[rand]
  }

  const handlesavecoupon=async()=>{
    
    dispatch(coupon({id:user?.result?._id,coupon:prize}))
    setActiveCard(false);setopenconfetti(false)

  }


  return (
    <div className='cardDiv'>
    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <div
           onClick={()=>{handleFlip(1)}}
         
        className={`relative card ${activeCard && ind===1   ? 'cardFlip':''}`}
        >         
        
         <div className='front'>
          <img  id={1} className='cardImg' src={cardplay} width={100} height={150}/>
          </div>
          <div className="absolute top-0 back">
              {prize}
            </div>


          </div>

          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <div
           onClick={()=>{handleFlip(2)}}
         
        className={`relative card ${activeCard && ind===2   ? 'cardFlip':''}`}
        >         
        
         <div className='front'>
          <img  id={2} className='cardImg' src={cardplay} width={100} height={150}/>
          </div>
          <div className="absolute top-0 back">
              {prize}
            </div>


          </div>

          </Grid>
          <Grid item xs={2} sm={4} md={4} >
          <div
           onClick={()=>{handleFlip(3)}}
         
        className={`relative card ${activeCard&& ind===3   ? 'cardFlip':''}`}
        >         
        
         <div className='front'>
          <img  id={3} className='cardImg' src={cardplay} width={100} height={150}/>
          </div>
          <div className="absolute top-0 back other">
             {prize}
            </div>


          </div>

          </Grid>
      </Grid>
      {openconfetti&& <Confetti  width={window.innerWidth} height={window.innerHeight}/>}
      <Modal
        open={openconfetti}
        onClose={handlesavecoupon}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {user?.result?._id?
        <div className='ModalDiv'>
          <h1>Congratulations!</h1>
          
          <h3>You have won {prize}</h3>
        </div>

        :
        <div className='ModalDiv'>
          <h1>Congratulations!</h1>
          
          <h3>You have won {prize} please login in to grab this</h3>
        </div>}
      </Modal>
    </div>
  )
}

export default CardPick