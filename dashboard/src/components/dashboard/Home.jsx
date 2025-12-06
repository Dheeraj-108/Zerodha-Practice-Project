import Dashboard from "./Dashboard";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router";

function Home() {
    return (
        <Router>
            <Navbar />
            <Dashboard />
        </Router>
    );
}

export default Home;
