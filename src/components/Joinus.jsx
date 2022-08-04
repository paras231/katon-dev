import React from "react";
import path1 from "../assets/path1.png";
import path2 from "../assets/path2.png";
import path3 from "../assets/path3.png";
import path4 from "../assets/path4.png";
import joinus from "../assets/joinus.png";
import bg from "../assets/background (1).png";
import Box from '@mui/material/Box';
import styled from "styled-components";


const Button = styled.button`
  margin-left: 620px;

  margin-top: 50px;
  width: 17vw;
  height: 7vh;
  background-color: #00bee3;
  border-radius: 30px;
  position: absolute;
  text-align: center;
  color: white;
`;

const MainPublisherDiv = styled.div`
  position: absolute;
  margin-top: 40vh;
  margin-left: 250px;
`;
const PublisherDiv1 = styled.div`
  display: grid;
  margin-left: 20px;
`;
const PublisherDiv2 = styled.div`
  display: grid;
  margin-left: 130px;
`;
const PublisherDiv3 = styled.div`
  display: grid;
  margin-left: 140px;
`;
const PublisherDiv4 = styled.div`
  display: grid;
  margin-left: 100px;
`;
const MainIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;
const MainDiv = styled.div`
  position: absolute;
  margin-top: 22vh;
  margin-left: 180px;
  @media (min-width:1024px) and (max-width:1280px) {
    position: absolute;
  margin-top: 30vh;
  margin-left: 190px;
  margin-right: 180px;
  }
` 
const Text = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;


const Joinus = () => {

  const commonStyles = {
    bgcolor: 'transparent',
  
    borderColor: 'white',
    color:"white",
    width: '1px',
    height: '10rem',
    marginLeft:'74px'
  };
  

  return (
    <>
  
    <Button>Who Can Join Us</Button>

   
     
<MainDiv>
     <MainIconDiv>
     <PublisherDiv1>
          <img src={path1} style={{
            height:'7vh',
            marginLeft:'17px',
          }} alt="path1" />
          <Text>Publisher</Text>
        </PublisherDiv1>
        <Box sx={{ ...commonStyles, borderRight: 2,  }} />
        <PublisherDiv2>
          <img  style={{marginLeft:'-5px', height:'7vh',}} src={path2} alt="path1" />
          <div
          style={{
            display: 'flex',
            marginLeft:'-60px'
          }}
          >
          <Text>Content </Text>
          <Text
          style={{
            marginLeft:'10px'
          }}
          >   Expert </Text>
          </div>
        </PublisherDiv2>
        <Box sx={{ ...commonStyles, borderRight: 2,  }} />
        <PublisherDiv3>
          <img style={{
            height:'7vh'
          }} src={path3} alt="path1" />
          <div
          style={{
            display: 'flex',
            marginLeft:'-75px'
          }}
          >
          <Text>Freenlancer </Text>
          <Text
          style={{
            marginLeft:'10px'
          }}
          >   Teacher </Text>
          </div>
         
        </PublisherDiv3>
        <Box sx={{ ...commonStyles, borderRight: 2,  }} />
        <PublisherDiv4>
          <img src={path4} alt="path1" />
          <Text
          style={{
            marginLeft:'-50px'
          }}
          >Individual Student</Text>
        </PublisherDiv4>
     </MainIconDiv>
       
     </MainDiv>

      <img style={{
        marginTop: "10vh",
        width: "100%",
        height:'42vh'
      }} src={bg} />
    </>
  );
};

export default Joinus;
