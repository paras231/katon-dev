import React from "react";
import Phone from "./Phone";
import ButtonC from "./ButtonC";
import Joinus from "./Joinus";
import {FaUser} from "react-icons/fa";
import {AiFillTag} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineLeft} from "react-icons/ai";
import { JackInTheBox,Fade ,Slide} from "react-awesome-reveal";
import Events2 from "./Events2";
import phone2 from "../assets/phone2.svg";
// import Testimonials from "./Testimonials";
import Testimonials2 from "./Testimonials2";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import join from "../assets/join.svg";
import {
  Typography,
  Button,
  CardContent,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/system";
import Team from "./Team.jsx";
import Man from "../assets/image 21.png";
import userIcon from "../assets/Icon awesome-user-alt.png";
import tagIcon from "../assets/Icon awesome-tag.png";
import Reactangle from "../assets/Rectangle 1696.png";
import Hand from "../assets/Icon awesome-hand-point-up (3).png";
import girl from "../assets/girl.png";
import book from "../assets/book.png";
import arrow from "../assets/arroicon.png";
import arrowblue from "../assets/arrowblue.png";
import jonathon from "../assets/jonathon.png";
import adam from "../assets/adam.png"; 
import smiling from "../assets/blackboysmiling.png";
import Line from "../assets/Path 3067 (1).png";

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const TeamContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.only("xl")]: {
    "& img": {
      width: "22vw",
      height: "42vh",
    },
  },

  [theme.breakpoints.down("xl")]: {
    "& img": {
      width: "20vw",
      height: "50vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& img": {
      width: "25vw",
      height: "50vh",
    },
  },
}));

const StyledCard1 = styled(Card)(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "16px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
  },

  [theme.breakpoints.down("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "16px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
  },
  [theme.breakpoints.down("lg")]:{
    maxWidth: 300,
    borderRadius: "16px",
    border: "16px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
  }
}));

const StyledCard2 = styled(Card)(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "13px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "3vw",
  },

  [theme.breakpoints.down("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "13px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "3vw",
  },
  [theme.breakpoints.down("lg")]:{
    maxWidth: 300,
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "1vw",
  }
}));

const StyledCard3 = styled(Card)(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "13px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "3vw",
  },

  [theme.breakpoints.down("xl")]:{
    maxWidth: 345,
    borderRadius: "16px",
    border: "13px solid white",
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "3vw",
  },
  [theme.breakpoints.down("lg")]:{
    maxWidth: 300,
    boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
    marginLeft: "1vw",
  }
}));


const Stylebutton = styled("div") (({ theme }) => ({
  display:'flex',
  marginLeft:'1100px',
 ' & button':{
   backgroundColor:'white',
   border:'none',
   
   cursor:'pointer',
  
   marginTop:'40px',
  opacity:'1',
  boxShadow:'10px 10px 34px rgba(0, 0, 0, 0.25)',
  marginLeft: "1vw",
 }
}))

const CardCOmponent = () => {
  // console.log("CardCOmponent");
  return (
    <>
   
    <Phone/>
    <div
    style={{
      marginTop:'35vh',
      height:'120vh'
    }}
    >
      <center
        style={{
          marginTop: "10vh",
        }}
      >
        <Typography
          sx={{
            color: "#00BEE3",
            fontSize: "20px",
          }}
        >
          B L O G S
        </Typography>
      </center>

      <center
        style={{
          marginTop: "10vh",
        }}
      >
        <p
          style={{
            color: "#332E57",
            fontSize: "55px",
            fontWeight: "bold",
          }}
        >
          Our Latest Blogs
        </p>
      </center>
      <CardContainer>
     <JackInTheBox>
        <StyledCard1
        
        >
          <CardMedia
            component="img"
            height="180"
            image={Man}
            alt="green iguana"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
               <FaUser
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                >
                  By Admin
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "18px",
                }}
              >
               <AiFillTag
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "8px",
                  }}
                >
                  Virtual Class
                </p>
              </div>
            </div>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet, etetur ditr, sed diam nonumy
            </p>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </CardContent>
          <CardActions>
            <div
              style={{
                marginLeft: "70px",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "30px",
                  cursor: "pointer",
                  marginTop:'10px',
            
                  position:'absolute',
                borderRadius:'14px',
                  backgroundColor:'#F4F6F9',
                }}
                src={arrow}
              />
            </div>
            {/* <img
              style={{
                marginLeft: "200px",
                cursor: "pointer",
              }}
              src={Hand}
            /> */}
          </CardActions>
        </StyledCard1>
        </JackInTheBox>
        <Fade>
        <StyledCard2
         
        >
          <CardMedia
            component="img"
            height="180"
            image={girl}
            alt="green iguana"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                  <FaUser
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                >
                  By Admin
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "18px",
                }}
              >
               <AiFillTag
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "8px",
                  }}
                >
                  Virtual Class
                </p>
              </div>
            </div>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet, etetur ditr, sed diam nonumy
            </p>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </CardContent>
          <CardActions>
            <div
              style={{
                marginLeft: "70px",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "30px",
                  cursor: "pointer",
                  marginTop:'7px',
            
                  position:'absolute',
                borderRadius:'14px',
                }}
                src={arrowblue}
              />
            </div>
            {/* <img
              style={{
                marginLeft: "200px",
              }}
              src={Hand}
            /> */}
          </CardActions>
        </StyledCard2>
        </Fade>
        <Slide
        direction="up"
        >
        <StyledCard3
          sx={{
            maxWidth: 345,
            boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
            marginLeft: "40px",
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={book}
            alt="green iguana"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                  <FaUser
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                >
                  By Admin
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "18px",
                }}
              >
                   <AiFillTag
               style={{
                color:'#00BEE3',
                width:'16px',
                height:'16px',
                marginTop:'18px'
               }}
               />
                <p
                  style={{
                    color: "#212121",
                    fontSize: "15px",
                    marginLeft: "8px",
                  }}
                >
                  Virtual Class
                </p>
              </div>
            </div>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet, etetur ditr, sed diam nonumy
            </p>
            <p
              style={{
                color: " #212121",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </CardContent>
          <CardActions>
            <div
              style={{
                marginLeft: "70px",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "30px",
                  cursor: "pointer",
                  marginTop:'5px',
            
                  position:'absolute',
                borderRadius:'14px',
                }}
                src={arrowblue}
              />
            </div>
            {/* <img
              style={{
                marginLeft: "200px",
                cursor: "pointer",
              }}
              src={Hand}
            /> */}
          </CardActions>
        </StyledCard3>
        </Slide>
      </CardContainer>
      <Stylebutton>
      <button><AiOutlineLeft/></button>
      <button><AiOutlineRight/></button>
      </Stylebutton>
      </div>
     

      {/* our team */}
      
    
        <Team/>
      {/* <TeamContainer>
        <div>
          <img
            style={{
              border:'14px solid white',
              boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              borderRadius:'14px',
            }}
            src={jonathon}
          />
        </div>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <img
            style={{
              border:'14px solid white',
              boxShadow: "10px 10px 34px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              borderRadius:'14px',
            }}
            src={adam}
          />
        </div>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <img
            style={{
              border:'14px solid white',
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              borderRadius:'14px',
            }}
            src={smiling}
          />
        </div>
      </TeamContainer> */}
     
      {/* events */}
      <Events2 />

      <Joinus/>
     
      {/* <Joinus/> */}
      {/* testimonials */}
      <Testimonials2 />

     

{/* footer */}
<Footer2/>
    </>
  );
};

export default CardCOmponent;
