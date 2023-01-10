import React from 'react'
import './Onboarding.css'
function Onboarding() {
  return (
    <div className='home'>
      <div className='header'>
       <img style={{marginLeft:"250px",height:"37px",width:"120px"}} src="https://abgo.in/bloom/image/logo.png" alt="" />
       <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginRight:"250px"}}>
       <div>
        <button style={{border:'0px',backgroundColor:"transparent",color:"white",margin:"10px",fontSize:"12px"}}>Sign In </button>
       </div>
       <div>
        <button  style={{backgroundColor:"transparent",border:'0px', color:"white",margin:"10px",fontSize:"12px"}}>Sign Up</button>
       </div>
       <div>
        <img style={{color:"white",margin:"10px",width:"26px",height:"27px"}} src="https://abgo.in/bloom/image/cart.png" alt="" />
       </div>
       </div>

      </div>
      <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center",height:"70%"}}>
        <div><h1 style={{color:"white",textTransform:"uppercase",fontSize:"50px",fontFamily:"sans-serif",letterSpacing:"4.5px",fontWeight:"600"}}>Book Your Services Online</h1></div>
        <div>HELOO</div>
        <div>RANFA</div>
        <div><h1 style={{color:"white",fontSize:"20px",fontWeight:"normal" ,margin:"0px",textAlign:'center'}}>Dummy Text of The Printing And Typesetting Industry.Lorem Ipsum has been the industry's <br/>  standard dummy text ever since the 1500s,</h1></div>
      </div>
    </div>
  ) 
}

export default Onboarding