import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const FRONTEND_URL =
    import.meta.env.VITE_FRONTEND_URL ||
    "https://dheeraj-goswami-zerodha.netlify.app";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        try {
            const parsedUser = savedUser ? JSON.parse(savedUser) : null;
            if (typeof parsedUser === "string") {
                return { username: parsedUser };
            }
            return parsedUser;
        } catch (e) {
            return null;
        }
    });
    const [cookies, removeCookie] = useCookies(["accessToken"]);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const { data } = await axios.post(
                    `${API_URL}/api/v1/kite/users/verify`,
                    {},
                    { withCredentials: true }
                );

                if (data.status) {
                    setUser({ username: data.user.username });
                    localStorage.setItem(
                        "user",
                        JSON.stringify({ username: data.user.username })
                    );
                } else {
                    removeCookie("accessToken");
                    setUser(null);
                    localStorage.removeItem("user");
                }
            } catch (error) {
                removeCookie("accessToken");
                setUser(null);
                localStorage.removeItem("user");
            }
        };

        verifyUser();
    }, [cookies.accessToken, removeCookie]);

    const logout = async () => {
        try {
            await axios.post(
                `${API_URL}/api/v1/kite/users/logout`,
                {},
                {
                    withCredentials: true,
                }
            );
            removeCookie("accessToken");
            setUser(null);
            localStorage.removeItem("user");
            window.location.href = `${FRONTEND_URL}/login`;
        } catch (error) {
            removeCookie("accessToken");
            setUser(null);
            localStorage.removeItem("user");
            return { success: false, message: "Logout failed" };
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
