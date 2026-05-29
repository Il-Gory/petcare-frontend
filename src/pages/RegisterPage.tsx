import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function RegisterPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const addUser = (() => {
        const url = "http://localhost:9010/api/users"
        axios.post(url, { username, email, password })
            .then(() => {
                    navigate("/main")
            }).catch(() => {
                console.error("Placeholder: da cambiare");
            })  
    })


    return (
        <>
            <div className = "vh-100 w-100 text-center align-content-center">
                <h1 className = "text-3xl font-bold" > Registrati: </h1>
                <div className="d-flex flex-column align-items-center gap-3 mt-4">
                    <input 
                        type="text" 
                        className="form-control w-25" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(ev) => setUsername(ev.target.value)} 
                    />
                    <input 
                        type="text" 
                        className="form-control w-25" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(ev) => setEmail(ev.target.value)} 
                    />
                    <input 
                        type="password" 
                        className="form-control w-25" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(ev) => setPassword(ev.target.value)} 
                    />
                    <button className="btn btn-primary" onClick={addUser}> Registrati </button>
                </div>
            </div>
        </>
    )

} 

export default RegisterPage;