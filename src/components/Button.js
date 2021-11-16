import React from 'react';
import styled from 'styled-components/macro';

const Button = ({ children, onClick, btnClass }) => {

    // style array
    const btnStyles = ['btn--alt', 'btn--test'];
    //if includes
    const STYLES = btnStyles.includes(btnClass) ? btnStyles : btnStyles[0];


    return (
        <div className="actions">
            <ButtonStyled
                className={`btn ${STYLES}`}
                onClick={onClick}>
                {children}
            </ButtonStyled>
        </div>
    )
}


const ButtonStyled = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  background-color: #800040;
  color: white;
  border: 1px solid #800040;
  margin: 0 1rem;

    .btn--clear{
        background: white;
        border: 1px solid #9c1458;
        color: #9c1458;
    }

    .btn--alt{
        background: white;
        border: 1px solid #9c1458;
        color: #9c1458;
    }
}

.btn:hover {
  background-color: #9c1458;
  border-color: #9c1458;
}

`


Button.defaultProps = {
    children: 'Click here',
}


export default Button
