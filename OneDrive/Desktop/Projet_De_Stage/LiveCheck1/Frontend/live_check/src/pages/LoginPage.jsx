import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/antemetaLogo.png";

const LoginPage = () => {
  const navigate = useNavigate(null);

  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handlLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(login({ username: username, password: password }));
    navigate("verification");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Antemeta Logo" className="h-16" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Nom d'utilisateur
          </label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            placeholder="Enter votre nom"
            className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Mot de passe
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Enter votre mot de passe"
            className="w-full mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="check"
            className="mr-2 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="check" className="text-gray-700">
            Se souvenir de moi
          </label>
        </div>

        <button
          onClick={handlLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Se Connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
