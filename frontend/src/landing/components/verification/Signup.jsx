import { Link } from "react-router";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../../context/AuthContext.jsx";
import AuthLayout from "./AuthLayout.jsx";

function Signup() {
    const { signup } = useContext(AuthContext);

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(
            inputValue.username,
            inputValue.email,
            inputValue.password
        );

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
            username: "",
            confirmPassword: "", // Reset confirmPassword too
        });
    };

    const footerLink = (
        <>
            Already have an account?{" "}
            <Link to="/login" className="text-[#f0411d] hover:underline">
                Login
            </Link>
        </>
    );

    return (
        <AuthLayout title="Register To Kite" footer={footerLink}>
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
                        type="text"
                        name="username"
                        placeholder="Enter Your Username"
                        className="w-full h-10 sm:h-12 border border-gray-300 rounded-sm text-gray-500 px-4 focus:outline-none focus:border-[#f0411d] focus:ring-1 focus:ring-[#f0411d]"
                        onChange={handleChange}
                        value={inputValue.username}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Your Password"
                        className="w-full h-10 sm:h-12 border border-gray-300 rounded-sm text-gray-500 px-4 focus:outline-none focus:border-[#f0411d] focus:ring-1 focus:ring-[#f0411d]"
                        onChange={handleChange}
                        value={inputValue.password}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Your Password"
                        className="w-full h-10 sm:h-12 border border-gray-300 rounded-sm text-gray-500 px-4 focus:outline-none focus:border-[#f0411d] focus:ring-1 focus:ring-[#f0411d]"
                        onChange={handleChange}
                        value={inputValue.confirmPassword}
                    />
                </div>
                <button
                    className="w-full h-10 sm:h-12 bg-[#f0411d] rounded-sm mb-4 font-semibold text-white hover:bg-[#f0411d]/80 transition-colors duration-200"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
        </AuthLayout>
    );
}

export default Signup;
