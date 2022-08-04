
import React from "react"
import girl from "../assets/ladki2.png";
import styled from 'styled-components'

const Stylediv = styled.div`
margin-top:10vh;
`
const Styleimg1 = styled.img`
width:100%;

`
const Para1 = styled.p`
margin-left:800px;
color:#121212 ;
 font-family:Poppins;
  letter-spacing:5px;
    margin-top:-500px;/

    // @media (min-width: 1024px) {
    //   margin-left:600px;
    //   color:#121212 ;
    //    font-family:Poppins;
    //     letter-spacing:5px;
    //       margin-top:-300px;
    // }
`
const Para2 = styled.p`
margin-left:800px; 
color:#111D5E;
  font-family: Poppins;
   font-size: 40px;
    font-weight:bolder;
     margin-right:300px;
       line-height:50px;
      //  @media (min-width: 1024px) {
      //   margin-left:600px; 
      //   color:#111D5E;
      //     font-family: Poppins;
      //      font-size: 30px;
      //       font-weight:bolder;
      //        margin-right:100px;
      //          line-height:30px;
      //          margin-top:-10px;

      //  }
`
const Para3 = styled.p`
font-size:15px;
      margin-left:800px;

        color:#565656;
          font-weight:500;
        font-family:Poppins;
         margin-right:180px;
        //  @media (min-width: 1024px) {
        //   font-size:12px;
        //   margin-left:600px;
        //  line-height:15px;
        //     color:#565656;
        //       font-weight:500;
        //     font-family:Poppins;
        //      margin-right:10px;
        //      margin-top:-10px;
        //  }
`
const Para4 = styled.p`
color:black;
margin-Left:800px;
  font-weight:bolder;

    font-size:15px;
     font-family:Poppins;

    //  @media (min-width: 1024px) {

    //   color:black;
    //   margin-Left:600px;
    //     font-weight:bolder;
      
    //       font-size:15px;
    //        font-family:Poppins;
    //  }
`
const Stylebut = styled.button`
background-color:#00bee3;
font-size:12px;
  height:40px; 
  width:100px ;
   margin-left:800px;
     border-radius:20px;
      color:white;
        border:none;
          margin-top:10px

          // @media (min-width: 1024px) {
          //   background-color:#00bee3;
          //   font-size:12px;
          //     height:40px; 
          //     width:100px ;
          //      margin-left:600px;
          //        border-radius:20px;
          //         color:white;
          //           border:none;
          //             margin-top:-10px

          // }
`
const AboutNew = ()=>{

return (
    <>
      <Stylediv >
   <Styleimg1 src={girl} />
   
   <Para1 >ABOUT US</Para1>
   <Para2 >Welcome to Katon Learning</Para2>
   <Para3 >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmon tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Para3>
   <Para4 >We Have 15 Years of Working Experience</Para4>
   <Stylebut >Read More</Stylebut>
   
   </Stylediv>
    </>
)

}

export default AboutNew