import { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AuthForm = ({ type }: { type: "signin" | "signup" }) => {
  const Navigate = useNavigate();
  const [credentials, setCredientials] = useState({
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { password, confirmPassword } = credentials;

  const successToast = (message: string) => {
    toast.success(message, {
      duration: 3000, // in milliseconds
    });
  };

  const errorToast = (message: string) => {
    toast.error(message, {
      duration: 3000, // in milliseconds
    });
  };

  const handleChange = (e: any) => {
    setCredientials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <BackgroundGradient
      className="flex flex-col bg-[#1A1C22] w-full rounded-xl p-6"
      containerClassName="w-[80%] md:w-[50%] lg:w-[30%] mt-10"
    >
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            if (type === "signup") {
              if (password.trim() !== confirmPassword.trim()) {
                errorToast("Passwords do not match");
                return;
              }
              const { data } = await axios.post(
                `${VITE_BACKEND_URL}/signup`,
                {
                  ...credentials, // assuming you're using credentials as state
                },
                { withCredentials: true }
              );
              const { success, message } = data;
              if (success) {
                successToast(message);
                setTimeout(() => {
                  Navigate("/");
                }, 1000);
              } else {
                errorToast(message);
              }
            } else if (type === "signin") {
              const { data } = await axios.post(
                `${VITE_BACKEND_URL}/signin`,
                {
                  ...credentials,
                },
                { withCredentials: true }
              );

              const { success, message } = data;
              if (success) {
                successToast(message);
                setTimeout(() => {
                  Navigate("/");
                }, 1000);
              } else {
                errorToast(message);
              }
            }
          } catch (error) {
            console.error("Error during form submission:", error);
            errorToast("An error occurred. Please try again.");
          }
        }}
      >
        <div className="text-center text-3xl text-slate-300 font-bold">
          {type === "signin" ? "Signin" : "Signup"}
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {type === "signup" && (
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                User ID
              </label>
              <input
                name="userId"
                type="text"
                className="w-full p-2 bg-[#282C35] border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your User ID"
                value={credentials.userId}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="w-full p-2 bg-[#282C35] border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between mt-4 gap-4">
            <div className="flex-1 relative">
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>
              <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type={showPassword.password ? "text" : "password"}
                className="w-full p-2 bg-[#282C35] border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
              {showPassword.password ? (
                <i
                  className="fa-solid fa-eye text-slate-300 text-lg absolute top-10 right-2 cursor-pointer"
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: false })
                  }
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash text-slate-300 text-lg absolute top-10 right-2 cursor-pointer"
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: true })
                  }
                ></i>
              )}
            </div>

            {type === "signup" && (
              <div className="flex-1 relative">
                <label className="block text-sm text-slate-300 mb-2">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  onChange={handleChange}
                  type={showPassword.confirmPassword ? "text" : "password"}
                  className="w-full p-2 bg-[#282C35] border border-slate-600 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500"
                  placeholder="Confirm your password"
                />
                {showPassword.confirmPassword ? (
                  <i
                    className="fa-solid fa-eye text-slate-300 text-lg absolute top-10 right-2 cursor-pointer"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: false,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash text-slate-300 text-lg absolute top-10 right-2 cursor-pointer"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: true,
                      })
                    }
                  ></i>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-slate-400 font-semibold text-lg">
              {type === "signin"
                ? "Dont have an account?"
                : "Already have an account?"}
            </span>
            <Link
              to={type === "signin" ? "/auth/signup" : "/auth/signin"}
              className="font-bold text-lg text-[#AB8BFF] ml-3"
            >
              {type === "signin" ? "Signup" : "Signin"}
            </Link>
          </div>

          <button className="p-[3px] relative w-[60%] mx-auto mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              {type === "signin" ? "Signin" : "Signup"}
            </div>
          </button>
        </div>
      </form>
    </BackgroundGradient>
  );
};

export default AuthForm;
