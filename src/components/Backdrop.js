import React from 'react';
import styled from 'styled-components/macro';


const Backdrop = ({ modalHandler }) => {
  return (
    <BackdropStyled onClick={modalHandler} />
  )
}



const BackdropStyled = styled.div`
position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`

export default Backdrop
