import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/dashboard/Home";

function App() {
    return (
        <>
            <ToastContainer />
            <Home />
        </>
    );
}

export default App;
