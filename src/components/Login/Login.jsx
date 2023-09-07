import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../server";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Successful!");
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const passwordType = () => {
    if (visible) return "text";
    return "password";
  };

  return (
    <div className="min-h-screen  bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-100 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={passwordType()}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block appearance-none w-full  border border-gray-300 rounded-md shadow-sm placeholder-gray-100 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={22}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={22}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className="normalFlex justify-between mt-4">
                <div className="normalFlex">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn-full group relative">
                Login
              </button>
            </div>
            <div className="normalFlex w-full">
              <h4>Not have any account?</h4>
              <Link to="/sign-up" className="text-orange-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
