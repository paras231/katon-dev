import React from "react";
import Sliders from "./components/Sliders";
import Header from "./components/Header";
import {BsArrowRightCircle} from "react-icons/bs"
import {Slide,Roll} from "react-awesome-reveal";
import header from "./assets/header.png";
import Skills from "./components/Skills";
import About2 from "./components/About2";
import AboutNew from "./components/AboutNew";
import phone2 from "./assets/phone2.svg";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { height, styled } from "@mui/system";
import Banner from "./components/Banner";
import "./App.css";
// import all icons
import icons from "./assets/icons.png";
import phone from "./assets/Icon ionic-ios-call (1).png";
import email from "./assets/Icon material-email.png";
import pin from "./assets/icon ionic-ios-pin.png";
import facebook from "./assets/Icon awesome-facebook-f (1).png";
import reactangle1 from "./assets/Rectangle 1532.png";
import flag from "./assets/mission (2) (1).png";
import ellipse from "./assets/Ellipse 198.png";
import arrow from "./assets/Vector.png";
import hand from "./assets/Icon awesome-hand-point-up (3).png";
import eye from "./assets/Icon awesome-eye (1).png";
import CardCOmponent from "./components/CardCOmponent";
//
const StyledAppbar = styled(AppBar)(({ theme }) => ({
 
}));

const LeftNav = styled("div")(({ theme }) => ({
[theme.breakpoints.down("xl")]: {
  display: "flex",
  marginLeft: "90px",
  "& ul>li": {
    cursor: "pointer",
    marginLeft: "15px",
  },
  "& ul": {
    display: "flex",
  },
},
[theme.breakpoints.only("xl")]:{
  "& div":{
  marginLeft:'9px'
  },
  marginTop:'9px',
  display: "flex",
  marginLeft: "90px",
  "& ul>li": {
    cursor: "pointer",
    marginLeft: "15px",
  },
  "& ul": {
    display: "flex",
  },
}
}));

const RightNav = styled("div")(({ theme }) => ({
 [theme.breakpoints.down("xl")]:{
  display: "flex",
  "& img": {
     width: "10vw",
     cusror: "pointer",
     marginLeft: "20vw",
     marginTop:'4px'
  }
 },

 [theme.breakpoints.only("xl")]:{
  marginTop:'9px',
  display: "flex",
  "& img": {
     width: "10vw",
     cusror: "pointer",
     marginLeft: "20vw",
     marginTop:'4px'
  }
 }

}));

const Navbar = styled(AppBar)(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    marginTop:'5.2vh',
    backgroundColor: "#111D5E",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("xl")]: {
    marginTop: "5vh",
  },
 [theme.breakpoints.down("lg")]:{
  height: "1vh",
 }
  },

 [theme.breakpoints.down("xl")]:{
  backgroundColor: "#111D5E",
  height: "12vh",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("xl")]: {
    marginTop: "6vh",
  },
  [theme.breakpoints.up("lg")]: {
    height: "12vh",
  },
 },
 
}));

const LinkContent = styled("div")(({ theme }) => ({
 

  "& ul": {
    display: "flex",
  },

  [theme.breakpoints.up("xl")]: {
    marginTop: "10px",
    marginLeft: "80px",
    "& ul>li": {
      listStyle: "none",
      marginLeft: "30px",
      cursor: "pointer",
   
      fonFamily: "Poppins",
      fontWeight:'400'
    },
  },

  [theme.breakpoints.only("xl")]: {
    marginTop: "10px",
    // marginLeft: "280px",
    paddingLeft:'200px  ',
    "& ul>li": {
      listStyle: "none",
      marginLeft: "30px",
      cursor: "pointer",
   
      fonFamily: "Poppins",
      fontWeight:'400'
    },
  },

  [theme.breakpoints.down("xl")]: {
    marginTop: "10px",
    marginLeft: "200px",
    "& ul>li": {
      listStyle: "none",
      marginLeft: "16px",
      cursor: "pointer",
     fontSize: "16px",
      fonFamily: "Poppins",
      fontWeight:'300'
    },
  },

  [theme.breakpoints.up("lg")]: {
    marginTop: "10px",
    marginLeft: "180px",
    "& ul>li": {
      listStyle: "none",
      marginLeft: "13px",
      cursor: "pointer",
   
      fonFamily: "Poppins",
      fontWeight:'400'
    },
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: "10px",
    marginLeft: "90px",
    "& ul>li": {
      listStyle: "none",
      marginRight: "-8px",
      cursor: "pointer",
   
      fonFamily: "Poppins",
      fontWeight:'400'
    },
  },
}));

