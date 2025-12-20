import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { BrowserRouter } from "react-router";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <CookiesProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </CookiesProvider>
        </BrowserRouter>
    </StrictMode>
);
