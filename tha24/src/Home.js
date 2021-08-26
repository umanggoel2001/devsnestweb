import React, { useContext } from 'react'
import { LoginContext } from './App';

const Home = () => {
    const user = useContext(LoginContext);
    return(
        <div>
            <h1 style={{margin: "10px"}}>Home Section</h1>
            <h2>To access Profile and Dashboard, Please Login</h2>
            <button style={{margin: "10px", fontSize: '1.2rem'}} onClick={user.setLogin}>{user.login? "Logout":"Login"}</button>
        </div>
    )
}

export default Home;