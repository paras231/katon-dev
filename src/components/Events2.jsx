import React from "react";
import manstanding from "../assets/manstanding.png";
import hands from "../assets/hands.png";
import rect from "../assets/rect.png";
import styled from "styled-components";
import pin from "../assets/pin2.png";
import date from "../assets/date.png";
import {MdLocationPin} from "react-icons/md";


const MainContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  justify-content: center;
  align-items: center;
`;

const EventCardDiv1 = styled.div`
  background-color: #ffffff;
  box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
  width: 40vw;
  height: 85vh;
  border-radius: 10px;
`;
const HandsImage = styled.img`
  width: 35vw;
  height: 39vh;
  margin-left: 35px;
  margin-top: 15px;
`;

const ButtonCOntainer = styled.div`
  margin-left: 310px;
  margin-top: -30px;
  @media(min-width:1024px) and (max-width:1279px){
    margin-left: 250px;
  }
`;
const ReactImage = styled.img`
  height: 6vh;
`;

const RectButton = styled.button`
height: '6vh';
border-radius:26px;
width: 11vw;
height:6vh;
background-color:#00BEE3;

`
const TextButtonDiv = styled.div`

display:'flex'

`

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-left: 4px;
  margin-top: 1px;
`;
const TextIconContainer = styled.div`
  display: flex;
  position: absolute;
  // margin-left: ;
  margin-top: -10px;

  @media only screen and (min-width: 1536px) {
    display: flex;
    position: absolute;
    margin-left: 20px;
    margin-top: -10px;
  }
`;

const DateAndTextContainer = styled.div`
  display: flex;
  margin-left: 50px;
`;
const DateText = styled.p`
  color: #111d5e;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  margin-top: -1px;
`;
const MainParaContent = styled.div`
  display: grid;
  width: 34vw;
  margin-left: 46px;
  margin-top: -20px;
`;
const BoldParagraph = styled.p`
  font-weight: 700;
  font-size: 17px;
  color: #212121;
`;

const EventButton = styled.button`
  margin-top: 20px;
  width: 10vw;
  height: 8vh;
  color: #111d5e;
  margin-left: 40px;
  border: 2px solid #111d5e;
  border-radius: 42px;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media(min-width:1024px) and (max-width:1279px){
    width: 13vw;
    margin-top: 4px;
  }
`;

const EventCardDiv2 = styled.div`
  margin-left: 20px;
  background-color: #ffffff;
  box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);
  width: 40vw;
  height: 85vh;
  border-radius: 10px;
`;
const EventText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #111d5e;
  position: absolute;
  margin-top: -10px;

  @media only screen and (min-width: 1536px) {
    font-size: 14px;
    font-weight: 700;
    color: #111d5e;
    position: absolute;
    margin-top: -10px;
    margin-left: 10px;
  }
`;


const Events2 = () => {
  return (
 <>

 <center>
        <p
          style={{
            color: "#00BEE3",
            marginTop:'10vh'
          }}
        >
          Events
        </p>
      </center>

<center>
        <h1
          style={{
            color: "#332E57",
          }}
        >
          Our Upcoming Events
        </h1>
      </center>
      <MainContainer>
        <EventCardDiv1>
          <HandsImage src={hands} />
          <ButtonCOntainer>
          <RectButton>
          <TextIconContainer>
            <MdLocationPin 
            style={{
              color:'white',
              width:'16px',
              height:'16px',
            }}
            />
              <StyledText>Compala</StyledText>
            </TextIconContainer>
          </RectButton>
           
          </ButtonCOntainer>
          <DateAndTextContainer>
            <img
              style={{
                height: "19px",
                width: "21px",
              }}
              src={date}
            />
            <DateText>25 April 2022</DateText>
          </DateAndTextContainer>
          <MainParaContent>
            <BoldParagraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </BoldParagraph>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#212121",
                marginTop: "-10px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
          </MainParaContent>
          <EventButton>
            <EventText>Go To Event</EventText>
          </EventButton>
        </EventCardDiv1>
        <EventCardDiv2>
          <HandsImage src={manstanding} />
          <ButtonCOntainer>
          <RectButton>
          <TextIconContainer>
            <MdLocationPin 
            style={{
              color:'white',
              width:'16px',
              height:'16px',
            }}
            />
              <StyledText>Compala</StyledText>
            </TextIconContainer>
          </RectButton>
           
          </ButtonCOntainer>
          <DateAndTextContainer>
            <img
              style={{
                height: "19px",
                width: "21px",
              }}
              src={date}
            />
            <DateText>25 April 2022</DateText>
          </DateAndTextContainer>
          <MainParaContent>
            <BoldParagraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </BoldParagraph>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#212121",
                marginTop: "-10px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat
            </p>
          </MainParaContent>
          <EventButton>
            <EventText>Go To Event</EventText>
          </EventButton>
        </EventCardDiv2>
      </MainContainer>

 </>
  )
}

export default Events2