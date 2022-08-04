import React from 'react'
import { styled } from '@mui/system'
import phone from "../assets/phone.png";
import girl from "../assets/girlstanding.png";
import imge from "../assets/bluecolor.png";

const Styleimg = styled("div")(({ theme }) => ({
    marginTop: "15vh",
    backgroundImage: `url(${kid})`,
    height: "720x",
    " & img": {
      width: "100%",
      height: "720px",
    },
  }));
  
  const Styledivs = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "238px",
    left: "320px",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontFamily: "Poppins",
    fontSize: "55px",
    fontWeight: "700",
    height: "154px",
    width: "523px",
    fontStyle: "normal",
    lineHeight: "77px",
    display: "flex",
    alignItems: "flex-end",
  }));
  
  const Styledivs1 = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "576px",
    height: "108px",
    left: "55px",
    top: "350px",
  
    fontFamily: "Poppins",
    fontStyle: "norma",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "36px",
    display: "flex",
    alignItems: "flex-end",
    color: "#FFFFFF",
  }));
  
  const Stylediv2 = styled("div")(({ theme }) => ({
    boxSizing: "border-box",
  
    position: "absolute",
    width: "183px",
    height: "47px",
    left: "55px",
    top: "500px",
  
    background: "#00BEE3",
    border: "1px solid #000000",
    borderRadius: "99px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "36px",
    display: "auto",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  }));
  
  const Styleimg1 = styled("div")(({ theme }) => ({
    marginTop: "90px",
    " & img": {
      width: "100%",
      height: "720px",
      transform: "matrix(1, 0, 0, 1, 0, 0)",
    },
  }));
  
  const Styledivsone = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("xl")]:{
      position: "absolute",
  
    height: "30px",
    left: "740px",
    top: "800px",
  
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "20px",
    lineHeight: "30px",
    display: "flex",
  
    letterSpacing: "0.4em",
  
    color: "#121212",
    },
    [theme.breakpoints.only("xl")]:{
      position: "absolute",
  
    height: "30px",
    left: "740px",
    top: "860px",
  
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "20px",
    lineHeight: "30px",
    display: "flex",
  
    letterSpacing: "0.4em",
  
    color: "#121212",
    }
  }));
  
  const Styledivstwo = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "520.27px",
    height: "249px",
    left: "740px",
    top: "890px",
  
    // fontFamily: "Poppins",
    fonStyle: "normal",
    fontWeight: "bolder",
    fontSize: "55px",
    lineHeight: "82px",
  
    color: "#111D5E",
    [theme.breakpoints.only("xl")]:{
      position: "absolute",
      width: "520.27px",
      height: "249px",
      left: "740px",
      top: "900px",
    
      // fontFamily: "Poppins",
      fonStyle: "normal",
      fontWeight: "bolder",
      fontSize: "55px",
      lineHeight: "82px",
    
      color: "#111D5E",
    }
  }));
  
  const Styledivsthree = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "541.28px",
    height: "108px",
    left: "736px",
    top: "1050px",
  
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "18px",
    lineHeight: "27px",
  
    color: "#565656",
    [theme.breakpoints.only("xl")]:{
        position: "absolute",
        width: "541.28px",
        height: "108px",
        left: "736px",
        top: "1120px",
      
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bolder",
        fontSize: "18px",
        lineHeight: "27px",
      
        color: "#565656",
    }
  }));
  
  const Styledivfour = styled("div")(({ theme }) => ({
    display: "flex",
    left: "736px",
    top: "1115px",
    position: "absolute",
    color: "#000000",
    [theme.breakpoints.only("xl")]:{
        display: "flex",
    left: "736px",
    top: "1215px",
    position: "absolute",
    color: "#000000",
    }
  }));
  
  const Styledivfour1 = styled("div")(({ theme }) => ({
   [theme.breakpoints.down("xl")]:{
    marginTop:'9vh',
    " & p": {
      color: " #000000",
      fontSize: "18px",
      fontWeight: "600",
      // fontFamily: "Poppins",
    },
   }
  }));
  
  const Styledivfour2 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("xl")]:{
      marginTop:'9vh',
      " & p": {
        color: " #000000",
    
        marginLeft: "10px",
        fontSize: "18px",
        fontWeight: "600",
        // fontFamily: "Poppins",
      },
    },
   
  }));
  
  const Styledivfour3 = styled("div")(({ theme }) => ({
   [theme.breakpoints.down("xl")]:{
    marginTop:'9vh',
    " & p": {
      color: " #000000",
  
      marginLeft: "10px",
      fontSize: "18px",
      fontWeight: "600",
      // fontFamily: "Poppins",
    },
   }
  }));
  
  const Styledivfour4 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("xl")]:{
      boxSizing: "border-box",
  
      position: "absolute",
      width: "183px",
      height: "47px",
      left: "736px",
      top: "1240px",
    
      background: "#00BEE3",
      border: "1px solid #000000",
      borderRadius: "99px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "21px",
      lineHeight: "36px",
      display: "auto",
      alignItems: "center",
      textAlign: "center",
      color: "#FFFFFF",
    
      " & img": {
        height: "13px",
        width: "13px",
        backgroundColor: "",
        marginLeft: "6px",
        color: "white",
        cursor: "pointer",
      },
    },
    [theme.breakpoints.only("xl")]:{
      boxSizing: "border-box",
  
      position: "absolute",
      width: "183px",
      height: "47px",
      left: "736px",
      top: "1340px",
    
      background: "#00BEE3",
      border: "1px solid #000000",
      borderRadius: "99px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "21px",
      lineHeight: "36px",
      display: "auto",
      alignItems: "center",
      textAlign: "center",
      color: "#FFFFFF",
    
      " & img": {
        height: "13px",
        width: "13px",
        backgroundColor: "",
        marginLeft: "6px",
        color: "white",
        cursor: "pointer",
      },
    }
  }));
  
  const Styleimg2 = styled("div")(({ theme }) => ({
    marginTop: "120px",
  
    " & img": {
      width: "100%",
      height: "600px",
    },
    [theme.breakpoints.down("lg")]: {
      " & img": {
        marginTop: "100px",
      },
    },
  }));
  
  const Stylenewd = styled("div")(({ theme }) => ({
  
    [theme.breakpoints.down("xl")]: {
      position: "absolute",
    left: "12.08%",
    right: "50.69%",
    top: "280.52%",
    bottom: "70.11%",
  
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineheight: "30px",
    /* identical to box height */
  
    letterSpacing: "0.4em",
  
    color: "#FFFFFF",
    },
  }));
  const Stylenewdd = styled("div")(({ theme }) => ({
    
    [theme.breakpoints.only("xl")]:{
  
      " & p": {
        position: "absolute",
        left: "11.08%",
        right: "10.27%",
        top: "280.37%",
        bottom: "40.61%",
    
        // fontFamily: 'Poppins',
        // fontStyle:'normal',
        fontWeight: "700",
        fontSize: "55px",
        lineHeight: "82px",
        /* identical to box height */
    
        color: "white",
  
    },
  },
  
  [theme.breakpoints.down("xl")]: {
  
    " & p": {
      position: "absolute",
      left: "11.08%",
      right: "10.27%",
      top: "280.37%",
      bottom: "40.61%",
  
      // fontFamily: 'Poppins',
      // fontStyle:'normal',
      fontWeight: "700",
      fontSize: "55px",
      lineHeight: "82px",
      /* identical to box height */
  
      color: "#FFFFFF",
  
  },
  
  
      [theme.breakpoints.down("lg")]: {
        marginTop: "60px",
  
        fontSize: "30px",
        "& p": {
          display: "flex",
        },
      },
    },
  }));
  const Stylenweds = styled("div")(({ theme }) => ({
  
    [theme.breakpoints.only("xl")]: {
      " & img": {
        position: "absolute",
        left: "67.59%",
        right: "10%",
        top: "195.22%",
        bottom: "-50.45%",
        height: "730px",
        width: "350px",
        webkitTransform: "rotate(45deg)",
        mozTransform: "rotate(-180deg)",
        msTransform: "rotate(-180deg)",
        oTransform: "rotate(-180deg)",
        transform: "rotate(-180eg)",
        backgroundColor: "white",
      },
    },
  
  
    [theme.breakpoints.down("xl")]: {
      " & img": {
        position: "absolute",
        left: "67.59%",
        right: "10%",
        top: "260.22%",
        bottom: "-50.45%",
        height: "730px",
        width: "350px",
        webkitTransform: "rotate(45deg)",
        mozTransform: "rotate(-180deg)",
        msTransform: "rotate(-180deg)",
        oTransform: "rotate(-180deg)",
        transform: "rotate(-180eg)",
        backgroundColor: "white",
      },
    },
  
    [theme.breakpoints.down("lg")]: {
      " & img": {
        position: "absolute",
        left: "67.59%",
        right: "10%",
        top: "200.22%",
        bottom: "-50.45%",
        height: "730px",
        width: "350px",
        webkitTransform: "rotate(45deg)",
        mozTransform: "rotate(-180deg)",
        msTransform: "rotate(-180deg)",
        oTransform: "rotate(-180deg)",
        transform: "rotate(-180eg)",
        backgroundColor: "white",
      },
    },
  
    
  
  }));
  
  const Stylekaton = styled("div")(({ theme }) => ({
    [theme.breakpoints.only("xl")]: {
      " & p": {
        position: "absolute",
        width: "199px",
        height: "97px",
        left: "1150px",
        top: "1950px",
  
        fontFamily: "Mitr",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "55px",
        lineHeight: "97px",
  
        color: "#00BEE3",
      },
    },
  
    [theme.breakpoints.down("xl")]: {
      " & p": {
        position: "absolute",
        width: "199px",
        height: "97px",
        left: "994px",
        top: "1870px",
  
        fontFamily: "Mitr",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "55px",
        lineHeight: "97px",
  
        color: "#00BEE3",
      },
    },
  
    [theme.breakpoints.down("lg")]: {
      " & p": {
        position: "absolute",
        width: "199px",
        height: "97px",
        left: "1008px",
        top: "1370px",
  
        fontFamily: "Mitr",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "55px",
        lineHeight: "97px",
  
        color: "#00BEE3",
      },
    },
  }));
  
  const Style360 = styled("div")(({ theme }) => ({
    [theme.breakpoints.only("xl")]: {
      " & p": {
        position: "absolute",
        width: "194px",
        height: "24px",
        left: "1138px",
        top: "2155px",
  
        fontFamily: "Mitr",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "24px",
        /* identical to box height */
  
        color: "#111D5E",
      },
    },
  
    [theme.breakpoints.down("xl")]: {
      " & p": {
        position: "absolute",
        width: "194px",
        height: "24px",
        left: "995px",
        top: "1975px",
  
        fontFamily: "Mitr",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        /* identical to box height */
  
        color: "#111D5E",
      },
  
      [theme.breakpoints.down("lg")]: {
        " & p": {
          position: "absolute",
          width: "194px",
          height: "24px",
          left: "1008px",
          top: "2975px",
  
          fontFamily: "Mitr",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          /* identical to box height */
  
          color: "#111D5E",
        },
      },
    },
  }));

const About = () => {
  return (
   <>
   
   <Styleimg1>
        <center>
          <img src={girl} />
        </center>
        <Styledivsone>ABOUT US</Styledivsone>
        <Styledivstwo>Welcome to Katon Learning</Styledivstwo>
        <Styledivsthree>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Styledivsthree>
        <Styledivfour>
          <Styledivfour1>
            <p>WE Have</p>
          </Styledivfour1>
          <Styledivfour2>
            <p> 15 Years </p>
          </Styledivfour2>
          <Styledivfour3>
            <p> Of Working Experience </p>
          </Styledivfour3>
        </Styledivfour>
        <Styledivfour4>
          Read More
          {/* <img src={vectimg} /> */}
        </Styledivfour4>
      </Styleimg1>

   </>
  )
}

export default About