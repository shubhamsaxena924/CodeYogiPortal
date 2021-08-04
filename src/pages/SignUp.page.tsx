import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

interface Props {}

const SignUpPage: React.FC<Props> = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    isAgree: false,
  });
  enum possibleKeys {
    username = "username",
    email = "email",
    password = "password",
    isAgree = "isAgree",
  }
  console.log(signUpData);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center h-full max-w-md p-5 mx-auto md:p-0">
      <div className="mx-5">
        <h1 className="text-3xl lg:text-4xl">
          Get started by creating an account
        </h1>
        <p className="mt-2 mb-6 md:mb-10">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-primary hover:no-underline"
          >
            Log in
          </Link>
        </p>
      </div>
      <form
        className="flex flex-col py-4 mx-5 space-y-6 md:space-y-8"
        onSubmit={() => console.log()}
      >
        <InputField
          type="text"
          placeholder="Username"
          id="username"
          autoComplete="remove"
          valueHandler={{
            value: signUpData.username,
            valueOf: possibleKeys.username,
            setValue: setSignUpData,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-primary"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </InputField>
        <InputField
          type="text"
          placeholder="Email ID"
          id="email"
          autoComplete="email"
          valueHandler={{
            value: signUpData.email,
            valueOf: possibleKeys.email,
            setValue: setSignUpData,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-primary"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
          </svg>
        </InputField>
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          autoComplete="new-password"
          valueHandler={{
            value: signUpData.password,
            valueOf: possibleKeys.password,
            setValue: setSignUpData,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-primary"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </InputField>
        <div className="flex flex-row-reverse items-center justify-end">
          <label htmlFor="isAgree" className="font-light text-gray-400">
            I agree to the{" "}
            <Link to="#" className="text-primary">
              terms and conditions
            </Link>
          </label>
          <input
            type="checkbox"
            id="isAgree"
            name="isAgree"
            checked={signUpData.isAgree}
            onChange={(event) =>
              setSignUpData((obj) => ({ ...obj, isAgree: !signUpData.isAgree }))
            }
            className="w-3 h-3 mr-4 bg-gray-200 border-gray-400 rounded cursor-pointer text-primary focus:ring-primary"
          />
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex flex-col items-center sm:flex-row">
            <p className="">Show Password</p>
            <label className="sr-only" htmlFor="showPassword"></label>
            <Switch
              type="button"
              checked={showPassword}
              onChange={() => setShowPassword((value: boolean) => !value)}
              className={`${
                showPassword ? "bg-primary" : "bg-gray-200"
              } relative sm:ml-4 inline-flex flex-shrink-0 items-center shadow-lg hover:shadow-none h-5 rounded-full w-9 transform duration-1000`}
            >
              <span
                className={`${
                  showPassword
                    ? "translate-x-5 bg-white"
                    : "translate-x-1 bg-primary"
                } inline-block w-3 h-3 transform duration-500 shadow-sm rounded-full`}
              />
            </Switch>
          </div>
          <Button buttonText="Get Started!" type="submit" />
        </div>
        <p className="pt-12 text-sm text-center">
          © 2021 All Rights Reserved.{" "}
          <Link to="#" className="text-primary">
            Cookie Preferences
          </Link>
          ,{" "}
          <Link to="#" className="text-primary">
            Privacy
          </Link>
          , and{" "}
          <Link to="#" className="text-primary">
            Terms
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default React.memo(SignUpPage);
