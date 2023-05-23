import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { CiBullhorn, CiCircleCheck } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { TiInputCheckedOutline, TiInfo } from "react-icons/ti";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import backgroundImage from "../assets/page-turner.svg";
import { Helmet } from "react-helmet";

function Register() {
  const { createUser, auth, user } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  //   const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6)
      setError("Password must be at least 6 character long.");
    else if (!/.*[A-Z].*/.test(passwordInput)) {
      setError("Must have one uppercase.");
    } else setError("");
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    )
      setEmailError("Please enter a valid email");
    else setEmailError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Password:", photoURL);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });

        navigate(location?.state?.pathname || "/");
      })
      .catch((error) => alert(error));
    // TODO: Add logic to submit the form data
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className=" flex flex-col-reverse  md:flex-row-reverse justify-center items-center h-1/2 bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Helmet>
        <title>Joy Full Play Things | Register</title>
      </Helmet>
      <div>
        <img
          src="https://freesvg.org/img/senator-access.png"
          alt=""
          className="h-1/3 p-16"
        />
      </div>
      <form
        className="w-full h-2/3 max-w-lg mt-10  md:ml-20 card shadow-lg bg-base-200 px-12 pb-10 pt-6 text-black"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-5xl font-bold mb-4 text-secondary font-font1">
          Register
        </p>
        <div className="mb-4">
          <label className="block text-secondary font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-secondary font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 mr-5 ${
              emailError ? "border-b-red-500" : "border-b-green-500"
            }`}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
          />
          {emailError && (
            <p className="flex items-center gap-2 text-red-500 text-sm">
              <TiInfo className="text-xl"></TiInfo>
              {emailError}
            </p>
          )}
          <button
            className="absolute right-0 top-7 mt-3 mr-3"
            type="button"
            onClick={handlePasswordVisibility}
          >
            {!emailError && (
              <TiInputCheckedOutline
                className="text-green-600 font-bolder"
                size={25}
              ></TiInputCheckedOutline>
            )}
          </button>
        </div>

        <div className="mb-4 relative">
          <label
            className="block text-secondary font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 ${
              error ? "border-b-red-500" : "border-b-green-500"
            }`}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
          />
          {error && (
            <p className="flex items-center gap-2 text-red-500 text-sm">
              <CiBullhorn></CiBullhorn>
              {error}
            </p>
          )}
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

        <div className="mb-4 relative">
          <label
            className="block text-secondary font-bold mb-2"
            htmlFor="password"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            id="photoURL"
            name="photoURL"
            type="url"
            placeholder="photo URL"
            value={photoURL}
            onChange={(event) => setPhotoURL(event.target.value)}
            required
          />
        </div>
        {!error && !emailError && (
          <div className="flex items-center justify-center">
            <AwesomeButton size="medium"> Register</AwesomeButton>
          </div>
        )}
        {(error || emailError) && (
          <div className="flex items-center justify-center">
            <button
              className="bg-primary px-5 py-3 rounded-xl text-white"
              disabled
            >
              Register
            </button>
          </div>
        )}
        <p className="text-secondary">
          Have an account{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>{" "}
          Now...
        </p>
      </form>
    </div>
  );
}

export default Register;
