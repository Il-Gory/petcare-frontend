import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "../Auth";

function ProtectedRoute() {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;