import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import * as yup from "yup";
import CheckBox from "../components/CheckBox";
import ToggleSwitch from "../components/ToggleSwitch";

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    keepMeLoggedIn: false,
  });
  console.log(loginData);
  enum possibleKeys {
    email = "email",
    password = "password",
    keepMeLoggedIn = "keepMeLoggedIn",
  }
  const loginDataValidator = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });
  console.log(loginDataValidator.isValidSync(loginData));
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center h-full max-w-md p-5 mx-auto md:p-0 font-josefin">
      <div className="mx-5">
        <h1 className="text-3xl lg:text-4xl">
          Log In to{" "}
          <a
            className="font-semibold text-primary"
            href="https://codeyogi.io"
            target="_blank"
            rel="noreferrer"
          >
            CODEYOGI
          </a>
        </h1>
        <p className="mt-2 mb-6 md:mb-14">
          New Here?{" "}
          <Link
            to="/signup"
            className="underline text-primary hover:no-underline"
          >
            Create an account
          </Link>
        </p>
      </div>
      <form
        className="flex flex-col py-4 mx-5 space-y-6 md:space-y-12"
        onSubmit={(event) => {
          event.preventDefault();
          if (!loginDataValidator.isValidSync(loginData)) {
            window.alert("Form submission rejected!!");
            return;
          }
          window.alert("Logged in!!");
        }}
      >
        <InputField
          type="text"
          placeholder="Email ID"
          id="email"
          name={possibleKeys.email}
          required
          autoComplete="email"
          valueHandler={{
            value: loginData.email,
            setValue: setLoginData,
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
          autoComplete="current-password"
          name={possibleKeys.password}
          required
          valueHandler={{
            value: loginData.password,
            setValue: setLoginData,
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
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <ToggleSwitch
            title="Show Password"
            toggleHandler={{ isOn: showPassword, setSwitch: setShowPassword }}
          />
          <Button buttonText="Log In" type="submit" />
        </div>
        <CheckBox
          id="keepLogged"
          name={possibleKeys.keepMeLoggedIn}
          checked={loginData.keepMeLoggedIn}
          label="Keep me logged in"
          valueHandler={{
            value: loginData.keepMeLoggedIn,
            setValue: setLoginData,
          }}
        />
        <Link
          to="/pwrecovery"
          className="self-center mt-5 text-lg font-medium text-primary"
        >
          Forgot Password?
        </Link>
        <p className="text-sm text-center">
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

export default React.memo(LoginPage);
