import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import styled from 'styled-components';


const StyledDiv = styled.div`


`
const StyledButton = styled.button`

background-color :#00BEE3;
border-radius :30px;
width:4vw;
height:4vh;
text-align: center;
`
const ButtonC= () => {
  return (
    <>
    <StyledDiv>
    <StyledButton>
    <AiOutlineArrowRight  style={{
        width: '40px', height:'17px' ,marginTop:'-20px',color:'#FFFFFF',
    }}/>
    </StyledButton>
    </StyledDiv>
    </>
  )
}

export default ButtonC