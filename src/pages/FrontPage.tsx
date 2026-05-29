import { useNavigate } from "react-router";

function FrontPage() {

    const navigate = useNavigate();

    return (
        <>
                <div className = "vh-100 w-100 text-center align-content-center">
                    <h1 className = "text-3xl font-bold" > PetCare </h1>
                    <h3 className = "text-2xl font-bold" > La tua piattaforma per la cura degli animali domestici </h3>
                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                        <button className="btn btn-primary" onClick={() => navigate("/login")}> Accedi </button>
                        <button className="btn btn-secondary" onClick={() => navigate("/register")} disabled> Registrati </button>
                    </div>
                </div>
        </>
    )
} 

export default FrontPage;