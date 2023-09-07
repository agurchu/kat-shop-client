import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";

import { toast } from "react-toastify";
import { server } from "../../server";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("fullName", fullName);
    newForm.append("email", email);
    newForm.append("password", password);
    try {
      const response = await axios.post(
        `${server}/user/create-user`,
        newForm,
        config
      );
      toast.success(response.data.message);
      setFullName("");
      setEmail("");
      setPassword("");
      setAvatar();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const passwordType = () => {
    if (visible) return "text";
    return "password";
  };

  return (
    <div className="min-h-screen  bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="fullName"
                  autoComplete="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-100 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
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
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button type="submit" className="btn-full group relative">
                Sign Up
              </button>
            </div>
            <div className="normalFlex w-full">
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-orange-600 pl-2">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