const StyledKaton = styled(Typography)(({ theme }) => (
  
  {

    [theme.breakpoints.only("xl")]: {
      color: "#FAF0F0",
      fontSize: "50px",
      fontWeight: "bold",
      marginLeft: "60px",
      fontFamily: "mitr",
    },

  [theme.breakpoints.down("xl")]: {
    color: "#FAF0F0",
    fontSize: "50px",
    fontWeight: "bold",
    marginLeft: "60px",
    fontFamily: "mitr",
  },

  [theme.breakpoints.down("lg")]: {
    color: "#FAF0F0",
    fontSize: "50px",
    fontWeight: "bold",
    marginLeft: "20px",
    fontFamily: "mitr",
  },
}));

const StyledCard = styled("div")(({ theme }) => ({
  marginTop: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CardTextContainer = styled("div")(({ theme }) => ({
  display: "grid",
  marginLeft: "20px",
}));

const  HandIcon = styled("img")(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "18px",
    marginLeft: "300px",
    cursor: "pointer",
  },

  [theme.breakpoints.down("xl")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "18px",
    marginLeft: "340px",
    cursor: "pointer",
  },
  [theme.breakpoints.down("lg")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "18px",
    marginLeft: "100px",
    cursor: "pointer",
  }
}))

const HandIcon2 = styled("img")(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "19px",
    marginLeft: "300px",
    cursor: "pointer",
  },

  [theme.breakpoints.down("xl")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "22px",
    marginLeft: "290px",
    cursor: "pointer",
  },
  [theme.breakpoints.down("lg")]:{
    width: "17.03px",
    height: "23.03px",
    marginTop: "18px",
    marginLeft: "80px",
    cursor: "pointer",
  }
}))


const StyledCardDiv = styled("div")(({ theme }) => ({


  [theme.breakpoints.only("xl")]:{
    display: "flex",
    backgroundColor: "#EAEAEA",
    width: "35vw",
    height: "32vh",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
  },

  [theme.breakpoints.down("xl")]:{
    display: "flex",
    backgroundColor: "#F1F4F9",
    width: "40vw",
    height: "40vh",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
  },
 [theme.breakpoints.up("lg")]:{
  display: "flex",
  backgroundColor: "#F1F4F9",
  width: "40vw",
  height: "30vh",
  boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
  borderBottomLeftRadius: "40px",
  borderTopRightRadius: "40px",
 },
 [theme.breakpoints.down("lg")]:{
  display: "flex",
  backgroundColor: "#F1F4F9",
  width: "54vw",
  height: "40vh",
  boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
  borderBottomLeftRadius: "40px",
  borderTopRightRadius: "40px",
 }
}))

const StyledCardDiv2 = styled("div")(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    marginTop: "2px",
    display: "flex",
    backgroundColor: "#FFFFFF",
    width: "35vw",
    height: "32vh",

    marginLeft: "5vw",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
     borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
  },

  [theme.breakpoints.down("xl")]:{
    marginTop: "2px",
    display: "flex",
    backgroundColor: "#FFFFFF",
    width: "40vw",
    height: "40vh",

    marginLeft: "5vw",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
  },

  [theme.breakpoints.up("lg")]:{
    display: "flex",
    backgroundColor: "#F1F4F9",
    width: "40vw",
    height: "30vh",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
   },
   [theme.breakpoints.down("lg")]:{
    display: "flex",
    backgroundColor: "#F1F4F9",
    width: "65vw",
    height: "40vh",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "40px",
    borderTopRightRadius: "40px",
   }
}))

const ReadMoreDiv1 = styled("div")(({ theme }) => ({
  display: "flex",
  // marginBottom:'20px',
  [theme.breakpoints.only("xl")]: {
    display: "flex",
    marginTop:'-30px'
  },
  [theme.breakpoints.down("xl")]: {
    display: "flex",
   marginTop:'-30px'
  }
}))

const ReadMoreDiv2 = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom:'24px',
  [theme.breakpoints.only("xl")]: {
    display: "flex",
    marginTop:'-16px'
  },
  [theme.breakpoints.down("xl")]: {
    display: "flex",
   marginTop:'-30px'
  }
}))

