import React from 'react';
import aaa from '../assets/image23.png'
import jon from '../assets/jon.png'
import jons from '../assets/22.png'
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineLeft} from "react-icons/ai";
import { styled } from "@mui/system";
import {Typography} from "@mui/material"
const Stylebutton = styled("div") (({ theme }) => ({
  display:'flex',
  marginLeft:'1100px',
 ' & button':{
   backgroundColor:'white',
   border:'none',
   
   cursor:'pointer',
  
   marginTop:'30px',
  opacity:'1',
  boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25)',
  marginLeft: "1vw",
 }
}))

const Teams = () => {
  return (
   <>
 
   <div
   style={{
    backgroundColor:"#EBEBEB",
    height:'100vh',
   paddingTop:'20px'
   }}
   >
   <center
        style={{
        
        }}
      >
      
        <Typography
          sx={{
            color: "#00BEE3",
            fontSize: "20px",
            margin: "10PX",
          }}
        >
          O U R T E A M
        </Typography>
      </center>
      <center
      style={{
        marginTop: "1vh",
      }}
    >
      <p
        style={{
          color: "#332E57",
          fontSize: "55px",
          fontWeight: "bold",
        }}
      >
        Meet Our Expert Team
      </p>
    </center>
  
     <center><div style={{gridTemplateColumns:'auto auto auto' , gap:'40px' , display:'inline-grid' , flexWrap:'wrap' , marginTop:'5vh'}} >
    <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
     <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
    <img src={jon} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
    </div>
    <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Jonathan Roberts</p>
    <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
    
    </div>
    <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
    <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
   <img src={jons} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
   </div>
   <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Adam Green</p>
   <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
   
   </div>
   <div style={{boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , height:'340px' , width:'300px' , borderRadius:'20px' , padding:'20px'}}>
   <div style={{backgroundColor:'lightgray' , borderRadius:'20px' , height:'280px ' , width:'300px'  , marginLeft:'-2px'}}>
  <img src={aaa} style={{height:'250px' ,marginTop:'29px' , marginLeft:'2px'}} />
  </div>
  <p style={{fontSize:'20px' , color:'#111d5e' , fontFamily:'Poppins' ,marginLeft:'-15px'}} >Adam Green</p>
  <p style={{color:'#00bee3' , fontFamily:'Poppins' , marginLeft:'-20px' , fontStyle:'italic' , marginTop:'-20px' , fontWeight:'bolder' , fontSize:'14px'}}>Founder/Teacher</p>
  
  </div>
  </div>
  </center>

  <Stylebutton>
 <button><AiOutlineLeft/></button>
 <button><AiOutlineRight/></button>
 </Stylebutton>
 </div>
   </>
 
   )
   
}

export default Teams
