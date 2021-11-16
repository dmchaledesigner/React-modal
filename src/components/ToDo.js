import React from 'react';

import { useState } from 'react';
import styled from "styled-components/macro";

import Modal from './Modal';
import Button from './Button';



const ToDo = ({ title }) => {

    const [openModel, setOpenModel] = useState(false);

    const modalHandler = () => {
        setOpenModel(!openModel);
    }

    const cancelhandler = () => {
        console.log('cancel');
        setOpenModel(!openModel)
    }

    const confirmhandler = () => {
        console.log('confirm');
        alert('confirmed')
    }



    return (
        <>
            <CardStyled>
                <h2>{title}</h2>
                <Button children="Delete" onClick={modalHandler} />
            </CardStyled>

            {openModel &&
                <Modal modalHandler={modalHandler}
                    cancelhandler={cancelhandler}
                    confirmhandler={confirmhandler} />}

        </>
    )
}


ToDo.defaultProps = {
    title: 'Dummy Title',
}




const CardStyled = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  width: 20rem; 

  .actions {
  text-align: right;
    }


`

export default ToDo;