const App = () => {
  return (
    <>
    
   <Header/>
  
      {/* <StyledAppbar>
        <div
          style={{
            display: "flex",
          }}
        >
          <LeftNav>
            <div>
              <ul>
                <img
                  style={{
                    width: "22.53px",
                    height: "20px",
                  }}
                  src={phone}
                />
                <li
                  style={{
                    color: "#FFFFFF",
                    listStyle: "none",
                  }}
                >
                  Tel: +65 6694 0020
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <img
                  style={{
                    width: "22.53px",
                    height: "20px",
                  }}
                  src={email}
                />
                <li
                  style={{
                    color: "#FFFFFF",
                    listStyle: "none",
                  }}
                >
                  youremail@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <img
                  style={{
                    width: "21.53px",
                    height: "24px",
                  }}
                  src={pin}
                />
                <li
                  style={{
                    color: "#FFFFFF",
                    listStyle: "none",
                  }}
                >
                  youremail@gmail.com
                </li>
              </ul>
            </div>
          </LeftNav>
          <RightNav>
            <div><img src={icons}/></div>
          </RightNav>
        </div>
      </StyledAppbar> */}
      {/* navbar  */}
      <Navbar>
        <div
          style={{
            display: "flex",
          }}
        >
          <StyledKaton style={{}}>KATON</StyledKaton>
          <LinkContent>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Education Forum</li>
              <li>Training Program</li>
              <li>What Is KATON</li>
              <li>Join Us</li>
              <li>Support</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </LinkContent>
        </div>
      </Navbar>
      {/* skills kid */}
   
      {/* <Banner/> */}
     <Sliders/>
   
    <AboutNew/>
   
      {/* <Skills/> */}
      {/* girl standing immage with text */}
      {/* two cards  */}
      <StyledCard>
        <Roll>
        <StyledCardDiv
        style={{backgroundColor:'#e9edec'}}
        >
        <div
        style={{
          backgroundColor:'lightgray',
          height:'45px',
          width: '90px',
          marginTop:'23px',
          borderRadius:'50%',
          marginLeft:'19px'
        }}
        >
        <img
        style={{
          marginTop: "13px",
          width: "26px",
          height: "25px",
          backgroundColor:'',
          marginLeft:'10px',
         
        }}
        src={flag}
      />
        </div>
        
          <CardTextContainer>
            <Typography
              sx={{
                color: "#111D5E",
                fontSize: "30px",
                fontWeight: "700",
                marginTop:'20px'
              }}
            >
              Our Mission
            </Typography>
            <p
              style={{
                color: "#565656",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et vdolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <ReadMoreDiv1
             
            >
              <p
                style={{
                  color: "#00BEE3",
                  fontSize: "13px",
                  fontWeight: 'bold',
                  cursor: "pointer",
                }}
              >
                Read 
              </p>
              <p
              style={{
                color: "#00BEE3",
                fontSize: "13px",
                fontWeight: 'bold',
                cursor: "pointer",
                marginLeft:'3px'
              }}
              >More</p>
             <BsArrowRightCircle
             style={{
                color: "#00BEE3",
                height:'13px',
                width:'13px',
                marginLeft:'10px',
                marginTop:'19px'
             }}
             />
              {/* <HandIcon
               
                src={hand}
              /> */}
            </ReadMoreDiv1>
          </CardTextContainer>
        </StyledCardDiv>
        </Roll>
        <StyledCardDiv2
          
        >
        <div
        style={{
          backgroundColor:'lightgray',
          height:'38px',
          width: '80px',
          marginTop:'23px',
          borderRadius:'50%',
          marginLeft:'19px'
        }}
        >
        <img
        style={{
          marginTop: "13px",
          width: "25px",
          height: "15px",
          backgroundColor:'',
          marginLeft:'7px',
         
        }}
        src={eye}
      />
        </div>
          <CardTextContainer>
            <Typography
              sx={{
                color: "#111D5E",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop:'20px'
              }}
            >
              Our Vision
            </Typography>
            <p
              style={{
                color: "#565656",
                fontSize: "15px",
                fontWeight: "500",
                marginRight:'3px',
                marginTop: '24px'
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et vdolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <ReadMoreDiv2
             
            >
              <p
                style={{
                  color: "#00BEE3",
                  fontSize: "13px",
                  fontWeight: 'bold',
                  cursor: "pointer",
                }}
              >
                Read 
              </p>
              <p
              style={{
                color: "#00BEE3",
                fontSize: "13px",
                fontWeight: 'bold',
                cursor: "pointer",
                marginLeft:'3px'
              }}
              >More</p>
               <BsArrowRightCircle
             style={{
                color: "#00BEE3",
                height:'13px',
                width:'13px',
                marginLeft:'10px',
                marginTop:'18px'
             }}
             />
              {/* <HandIcon2
               
                src={hand}
              /> */}
            </ReadMoreDiv2>
          </CardTextContainer>
        </StyledCardDiv2>
      </StyledCard>
      {/* card component */}
      <CardCOmponent />

   
    </>
  );
};

export default App;
