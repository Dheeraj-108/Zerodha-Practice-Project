import { Routes, Route, Navigate } from "react-router";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/dashboard/Home";
import Login from "./components/verification/Login";
import Signup from "./components/verification/Signup";
import AuthContext from "./components/context/AuthContext";

function App() {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route
                    path="/*"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
