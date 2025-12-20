import { Link } from "react-router";

function AuthLayout({ children, title, footer, imageSrc = "./kite-logo.png" }) {
    return (
        <div className="auth-page w-full min-h-screen flex items-center justify-center text-center px-4 py-8 sm:py-12 md:py-20">
            <div className="auth-box w-full max-w-[350px] sm:max-w-md shadow-lg border border-gray-200 rounded-md p-6 sm:p-8">
                <div className="image-kite flex items-center justify-center mb-4">
                    <img src={imageSrc} alt="Logo" className="w-20 sm:w-24" />
                </div>
                <h1 className="text-center text-xl sm:text-2xl font-semibold text-gray-600 mb-6">
                    {title}
                </h1>

                {children}

                {footer && (
                    <p className="text-sm text-gray-500 mt-4">{footer}</p>
                )}
            </div>
        </div>
    );
}

export default AuthLayout;
