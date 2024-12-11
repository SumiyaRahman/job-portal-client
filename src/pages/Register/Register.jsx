import Lottie from "lottie-react";
import React from "react";
import registerLottie from '../../assets/Lottie/register.json'

const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center">
        <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
          <h1 className="text-5xl font-bold text-[#08322f]">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <button className="btn bg-[#ffdd00] text-[#08322f] font-bold text-xl ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
