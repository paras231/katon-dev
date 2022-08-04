import React from 'react'
import img from '../assets/1775.png'
import imag from '../assets/1776.png'
import Lan from '../assets/lan.svg'
import Phones from '../assets/Phone1.png'
import vir from '../assets/vr.svg'
import sf from '../assets/so.svg'
import rl from '../assets/rl.svg'
import pq from '../assets/pq.svg'
import pr from '../assets/pr.svg'
import mr from '../assets/mr.svg'
import eb from '../assets/eb.svg'


const Phone = () => {
  return (
   <>
   <div style={{marginTop:'25vh'}}>
   <div style={{backgroundImage:`url(${img})` , width:'100%' , height:'550px' , flex:'1' , background:'cover' , transform:'100px'}}>
   
   <img style={{width:'100%' , height:'550px' ,}} src={imag} />
   <p style={{marginTop:'-500px' , color:'white' , marginLeft:'130px' ,fontFamily:'Poppins' , letterSpacing:'10px'}}>TYPE TEXT HERE</p>
   <p style={{marginTop:'50px' , marginLeft:'130px' , color:'white' , fontFamily:'Poppins' , fontSize:'35px' , fontWeight:'bolder' }} >360 Degree Education Hub</p>
   
 

<div style={{display:'flex' , marginLeft:'100px' , fontWeight:'bolder' , fontFamily:'Poppins'}}>
 <div style={{marginLeft:'20px'}}>
   <div style={{display:'flex' , gap:'30px' }}>
   <img src={Lan}/>
   <p style={{color:'white'}}>Learning</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={vir}/>
   <p style={{color:'white'}}>Virtual Classroom</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={sf}/>
   <p style={{color:'white'}}>Social Forum</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={rl}/>
   <p style={{color:'white'}}>Remedial class</p>
   </div>
   </div>
   <div style={{marginLeft:'100px'}}>
   <div style={{display:'flex' , gap:'30px' }}>
   <img src={pq}/>
   <p style={{color:'white'}}>Past Question Paper</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={pr}/>
   <p style={{color:'white'}}>Practice Exam</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={mr}/>
   <p style={{color:'white'}}>Mobile app</p>
   </div>
   <div style={{display:'flex' , gap:'30px' , marginTop:'15px'}}>
   <img src={eb}/>
   <p style={{color:'white'}}>eBook</p>
   </div>
   
   </div>
   </div>
   </div>
   <div style={{marginLeft:'800px' , height:'450px' , width:'390px' ,marginTop:'-600px'}} >
   
   <img style={{height:'650px' , marginTop:'-10px' , marginLeft:'150px'}}   src={Phones} />
   <p style={{ marginTop:'-380px' , marginLeft:'250px' , fontSize:'45px' , color:'#00BEE3' ,  fontWeight:'600'}}>KATON</p>
   <p style={{ marginTop:'-45px' , marginLeft:'260px' , fontSize:'10px' , color:'#111D5E' , fontWeight:'bolder' }}>360-Degree Learning Hub</p>
   </div>
   </div>
  
   </>
  )
}

export default Phone