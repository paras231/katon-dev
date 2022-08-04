import React from 'react'
import styled from "styled-components";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import whitebg from "../assets/whitebg.png";
import {AppBar} from "@mui/material";


const MainDiv = styled.div`
   /* position:sticky; */
    display: flex;
    background-color: #00BEE3;
    height:10vh;
`

const LeftDiv = styled.div`
    display: flex;
    margin-left: 160px;
    margin-top:-7px;
`

const RightDiv = styled.div`

display: flex;
padding-left:280px;
margin-bottom:4px;
@media(min-width:1024px) and (max-width:1279px){
  margin-left:50px;
}
`

const IconText = styled.div`
  display: flex;
  margin-left: 20px;
`
const StyledText = styled.p`

color:#FFFFFF;
font-size:14px;
font-weight:600;
font-family: 'Poppins';
margin-left:10px;
`

const BlueText = styled.p`
color:#00BEE3;
font-size:14px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

const WhiteBg = styled.img`
  width:27px;
  height:22px;
  margin-top:10px;
  margin-left:20px;
  cursor:pointer;
`
const Header = () => {
  return (

   <>
   <AppBar>
   <MainDiv>
    <LeftDiv>
       
    <IconText>
    <LocalPhoneIcon sx={{color:'white',marginTop:'15px',width:'20.5px',height:'20.5px'}} />
  <StyledText>Tel: +65 6694 0020</StyledText>
    </IconText>
    <IconText>
    <EmailIcon sx={{color:'white',marginTop:'15px',width:'20.5px',height:'20.5px'}} />
  <StyledText>youremail@gmail.com</StyledText>
    </IconText>
      <IconText>
    <PlaceIcon sx={{color:'white',marginTop:'15px',width:'20.5px',height:'20.5px'}} />
  <StyledText>38 Irrawaddy Rd, Campala, Africa 329563</StyledText>
    </IconText>
    </LeftDiv>
    <RightDiv>
        <WhiteBg src={whitebg} />
    <FaFacebookF  style={{color:'#00BEE3',marginLeft:'-18px',width:'7px',height:'12px',marginTop:'17px'}} />
    <WhiteBg src={whitebg} />
    <FaLinkedinIn  style={{color:'#00BEE3',marginLeft:'-18px',width:'12px',height:'15px',marginTop:'17px'}} />
    <WhiteBg src={whitebg} />
    <FaTwitter  style={{color:'#00BEE3',marginLeft:'-18px',width:'12px',height:'15px',marginTop:'17px'}} />
    </RightDiv>
   </MainDiv>
   </AppBar>
   </>
  )
}

export default Header