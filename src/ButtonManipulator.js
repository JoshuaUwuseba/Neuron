import React from 'react';
import styled from 'styled-components';



function ButtonManipulator(props) {

    const onClick = (e) => {
        let manipulatedData = props.dataManipulator(props.dataToBeRendered);
        props.dataAction(manipulatedData)
    }

    return (
        <div className={props.className}>
            <button style={{"border": "none"}} onClick={onClick}>
                <props.iconStyle src={props.icon}/>
                <props.textStyle>{props.type}</props.textStyle>
            </button>
        </div>
    );
}

export default ButtonManipulator;