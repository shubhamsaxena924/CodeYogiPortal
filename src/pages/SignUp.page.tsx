import React, { ChangeEvent, FocusEvent, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import * as yup from "yup";
import CheckBox from "../components/CheckBox";
import ToggleSwitch from "../components/ToggleSwitch";

interface Props {}

const SignUpPage: React.FC<Props> = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    isAgree: false,
  });
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });
  enum possibleKeys {
    username = "username",
    email = "email",
    password = "password",
    isAgree = "isAgree",
  }
  console.log(signUpData);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const signUpDataValidator = yup.object().shape({
    username: yup.string().required().min(5),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    isAgree: yup.boolean().isTrue(),
  });
  console.log(signUpDataValidator.isValidSync(signUpData));
  const getError = (key: "email" | "password" | "username") => {
    if (touched[key] && !signUpData[key]) {
      return "This is a required field!";
    }
  };
  return (
    <div className="flex flex-col justify-center max-w-md mx-auto">
      <div className="mx-5">
        <h1 className="text-3xl lg:text-4xl">
          Get started by creating an account
        </h1>
        <p className="mt-2 mb-6 md:mb-8">
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
        className="flex flex-col py-4 mx-5 space-y-10 md:space-y-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (!signUpDataValidator.isValidSync(signUpData)) {
            window.alert("Form submission rejected!!");
            return;
          }
          window.alert("Account Created!!");
        }}
      >
        <InputField
          type="text"
          placeholder="Username"
          id="username"
          name={possibleKeys.username}
          required
          autoComplete="username"
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("username")}
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
          required
          id="email"
          name={possibleKeys.email}
          autoComplete="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("email")}
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
          name={possibleKeys.password}
          required
          autoComplete="new-password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("password")}
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
        <div className="flex justify-start">
          <CheckBox
            id="isAgree"
            name={possibleKeys.isAgree}
            label={
              <>
                I agree to the{" "}
                <Link to="#" className="text-primary">
                  terms and conditions
                </Link>
              </>
            }
            required
            checked={signUpData.isAgree}
            onChange={() => {
              setSignUpData((obj) => ({ ...obj, isAgree: !obj.isAgree }));
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <ToggleSwitch
            title="Show Password"
            toggleHandler={{ isOn: showPassword, setSwitch: setShowPassword }}
          />
          <Button
            buttonText="Get Started!"
            type="submit"
            disabled={
              getError("email") || getError("password") || getError("username")
                ? true
                : false
            }
          />
        </div>
        <p className="pt-8 text-sm text-center">
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
