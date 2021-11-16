import React from 'react';

import styled from 'styled-components/macro';

import Backdrop from './Backdrop';
import Button from './Button';


const Modal = ({ modalHandler, cancelhandler, confirmhandler }) => {



    return (
        <>
            <ModalStyled>
                <p>Are you sure?</p>
                <div className="btn-wrapper">

                    <Button
                        onClick={cancelhandler}
                        children="Cancel"
                        className={`btn btn--clear`} />

                    <Button
                        onClick={confirmhandler}
                        children="Confirm"
                        className="btn" />
                </div>

            </ModalStyled>

            <Backdrop modalHandler={modalHandler} />
        </>
    )
}


const ModalStyled = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);

  .btn-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`


export default Modal
