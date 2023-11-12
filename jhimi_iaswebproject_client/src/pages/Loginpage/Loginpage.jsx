import { useState } from "react";
import Lottie from "lottie-react";
import paperplane from "../../../public/plane.json";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plane, setPlane] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  console.log(password.length);

  const handleLogin = () => {
    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    setErrorMessage("");

    console.log("Email:", email);
    console.log("Password:", password);

    // Check if the provided credentials are for the admin
    if (email.toLowerCase() === "admin@gmail.com" && password === "admin") {
      setPlane(true);
      setTimeout(() => {
        setPlane(false);

        // Set admin-login to true in localStorage
        localStorage.setItem("admin-login", "true");
        if (localStorage.getItem("user-login") === "true") {
          localStorage.removeItem("user-login");
        } else {
          console.log("Normal user login logic goes here");
        }
        navigate("/");
      }, 3000);
    } else {
      setErrorMessage("Incorrect email or password.");
    }
  };

  const handleUserLogin = () => {
    // Check if admin-login is present in localStorage
    if (localStorage.getItem("admin-login") === "true") {
      
      localStorage.removeItem("admin-login");
    } else {
      console.log("Normal user login logic goes here");
    }
    // Add user-login
    localStorage.setItem("user-login", "true");
    setPlane(true);
    setTimeout(() => {
      setPlane(false);
      navigate("/");
    }, 3000);
    console.log("Logged in as a user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md border w-full p-6 space-y-6 bg-white rounded-md">
        <div className="w-full h-[4px] LinkTiems"></div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Login to entry</h2>
          <small className=" text-gray-400 font-thin">{"for admin only (email: admin@gmail.com, pass: admin)"}</small>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />

            {password.length > 0 && (
              <div
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute text-gray-500 cursor-pointer text-xl top-9 right-3"
              >
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            )}
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full mb-6 p-2 LinkTiems text-white rounded-md text-xl"
            >
              Login
            </button>
            <div className="w-full h-[1px] LinkTiems"></div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleUserLogin}
                className="mx-auto mt-6 py-2 px-4 border-orange-300 text-gray-500 font-semibold border-2 rounded-md"
              >
                Login as a user
              </button>
            </div>

            {plane && (
              <div className="absolute top-0">
                <Lottie animationData={paperplane} />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
