import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    position: fixed;
    width: 190px;
    height: 34.67px;
    left: 580px;
    top: 127.33px;

    background: rgba(196, 196, 196, 0.42);
    border-radius: 20px;
    border: none;

    font-size: 1.5rem;
    text-align: center;
`
const Img = styled.img`
    position: fixed;
    width: 20.36px;
    height: 22px;
    left: 594.19px;
    top: 134px;
`

function Search(props) {
    const [searchValue, setSearchValue] = useState("")

    const onChange = (e) => {
        let query = e.target.value
        setSearchValue(query)
        let result = props.searchManipulator(props.dataToBeRendered, query)
        props.dataAction(result)
    }

    return (
        <div>
           <Input type="search" value={searchValue} onChange={onChange}/>
           <Img src={process.env.PUBLIC_URL + "/assets/question_red.svg"}/>
        </div>
    );
}

export default Search;