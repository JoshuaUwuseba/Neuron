import styled from "styled-components"

const Button = styled.button`
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    background: #DD1C1A;
    border-style: none;
`

export default function GoButton({ className }){
    return(
        <Button className={className} type="submit">
            <svg width="3rem" height="3rem" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3837 12.0505C26.9639 11.4703 26.9639 10.5297 26.3837 9.94956L16.9297 0.495491C16.3495 -0.0846577 15.4089 -0.0846577 14.8288 0.495491C14.2486 1.07564 14.2486 2.01625 14.8288 2.59639L23.2324 11L14.8288 19.4036C14.2486 19.9838 14.2486 20.9244 14.8288 21.5045C15.4089 22.0847 16.3495 22.0847 16.9297 21.5045L26.3837 12.0505ZM0.666626 12.4856H25.3333V9.51444H0.666626V12.4856Z" fill="white"/>
            </svg>
       </Button>
    )
}