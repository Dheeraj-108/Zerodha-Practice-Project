import AuthContext from "../../../../../dashboard/src/components/context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

function Logout() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return <button onClick={handleLogout}>Logout </button>;
}
