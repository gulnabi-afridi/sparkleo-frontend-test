import { useState } from "react";
import * as Icons from "../svg/Icons";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  // states
  const [showPassword, setShowPassword] = useState(false);

  // states ends here

  // functions  ----->
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* 1st col  */}
      <div className="w-full bg-white-1 lg:px-0 px-4 py-6">
        <div className="w-full h-full flex flex-col justify-between mx-auto max-w-[410px]">
          {/* back btn --> */}
          <button className="flex justify-start items-center">
            <Icons.Back className="w-[24px] h-[24px]" />
            <p className="text-[14px] font-normal text-blue-2 font-dm-sans">
              Back
            </p>
          </button>
          {/* login form --> */}
          <form className="w-full flex gap-5 csm:gap-8 flex-col">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="text-[36px] text-brnad-1 font-dm-sans font-semibold">
                Sign In
              </h2>
              <p className="text-[16px] font-normal text-blue-2 font-dm-sans">
                Enter your email and password to sign in!
              </p>
            </div>
            <div className="w-full justify-center items-center  grid grid-cols-[1fr,50px,1fr]">
              <div className="w-full h-[1px] bg-blue-3"></div>
              <div className="w-full flex justify-center items-center">
                <p className="text-[14px] text-blue-2 font-medium font-dm-sans">
                  Or
                </p>
              </div>
              <div className="w-full h-[1px] bg-blue-3"></div>
            </div>
            {/* email input --> */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[14px] flex text-blue-1 font-medium font-dm-sans"
              >
                Email <span className="text-brnad-1">*</span>{" "}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="mail@simmmple.com"
                className="w-full px-3 focus:outline-brnad-1 text-[14px] font-dm-sans text-blue-1 placeholder:text-blue-2 font-normal min-h-[50px] rounded-[16px] border-[1px] border-blue-3 bg-transparent"
              />
            </div>
            {/* password input  */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-[14px] flex text-blue-1 font-medium font-dm-sans"
              >
                Password <span className="text-brnad-1">*</span>{" "}
              </label>
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  minLength={8}
                  required
                  placeholder="Min. 8 characters"
                  className="w-full px-3 focus:outline-brnad-1 text-[14px] font-dm-sans text-blue-1 placeholder:text-blue-2 font-normal min-h-[50px] rounded-[16px] border-[1px] border-blue-3 bg-transparent"
                />
                <button
                  onClick={togglePassword}
                  type="button"
                  className="text-[14px] text-blue-2 absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="text-[18px] text-blue-2" />
                  ) : (
                    <FiEye className="text-[18px] text-blue-2" />
                  )}
                </button>
              </div>
            </div>
            {/* forget password --->  */}
            <div className="w-full flex justify-between items-center">
              <div className=""></div>
            </div>
            {/* button --> */}
            <button
              type="submit"
              className="w-full hover:opacity-80 active:translate-y-[2px] transition-all duration-300 bg-brnad-1 min-h-[54px] rounded-[16px] text-[14px] font-semibold font-dm-sans text-white-1"
            >
              Sign In
            </button>
            {/* create a new account ---> */}
            <div className="w-full flex gap-1 justify-start items-center">
              <p className="text-[14px] font-normal text-[#2B3674] font-dm-sans">
                Not registered yet?
              </p>
              <Link
                href=""
                className="text-[14px] hover:opacity-80 transition-all duration-300 font-semibold text-brnad-1 font-dm-sans"
              >
                Create an Account
              </Link>
            </div>
          </form>
          <p className="text-blue-2 lg:block hidden text-[14px] text-center font-medium font-dm-sans">
            © 2023 Spark Drive. All Rights Reserved.{" "}
          </p>
          <p className="lg:hidden block"></p>
        </div>
      </div>
      {/* 2nd col  */}
      <div className="w-full hidden lg:flex py-3 lg:py-6 bg-brnad-1 lg:px-0 px-4 rounded-bl-[0px] lg:rounded-bl-[200px]">
        <div className="w-full h-full max-w-[410px] flex flex-col justify-between mx-auto">
          <div></div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-start items-center gap-6">
              <Icons.Travel className="w-[86px] h-[87px]" />
              <button className="max-w-[320px] w-full min-h-[85px] rounded-[18px] font-normal text-white-1 border-[3px] font-montserrat text-[50px] border-white-1">
                Spark
              </button>
            </div>
            <div className="w-full gap-1 border-opacity-20 max-w-[470px] py-6 border-[2px] border-white-1 rounded-[26px] hidden lg:flex flex-col justify-center items-center">
              <p className="text-[17px] font-montserrat text-white-1">
                Learn more about Air Drive on
              </p>
              <p className="text-[29px] text-white-1 font-medium font-montserrat">
                Spark.pl
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-6">
            {signNavigations.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="text-[14px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-white-1 hover:after:w-full after:duration-200 font-medium text-white-1 font-dm-sans"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const signNavigations = [
  {
    name: "License",
    path: "#",
  },
  {
    name: "Terms of Use",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
];
