import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginLottie from "../../assets/Lottie/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault(); // Fix the typo here
  
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    signInUser(email, password)
      .then((result) => {
        console.log("Sign in user:", result.user);
      })
      .catch((error) => {
        console.log("Error during sign-in:", error);
      });
  };
  
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center">
        <div className="text-center lg:text-left w-1/3">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold text-[#08322f] text-center">
              Sign In
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ffdd00] text-[#08322f] font-bold text-xl ">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
