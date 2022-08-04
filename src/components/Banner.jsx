import React from 'react'
import  banner from "../assets/banner.svg";
import {styled} from "@mui/system";
import {Fade} from "react-awesome-reveal";

const Stylediv = styled("div") (({ theme }) => ({

  [theme.breakpoints.up("xl")]:{
    ' & button':{
   boxSizing: 'border-box',

   position: 'absolute',
   width: '183px',
   height: '47px',
   left: '255px',
   top: '370px',
   
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
   
    },
   },
     [theme.breakpoints.down("xl")]:{
       ' & button':{
         boxSizing: 'border-box',
     
         position: 'absolute',
         width: '175px',
         height: '47px',
         left: '210px',
         top: '436px',
         
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
     },
     "& button>p":{
      fontSize:'16px',
      marginTop:'-4px'
     }
     },
     [theme.breakpoints.only("xl")]:{
       ' & button':{
         boxSizing: 'border-box',
     
         position: 'absolute',
         width: '155px',
         height: '47px',
         left: '255px',
         top: '490px',
         
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
     },
     "& button>p":{
      fontSize:'16px',
      marginTop:'-8.5px'
     }
   },
 
   [theme.breakpoints.down("lg")]:{
    ' & button':{
      boxSizing: 'border-box',
  
      position: 'absolute',
      width: '155px',
      height: '47px',
      left: '160px',
      top: '330px',
      
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
  },
  "& button>p":{
   fontSize:'16px',
   marginTop:'-8.5px'
  }
},


}))

const Styleimgs = styled("div") (({ theme })  => ({
 [theme.breakpoints.down("xl")]:{
  marginTop:'17vh'
 },
  [theme.breakpoints.only("xl")]:{
    marginTop:'15vh'
  }
}))

const Banner = () => {
  return (
 <>
 <Fade >
 <Styleimgs>

<img style={{width:'100%',}} src={banner} />
       <Stylediv>
       <button><p>Read more</p></button>
       </Stylediv>
</Styleimgs>
</Fade>   
 </>
  )
}

export default Banner