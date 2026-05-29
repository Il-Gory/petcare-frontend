import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage() {

    const navigate = useNavigate();
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    });
    
    const checkUser = async (ev: any) => {
        ev.preventDefault();
        const url = import.meta.env.VITE_BASEURL + "/api/auth/login"
        const response = await axios.post(url, creds);
        localStorage.setItem("accessToken", response.data.token)
        navigate("/home")
    }

    return (
        <>
            <div className = "vh-100 w-100 text-center align-content-center">
                <h1 className = "text-3xl font-bold" > Login: </h1>
                <div className="d-flex flex-column align-items-center gap-3 mt-4">
                    <input 
                        type="text" 
                        className="form-control w-25" 
                        placeholder="Username"
                        value={creds.username} 
                        onChange={(ev) => setCreds({
                            ...creds,
                            [creds.username]: ev.target.value
                            })} 
                    />
                    <input 
                        type="password" 
                        className="form-control w-25" 
                        placeholder="Password"
                        value={creds.password} 
                        onChange={(ev) => setCreds({
                            ...creds,
                            [creds.password]: ev.target.value
                            })} 
                    />
                    <button className="btn btn-primary" onClick={checkUser}> Accedi </button>
                </div>
            </div>
        </>
    )
} 

export default LoginPage;