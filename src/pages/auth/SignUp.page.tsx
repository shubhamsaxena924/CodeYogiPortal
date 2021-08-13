import React, { useEffect, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import * as yup from "yup";
import CheckBox from "../../components/checkbox/CheckBox";
import ToggleSwitch from "../../components/toggleSwitch/ToggleSwitch";
import { useFormik } from "formik";
import { ImSpinner9 } from "react-icons/im";

interface Props {}

const SignUpPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  enum possibleKeys {
    username = "username",
    email = "email",
    password = "password",
    isAgree = "isAgree",
  }
  //Manual Way
  // const [signUpData, setSignUpData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   isAgree: false,
  // });
  // const [touched, setTouched] = useState({
  //   username: false,
  //   email: false,
  //   password: false,
  // });
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  // };
  // const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
  //   setTouched({ ...touched, [event.target.name]: true });
  // };
  // const signUpDataValidator = yup.object().shape({
  //   username: yup.string().required().min(5),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(8).required(),
  //   isAgree: yup.boolean().isTrue(),
  // });
  // console.log(signUpDataValidator.isValidSync(signUpData));
  // const getError = (key: "email" | "password" | "username") => {
  //   if (touched[key] && !signUpData[key]) {
  //     return "This is a required field!";
  //   }
  // };

  //Formik way
  const {
    getFieldProps,
    errors,
    touched,
    isValid,
    values,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      isAgree: false,
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      username: yup.string().min(5).required(),
      isAgree: yup
        .boolean()
        .isTrue("you must agree to the terms and conditions to proceed"),
    }),
    onSubmit: (data) => {
      console.log("loading...", data);
      setTimeout(() => {
        console.log("Account created...");
        history.push("/dashboard");
      }, 2000);
    },
  });

  useEffect(() => console.log(values, "isValid? " + isValid, "\n", errors), [
    values,
    isValid,
    errors,
  ]);

  // useMemo
  const toggleHandlerMemo = useMemo(
    () => ({ isOn: showPassword, setSwitch: setShowPassword }),
    [showPassword]
  );

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
            className="underline text-auth-primary hover:no-underline"
          >
            Log in
          </Link>
        </p>
      </div>
      <form
        className="flex flex-col py-4 mx-5 space-y-10 md:space-y-8"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Username"
          id="username"
          required
          {...getFieldProps(possibleKeys.username)}
          autoComplete="username"
          error={errors.username}
          touched={touched.username}
        >
          <svg
            viewBox="0 0 24 24"
            fill="rgba(27, 85, 226, 0.23921568627450981)"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mb-4 mr-2 stroke-current stroke-2 text-auth-primary"
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
          {...getFieldProps(possibleKeys.email)}
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
          {...getFieldProps(possibleKeys.password)}
          required
          autoComplete="new-password"
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
        <div className="flex justify-start">
          <CheckBox
            id="isAgree"
            // name={possibleKeys.isAgree}
            {...getFieldProps(possibleKeys.isAgree)}
            label={
              <>
                I agree to the{" "}
                <Link to="#" className="text-auth-primary">
                  terms and conditions
                </Link>
              </>
            }
            required
            // checked={signUpData.isAgree}
            // onChange={() => {
            //   setSignUpData((obj) => ({ ...obj, isAgree: !obj.isAgree }));
            // }}
          />
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <ToggleSwitch
            title="Show Password"
            toggleHandler={toggleHandlerMemo}
          />
          <Button
            type="submit"
            disabled={!isValid}
            buttonText="Get Started!"
            Icon={ImSpinner9}
            iconStylingClasses={
              (isSubmitting ? "block " : "hidden ") + " animate-spin mr-2"
            }
          />
        </div>
        <p className="pt-8 text-sm text-center">
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

export default React.memo(SignUpPage);
