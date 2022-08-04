import React from 'react'
import ladki from "../assets/ladki.svg";
import { styled } from "@mui/system";
import arrow from "../assets/image 18.png";

const Styleimgs = styled("div" ) (({ theme })  => ({
    ' & img':{
     width:'100%'
    },
    marginTop:'10vh'
  }))
 

  const Stylediv = styled("div") (({ theme }) => ({

//     [theme.breakpoints.up("xl")]:{
//       ' & button':{
//      boxSizing: 'border-box',
 
//      position: 'absolute',
//      width: '183px',
//      height: '47px',
//      left: '355px',
//      top: '470px',
     
//      background: '#00BEE3',
//      border: '1px solid #000000',
//      borderRadius: '99px',
//      fontFamily: 'Poppins',
//    fontStyle: 'normal',
//    fontWeight: '400',
//    fontSize: '21px',
//    lineHeight: '36px',
//    display: 'auto',
//    alignItems: 'center',
//    textAlign: 'center',
//    color: '#FFFFFF',
//    cursor:'pointer'
     
//       },
//      },
       [theme.breakpoints.down("xl")]:{
         ' & button':{
           boxSizing: 'border-box',
       
           position: 'absolute',
           width: '150px',
           height: '47px',
           left: '770px',
           top: '1050px',
           
           background: '#00BEE3',
           border: 'none',
           borderRadius: '99px',
           fontFamily: 'Poppins',
         fontStyle: 'normal',
         fontWeight: '400',
         fontSize: '21px',
         lineHeight: '36px',
        //  display: 'auto',
        //  alignItems: 'center',
         textAlign: 'center',
         color: '#FFFFFF',
         cursor:'pointer'
       },
       "& button>p":{
        fontSize:'14px',
        marginTop:'-6px',
        marginLeft:'-10px'
       }
       },
       [theme.breakpoints.only("xl")]:{
         ' & button':{
           boxSizing: 'border-box',
       
           position: 'absolute',
           width: '183px',
           height: '47px',
           left: '860px',
           top: '1200px',
           
           background: '#00BEE3',
        //    border: '1px solid #000000',
           borderRadius: '99px',
           fontFamily: 'Poppins',
         fontStyle: 'normal',
         fontWeight: '400',
         fontSize: '21px',
         lineHeight: '36px',
         display: 'auto',
         alignItems: 'center',
         textAlign: 'center',
         color: '#FFFFFF',
         cursor:'pointer'
       },
       "& button>p":{
        fontSize:'16px',
        marginTop:'-6px'
       }
     },
   
      [theme.breakpoints.down("lg")]:{
        ' & button':{
            boxSizing: 'border-box',
        
            position: 'absolute',
            width: '183px',
            height: '47px',
            left: '570px',
            top: '850px',
            
            background: '#00BEE3',
            border: '1px solid #000000',
            borderRadius: '99px',
            fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '21px',
          lineHeight: '36px',
          display: 'auto',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          cursor:'pointer'
      }
    }
 }))

const StyledArrow = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xl")]:{
    position: 'absolute',
    marginLeft: "883px",
    marginTop: '-80px',
    // background: 'white',
    // opacity: '0.1',
    // borderRadius: '50%',
  },
  [theme.breakpoints.only("xl")]:{
    position: 'absolute',
    marginLeft: "999px",
    marginTop: '-112px',
  },
  
}))

const About2 = () => {
  return (
   <>
 <Styleimgs>
 <img src={ladki} />
 <Stylediv>
 <button> <p>Read more</p></button>
 {/* <StyledArrow>
  <img
  src={arrow}
  style={{
    width: "13px",
    height: "12px",
 fontSize: "bold",
  }}
  />
 </StyledArrow> */}

 </Stylediv>
 </Styleimgs>
   </>
  )
}

export default About2