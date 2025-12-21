import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://dheeraj-goswami-zerodha-backend.onrender.com";
const FRONTEND_URL =
    import.meta.env.VITE_FRONTEND_URL ||
    "https://dheeraj-goswami-zerodha.netlify.app";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const { data } = await axios.post(
                    `${API_URL}/api/v1/kite/users/verify`,
                    {},
                    { withCredentials: true }
                );

                if (data.status) {
                    const userData = { username: data.user.username };
                    setUser(userData);
                    localStorage.setItem("user", JSON.stringify(userData));
                } else {
                    removeCookie("accessToken");
                    setUser(null);
                    localStorage.removeItem("user");
                }
            } catch (error) {
                removeCookie("accessToken");
                setUser(null);
                localStorage.removeItem("user");
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, [cookies.accessToken, removeCookie]);

    const login = async (email, password) => {
        try {
            const response = await axios.post(
                `${API_URL}/api/v1/kite/users/login`,
                { email, password },
                { withCredentials: true }
            );

            if (response.data.success) {
                const userData = response.data.user;
                const userObj = { username: userData.username };
                setUser(userObj);
                localStorage.setItem("user", JSON.stringify(userObj));
                return { success: true };
            }
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || "Login failed",
            };
        }
    };

    const signup = async (username, email, password) => {
        try {
            const response = await axios.post(
                `${API_URL}/api/v1/kite/users/signup`,
                { username, email, password },
                { withCredentials: true }
            );

            if (response.data.success) {
                const userData = response.data.user;
                const userObj = { username: userData.username };
                setUser(userObj);
                localStorage.setItem("user", JSON.stringify(userObj));
                return { success: true };
            }
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || "Signup failed",
            };
        }
    };

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
        <AuthContext.Provider
            value={{ user, setUser, loading, logout, login, signup }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
