import React from "react";

const OTP = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-4">
        <div className="mx-auto flex flex-col space-y-6">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-xl">
              <img
                className="w-20 h-20 bg-red-200 rounded-full text-lg font-thin"
                alt="user image"
              />
              <p className="text-2xl font-semibold py-3">CE4528</p>
            </div>
            
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-row items-center justify-center w-full">
              <div className="max-w-xs">
                <div className="h-14">
                  <input
                    className="otp-input w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-lg border border-gray-200 text-sm bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    maxLength={6}
                    placeholder="******"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 font-sans text-justify px-3">
            Open the Kite mobile app on your phone to generate the 2FA App Code. <span className="text-blue-600">Need help?</span> 
            </p>

            <div className="flex flex-col space-y-3 w-full">
              <div className="flex justify-center">
                {" "}
                {/* Add this div for centering */}
                <div className="py-4">
                  <button className="w-full outline-none py-3 px-16 bg-orange-500 border-none text-white text-lg shadow-sm">
                    continue
                  </button>
                </div>
              </div>

              <div className="flex flex-row pb-5 items-center justify-center text-center text-xs font-medium space-x-1 text-gray-500">
                <p>Problem with Mobile App Code?</p>{" "}
                <a
                  className="flex flex-row items-center text-orange-600"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
