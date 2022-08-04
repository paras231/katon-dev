import React from "react";
import { Typography } from "@mui/material";
import handsup from "../assets/standingovation.png";
import dateIcon from "../assets/Icon material-date-range.png";
import eventbtn from "../assets/eventbtn.png";
import { styled } from "@mui/system";
import groupscard from "../assets/manold.png";
import events from "../assets/upcomingevents.png";

const EventsContainer = styled("div")(({ theme }) => ({
 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Handsupimg = styled("img")(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    borderRadius: "15px",
  width: "38vw",
  height: "38vh",
  },

  [theme.breakpoints.down("xl")]:{
    borderRadius: "5px",
  width: "42vw",
  height: "45vh",
  },
  [theme.breakpoints.down("lg")]:{
    borderRadius: "5px",
  width: "45vw",
  height: "40vh",
  }
}));

const GrpupImg = styled("img")(({ theme }) => ({

  [theme.breakpoints.only("xl")]:{
    // borderRadius: "19px",
  width: "38vw",
  height: "38vh",
  },

  [theme.breakpoints.down("xl")]:{
    // borderRadius: "50px",
  width: "43vw",
  height: "45vh",
  },
  [theme.breakpoints.down("lg")]:{
    borderRadius: "9px",
  width: "45vw",
  height: "40vh",
  }
}));



const Events = () => {
  return (
    <>
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
          E v e n t s
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
          Our Upcoming Events
        </p>
      </center>
      <center>
        <img
        style={{
          boxShadow: "10px 10px 34px rgba(0,0,0,0.25)",
          borderRadius: "16px"
        }}
        src={events}
        />
      </center>
  
      {/* events card */}
      {/* <EventsContainer>
        <div
          style={{
            boxShadow: "10px 10px 34px rgba(0,0,0,0.25)",
            borderRadius: "10px",
          }}
        >
          <Handsupimg src={handsup} alt="handsup" />
          <div
            style={{
              display: "flex",
              marginLeft: "26px",
            }}
          >
            <img
              style={{
                width: "19px",
                height: "21px",
                marginTop: "14px",
              }}
              src={dateIcon}
            />
            <p
              style={{
                color: "#111D5E",
                marginLeft: "20px",
                fontSize: "15px",
                fontWeight: "medium",
              }}
            >
              25 April 2022
            </p>
          </div>
          <div
            style={{
              width: "40vw",
              marginLeft: "26px",
            }}
          >
            <p
              style={{
                color: "#212121",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
          <div
            style={{
              width: "40vw",
              marginLeft: "26px",
            }}
          >
            <p
              style={{
                color: "#212121",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </div>
          <div
            style={{
              marginLeft: "26px",
            }}
          >
            <img
              style={{
                width: "9vw",
                height: "9vh",
                cursor: "pointer",
              }}
              src={eventbtn}
            />
          </div>
        </div>
        <div
          style={{
            boxShadow: "10px 10px 20px rgba(0,0,0,0.25)",
            marginLeft: "26px",
            borderRadius: "20px",
          }}
        >
          <GrpupImg
          
            src={groupscard}
            alt="handsup"
          />
          <div
            style={{
              display: "flex",
              marginLeft: "26px",
            }}
          >
            <img
              style={{
                width: "19px",
                height: "21px",
                marginTop: "14px",
              }}
              src={dateIcon}
            />
            <p
              style={{
                color: "#111D5E",
                marginLeft: "20px",
                fontSize: "15px",
                fontWeight: "medium",
              }}
            >
              25 April 2022
            </p>
          </div>
          <div
            style={{
              width: "40vw",
              marginLeft: "26px",
            }}
          >
            <p
              style={{
                color: "#212121",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
          <div
            style={{
              width: "40vw",
              marginLeft: "26px",
            }}
          >
            <p
              style={{
                color: "#212121",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur ditr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </p>
          </div>
          <div
            style={{
              marginLeft: "26px",
            }}
          >
            <img
              style={{
                width: "10vw",
                height: "10vh",
                cursor: "pointer",
              }}
              src={eventbtn}
            />
          </div>
        </div>
      </EventsContainer> */}
      {/* <img  src={phone} /> */}
    </>
  );
};

export default Events;
