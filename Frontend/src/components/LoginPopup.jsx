import React from "react";

const LoginDialog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="w-4/6 h-4/6 bg-white rounded-3xl p-8 shadow-md flex flex-col justify-center">
        <input
          type="text"
          placeholder="Enter Email"
          className="my-3 p-4 bg-white border rounded-lg border-gray-300 text-center text-lg font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-3 p-4 bg-white border rounded-lg border-gray-300 text-center text-lg font-semibold"
        />
        <button className="my-4 p-4 bg-yellow-400 text-white rounded-lg text-lg font-semibold" onClick={onClose}>
          Login
        </button>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
