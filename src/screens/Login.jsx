import  {useState} from "react";
import ComponentWrapper from "../components/shared/ComponentWrapper";
import * as Icons from "../svg/Icons";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
    <ComponentWrapper>
      <div className="w-full min-h-screen grid grid-cols-2">
        {/* 1st col  */}
        <div className="w-full bg-white-1 py-6">
          <div className="w-full h-full flex flex-col justify-between mx-auto max-w-[500px]">
            {/* back btn --> */}
            <div className="flex justify-start items-center">
              <Icons.Back className="w-[24px] h-[24px]" />
              <p className="text-[14px] font-normal text-blue-2 font-dm-sans">
                Back
              </p>
            </div>
            {/* login form --> */}
            <form className="w-full flex gap-8 flex-col">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="text-[36px] text-brnad-1 font-dm-sans font-semibold">
                Sign In
              </h2>
              <p className="text-[16px] font-normal text-blue-2 font-dm-sans">
                Enter your email and password to sign in!
              </p>
              </div>
              <div className="w-full my-4 justify-center items-center  grid grid-cols-[1fr,50px,1fr]">
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
                  type="text"
                  id="email"
                  placeholder="mail@simmmple.com"
                  className="w-full px-3 focus:outline-brnad-1 text-[14px] font-dm-sans text-blue-1 placeholder:text-blue-2 font-normal min-h-[50px] rounded-[16px] border-[1px] border-blue-3 bg-transparent"
                />
              </div>
              {/* password input  */}
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[14px] flex text-blue-1 font-medium font-dm-sans"
                >
                  Email <span className="text-brnad-1">*</span>{" "}
                </label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="email"
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
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              {/* forget password --->  */}
              <div className="w-full flex justify-between items-center">
                <div className=""></div>
              </div>
              {/* button --> */}
              <button className="w-full bg-brnad-1 min-h-[54px] rounded-[16px] text-[14px] font-semibold font-dm-sans text-white-1" >Sign In</button>
              {/* create a new account ---> */}
              <div className='w-full flex gap-1 justify-start items-center'>
                <p className="text-[14px] font-normal text-[#2B3674] font-dm-sans">Not registered yet?</p>
                <a href="" className="text-[14px] font-semibold text-brnad-1 font-dm-sans"> Create an Account</a>
              </div>
            </form>
            <p className="text-blue-2 text-[14px] text-center font-medium font-dm-sans">© 2023 Spark Drive. All Rights Reserved. </p>
          </div>
        </div>
        {/* 2nd col  */}
        <div className="w-full h-full bg-brnad-1 rounded-bl-[200px]">
          <div className="w-full max-w-[500px] flex flex-col justify-between mx-auto">
            <div></div>
            <div className="flex flex-col gap-8">
              <div className="flex justify-start items-center gap-3">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Login;
