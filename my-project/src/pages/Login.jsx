import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import logo from "../assets/zerodhaLogo.png"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  const navigate = useNavigate();
};
  return (
    <>
      <div className="flex justify-center items-center flex-col min-h-screen mt-4">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mb-4">
          <form className="space-y-6" action="#">
            <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="" className="w-14 h-14"/>  
            <h5 className="text-xl font-medium text-gray-900 mt-8">Login to Kite
            </h5>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                User Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0  top-7 flex items-center px-2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex items-start">
              <a
                href="#"
                className="ms-auto text-sm text-orange-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => navigate(`/otp`)}
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Not registered?{" "}
              <a href="#" className="text-orange-600 hover:underline">
                Create account
              </a>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center items-center align-middle mt-8">
            <BiLogoPlayStore className="text-2xl mr-4" />
            <FaApple className="text-2xl" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-400 mt-4">ZERODHA</p>
            <p className="text-sm text-gray-400 mt-4">
              Don't have an account? Sign Up Now
            </p>
            <p className="text-xs text-gray-400 my-4 w-1/3 text-center ">
              Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.
              INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha
              Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart
              Online Dispute Resolution | SEBI SCORES
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
