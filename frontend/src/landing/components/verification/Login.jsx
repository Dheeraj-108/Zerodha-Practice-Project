import { Link } from "react-router";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../../context/AuthContext.jsx";
import AuthLayout from "./AuthLayout.jsx";

function Login() {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(inputValue.email, inputValue.password);
        if (result.success) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
            console.error(result.message);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };

    const footerLink = (
        <>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#f0411d] hover:underline">
                Sign Up
            </Link>
        </>
    );

    return (
        <AuthLayout title="Login To Kite" footer={footerLink}>
            <form action="">
                <div className="input-fields flex flex-col gap-4 mb-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full h-10 sm:h-12 border border-gray-300 rounded-sm text-gray-500 px-4 focus:outline-none focus:border-[#f0411d] focus:ring-1 focus:ring-[#f0411d]"
                        onChange={handleChange}
                        value={inputValue.email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className="w-full h-10 sm:h-12 border border-gray-300 rounded-sm text-gray-500 px-4 focus:outline-none focus:border-[#f0411d] focus:ring-1 focus:ring-[#f0411d]"
                        onChange={handleChange}
                        value={inputValue.password}
                    />
                </div>
                <button
                    className="w-full h-10 sm:h-12 bg-[#f0411d] rounded-sm mb-4 font-semibold text-white hover:bg-[#f0411d]/80 transition-colors duration-200"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
        </AuthLayout>
    );
}

export default Login;
