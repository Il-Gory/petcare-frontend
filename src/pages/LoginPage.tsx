import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const checkUser = (() => {
        const url = "http://localhost:9010/api/users?username=" + username;
        axios.get(url)
            .then((response) => {
                if(response.data[0].password_hash == password) {
                    navigate("/main")
                } else {
                    console.error("Placeholder: da cambiare");
                }
            })
    })



    return (
        <>
            <div className = "vh-100 w-100 text-center align-content-center">
                <h1 className = "text-3xl font-bold" > Login: </h1>
                <div className="d-flex flex-column align-items-center gap-3 mt-4">
                    <input 
                        type="text" 
                        className="form-control w-25" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(ev) => setUsername(ev.target.value)} 
                    />
                    <input 
                        type="password" 
                        className="form-control w-25" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(ev) => setPassword(ev.target.value)} 
                    />
                    <button className="btn btn-primary" onClick={checkUser}> Accedi </button>
                </div>
            </div>
        </>
    )
} 

export default LoginPage;