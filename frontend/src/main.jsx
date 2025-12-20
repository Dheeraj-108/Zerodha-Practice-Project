import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

import Home from "./landing/components/home/Home.jsx";
import About from "./landing/components/about/About.jsx";
import Pricing from "./landing/components/pricing/Pricing.jsx";
import Product from "./landing/components/product/Product.jsx";
import Support from "./landing/components/support/Support.jsx";
import Login from "./landing/components/verification/Login.jsx";
import Signup from "./landing/components/verification/Signup.jsx";

import Navbar from "./landing/common/Navbar.jsx";
import Footer from "./landing/common/Footer.jsx";
import NotFound from "./landing/common/NotFound.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <CookiesProvider>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </AuthProvider>
        </CookiesProvider>
    </BrowserRouter>
);
