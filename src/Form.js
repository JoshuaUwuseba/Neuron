import GoButton from "./GoButton"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { LoggedInContext } from "./NeuronGUI"

const Input = styled.input`
    width: 38rem;
    height: 7rem;
    font-size: 3rem;
    text-align: center;
    background: #FFFFFF;
    border: 0.33rem solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 4rem;
    margin: 1.25rem;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    width: 38rem;
    height: 7rem;
    margin: 1.25rem;
`

export default function Form (){
    const {register, handleSubmit } = useForm()
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext)

    const submit = (data) => {
        // Send data to backend and use to set logged in to true
        if(data.username == "Joshua" && data.password == "HeisLord"){
            setIsLoggedIn(true)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Input type="text" {...register("username")}/> 
                </div>
                <div>
                    <Input type="password" {...register("password")}/> 
                </div>
                <Div>
                    <GoButton/>
                </Div>
            </form>
        </div>
    )
}