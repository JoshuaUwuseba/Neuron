import Login from "./Login";
import App from "./App";
import { createContext, useState } from "react";

export const LoggedInContext = createContext()

export default function NeuronGUI() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return(
        <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {isLoggedIn ? <App/> : <Login/>}
        </LoggedInContext.Provider>
    )
}