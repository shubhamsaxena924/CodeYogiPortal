import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import * as yup from "yup";
import CheckBox from "../../components/checkbox/CheckBox";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import { useFormik } from "formik";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { meLoginAction } from "../../actions/auth.actions";

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Manual Way (Formik does this all on its own)
  // const [loginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  //   keepMeLoggedIn: false,
  // });

  // Handle Change
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setLoginData({ ...loginData, [event.target.name]: event.target.value });
  // };
  // Handle Blur
  // const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
  //   setTouched({ ...touched, [event.target.name]: true });
  // };
  // yup validator
  // const loginDataValidator = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().required().min(8),
  // });
  // console.log(loginDataValidator.isValidSync(loginData));
  // const getError = (key: "email" | "password") => {
  //   if (touched[key] && !loginData[key]) {
  //     return "This is a required field!";
  //   }
  // };

  enum possibleKeys {
    email = "email",
    password = "password",
    keepMeLoggedIn = "keepMeLoggedIn",
  }

  //formik way
  const {
    values,
    isValid,
    errors,
    getFieldProps,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log("loading...", data);
      // login(data).then((userObject) => {
      //   console.log(userObject);
      //   dispatch(meLoginAction(userObject));
      //   history.push("/dashboard");
      // });
      dispatch(meLoginAction(data));
    },
  });

  useEffect(
    () =>
      console.log(
        values,
        "isValid? " + isValid,
        "keepLoggedIn? " + keepLoggedIn,
        "\n",
        errors
      ),
    [values, isValid, keepLoggedIn, errors]
  );

  // useMemos
  const toggleHandlerMemo = useMemo(
    () => ({ isOn: showPassword, setSwitch: setShowPassword }),
    [showPassword]
  );
  const checkBoxMemo = useMemo(() => {
    return () => setKeepLoggedIn((value) => !value);
  }, []);

  return (
    <div className="flex flex-col justify-center w-full max-w-md mx-auto font-josefin">
      <div className="mx-5">
        <h1 className="text-3xl lg:text-4xl">
          Log In to{" "}
          <a
            className="font-semibold text-auth-primary"
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
            className="underline text-auth-primary hover:no-underline"
          >
            Create an account
          </Link>
        </p>
      </div>
      <form
        className="flex flex-col py-4 mx-5 space-y-10 md:space-y-12"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Email ID"
          id="email"
          {...getFieldProps(possibleKeys.email)}
          required
          autoComplete="email"
          error={errors.email}
          touched={touched.email}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-auth-primary"
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
          {...getFieldProps(possibleKeys.password)}
          required
          error={errors.password}
          touched={touched.password}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-auth-primary"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </InputField>
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <ToggleSwitch
            title="Show Password"
            toggleHandler={toggleHandlerMemo}
          />
          <Button
            type="submit"
            disabled={!isValid}
            buttonText="Login"
            Icon={ImSpinner9}
            iconStylingClasses={
              (isSubmitting ? "block " : "hidden ") + " animate-spin mr-2"
            }
          />
        </div>
        <div className="flex justify-center">
          <CheckBox
            id="keepLogged"
            name={possibleKeys.keepMeLoggedIn}
            checked={keepLoggedIn}
            label="Keep me logged in"
            onChange={checkBoxMemo}
          />
        </div>
        <Link
          to="/pwrecovery"
          className="self-center mt-5 text-lg font-medium text-auth-primary"
        >
          Forgot Password?
        </Link>
        <p className="text-sm text-center">
          © 2021 All Rights Reserved.{" "}
          <Link to="#" className="text-auth-primary">
            Cookie Preferences
          </Link>
          ,{" "}
          <Link to="#" className="text-auth-primary">
            Privacy
          </Link>
          , and{" "}
          <Link to="#" className="text-auth-primary">
            Terms
          </Link>
          . Recreated by Shubham Saxena.
        </p>
      </form>
    </div>
  );
};

export default React.memo(LoginPage);
