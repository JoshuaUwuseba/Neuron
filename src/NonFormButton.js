import React from 'react';
import styled from 'styled-components';

// Non-form Button
const Button = styled.button`
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    background: none;
    border: 2px solid #DD1C1A;
    margin: 2rem;
`

function NonFormButton({className, onClick}){
    return(
        <Button className={className} onClick={onClick}>
            <svg width="23" height="45" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.21903 10.3298C0.638428 10.9104 0.638428 11.8518 1.21903 12.4324L10.6805 21.8938C11.2611 22.4744 12.2024 22.4744 12.783 21.8938C13.3636 21.3132 13.3636 20.3719 12.783 19.7913L4.37285 11.3811L12.783 2.97093C13.3636 2.39032 13.3636 1.44898 12.783 0.868382C12.2024 0.287781 11.2611 0.287781 10.6805 0.868382L1.21903 10.3298ZM33.3813 9.89438L2.2703 9.89438V12.8678L33.3813 12.8678V9.89438Z" fill="#DD1C1A"/>
            </svg>

       </Button>
    )
}

export default NonFormButton