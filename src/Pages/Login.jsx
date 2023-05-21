import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { TiInputCheckedOutline, TiInfo } from "react-icons/ti";
import { TiInfo } from "react-icons/ti";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import backgroundImage from "../assets/rainbow-vortex.svg";
function Login() {
  const [error, setError] = useState("");
  const { signInUser, auth } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);

    signInUser(email, password)
      .then((result) => {
        // setUser(result.user);
        console.log(result);
        setError("");
        navigate(location?.state?.pathname || "/");
      })
      .catch((err) =>
        setError(
          err.message
            .slice(22, err.message.length - 2)
            .split("-")
            .join(" ")
        )
      );
  };

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className="flex flex-col-reverse  md:flex-row-reverse justify-center items-center h-1/2 bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <img
          src="https://freesvg.org/img/senator-access.png"
          alt=""
          className="h-1/3 p-16"
        />
      </div>
      <form
        className="w-full h-2/3 max-w-lg mt-10 md:ml-20 card shadow-lg bg-base-200 px-12 pb-10 pt-6 text-black"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-3xl font-bold mb-4">Log In</p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button
            className="absolute right-0 top-7 mt-3 mr-4"
            type="button"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <AwesomeButton type="danger" size="medium">
            {" "}
            Sign In
          </AwesomeButton>
        </div>
        <p>
          Not have an account{" "}
          <Link
            to="/register"
            state={location.state}
            className="text-blue-500 underline"
          >
            Register
          </Link>{" "}
          now
        </p>
        {error && (
          <p className="flex gap-2 items-center mt-3 text-red-500  text-sm uppercase">
            <TiInfo className="text-xl"></TiInfo>
            {error}
          </p>
        )}
        <div className="flex mt-4">
          <button
            onClick={handleGoogleSingIn}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              <div className="flex items-center gap-2">
                <FaGoogle /> Login with google
              </div>
            </span>
          </button>
          <br />
          <button
            onClick={handleGithubSignIn}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              <div className="flex items-center gap-2">
                <FaGithub /> Login with github
              </div>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
