import React from "react";
import styled from "styled-components";
import woman from "../assets/joseprice.png";
import man from "../assets/randypowell.png";
import man2 from "../assets/andeera.png";
import stars from "../assets/stars.png";
import testimonials from "../assets/testimonials.png";

const MainCOntainer = styled.div`
  margin-left: 8vw;
`;

const SecondaryDiv = styled.div`
  display: flex;
`;

const ImageList = styled.div`
  display: grid;

`;

const Testimonials = () => {
  return (
    <>
    <img
    style={{
      marginLeft: "8vw",
      marginTop:'10vh',
      backgroundColor: "white",
    }}
    src={testimonials}
    />
      {/* <h1
        style={{
          color: "#111D5E",
          marginLeft: "10vw",
        }}
      >
        Testimonials
      </h1>
      <MainCOntainer>
        <SecondaryDiv>
          <ImageList>
            <img src={woman} />
            <img
              style={{
                border: "none",
                outline: "none",
                width: "20vw",
                height: "14vh",
                marginLeft: "9px",
                marginTop:'5vh'
              }}
              src={man}
            />
            <img style={{ width: "20vw", marginLeft: "19px",marginTop:'5vh' }} src={man2} />
          </ImageList>
          <div
            style={{
              width: "36vw",
              // marginBottom:'14px'
            }}
          >
            <p
              style={{
                fontSize: "30px",
                color: "#212121",
                fontWeight: "bold",
              }}
            >
              It was great learning
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
              lobortis tincidun tfames quisque mauris at diam. Nullam morbi
              ipsum turpis amet id posuere torto quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
              lobortis tincidunt fames quisque mauris at diam. Nullam morbi
            </p>
            <img style={{
              height:'16vh'
            }} src={stars}/>
          </div>
        </SecondaryDiv>
      </MainCOntainer> */}
    </>
  );
};

export default Testimonials;
