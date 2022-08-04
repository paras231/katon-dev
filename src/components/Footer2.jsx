import React from 'react'
import footer from "../assets/footer.svg";
import icons from "../assets/socialicons.png";
import quicklinks from "../assets/quicklinks.png";
import styled from "styled-components";
import pin from "../assets/footericon1.png";
import phone from "../assets/footericon2.png";
import mail from "../assets/mainl.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import whitebg from "../assets/whitebg.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box';
const Links = styled.div`
    
   @media screen and (min-width: 1024px) {
   margin-top: 20vh;
   }
   @media screen and (max-width: 1280px) {
     margin-top: 20vh;
   }
   @media screen and (min-width: 1366px) {
        margin-top: 20vh;
   }
    @media screen and (min-width: 1536px) {
        margin-top: 20vh;
    }
`

const KatonDiv = styled.div`
      display: grid;
      @media screen and (min-width: 1024px) {
   margin-top: -2vh;
   }
   @media screen and (max-width: 1280px) {
     margin-top: 10vh;
   }
   @media screen and (min-width: 1366px) {
        margin-top: 7vh;
   }
    @media screen and (min-width: 1536px) {
        margin-top: 10vh;
    }
`

const IconDiv = styled.div`

display: flex;
margin-left:0px;
@media(min-width:1024px) and (max-width:1279px){
  margin-left:50px;
}

`
const WhiteBg = styled.img`
  width:27px;
  height:25px;
  margin-top:10px;
  margin-left:20px;
  cursor:pointer;
`
const Footer2 = () => {

  const commonStyles = {
    bgcolor: 'transparent',
  
    borderColor: '#00BEE3',
    color:"#00BEE3",
    width: '50px',
    height: '2px',
    marginTop:'-10px'
  };
  const commonStyles2 = {
    bgcolor: 'transparent',
  
    borderColor: '#00BEE3',
    color:"#00BEE3",
    width: '30px',
    height: '2px',
    marginTop:'-10px'
  };
  return (
    <>
      <div
        style={{
          marginTop: "20vh",
          //   display: "flex",
          marginBottom: '-50vh'
        }}
      >
        <img style={{ width: "100%" }} src={footer} />

        <div
          style={{
            position: "absolute",
            marginTop: "-62vh",
            marginLeft: "10vw",
          }}
        >
          <KatonDiv
            style={{
              display: "grid",
            }}
          >
            <h1
              style={{
                color: "white",
              }}
            >
              KATON
            </h1>
            <p
              style={{
                color: "white",
                marginTop: "-5vh",
                marginLeft: "0vw",
                fontSize: "12px",
              }}
            >
              360 degree break
            </p>
            <div
              style={{
                width: "25vw",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                doloribus. Odio quasi amet et ratione explicabo non at! Error,
                totam.
              </p>
            </div>
          </KatonDiv>
          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "10px",
                letterSpacing: "1px",
              }}
            >
              Follow us on
            </p>
            <IconDiv>
              <WhiteBg src={whitebg} />
              <FaFacebookF style={{ color: '#00BEE3', marginLeft: '-18px', width: '7px', height: '12px', marginTop: '17px' }} />
              <WhiteBg src={whitebg} />
              <FaLinkedinIn style={{ color: '#00BEE3', marginLeft: '-18px', width: '12px', height: '15px', marginTop: '17px' }} />
              <WhiteBg src={whitebg} />
              <FaTwitter style={{ color: '#00BEE3', marginLeft: '-18px', width: '12px', height: '15px', marginTop: '17px' }} />
            </IconDiv>
          </div>
        </div>
        {/* quick links div */}
        <Links>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "45vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                QUICK LINKS
              </p>
              <Box sx={{ ...commonStyles, borderBottom: 2,  }} />
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                ABOUT US
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                What Is Katon
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Freelancer Teacher
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Individual Student
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Content Expert
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Publisher
              </li>
            </div>

            <div></div>
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "59vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Support
              </p>
              <Box sx={{ ...commonStyles2, borderBottom: 2,  }} />
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Help
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Contact Us
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Write To us
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Privacy Policy
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Terms of use
              </li>
            </div>

            <div></div>
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "75vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Address
              </p>
              <Box sx={{ ...commonStyles2, borderBottom: 2,  }} />
              <li
                style={{
                  color: "white",
                  fontSize: "10px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: '20vw'
                  }}
                >
                <PlaceIcon sx={{color:'#00BEE3',marginTop:'15px',width:'20.5px',height:'20.5px'}} />
                  <p
                    style={{
                      marginLeft: "12px",
                    }}
                  >
                    Moutn Eliabeth Novena Specialist Center 38 Irrawady Rd
                    #04-29 Singapore 329563
                  </p>
                </div>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                <LocalPhoneIcon sx={{color:'#00BEE3',marginTop:'15px',width:'20.5px',height:'20.5px'}} />
                  <p
                    style={{
                      marginLeft: "12px",
                    }}
                  >
                    Tel: +65 6694 0020
                  </p>
                </div>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                <EmailIcon sx={{color:'#00BEE3',marginTop:'15px',width:'20.5px',height:'20.5px'}} /> 
                  <p
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Youremail@gmail.cp,
                  </p>
                </div>
              </li>
            </div>

            <div></div>
          </div>
        </Links>
      </div>
    </>
  )
}

export default Footer2