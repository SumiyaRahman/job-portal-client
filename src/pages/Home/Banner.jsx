import React from "react";
import {motion} from "framer-motion"
import img1 from "../../assets/Images/bImg1.jpg"
import img2 from "../../assets/Images/bImg2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
          src={img1}
          animate={{y: [50, 70, 50]}}
          transition={{duration: 5, repeat: Infinity}}
          className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-[#ffdd00] shadow-2xl"
        />
        <motion.img
          src={img2}
          animate={{x: [100, 120, 100]}}
          transition={{duration: 5, delay: 5, repeat: Infinity}}
          className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-[#ffdd00] shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Job For You!</h1>
          <motion.h1 className="text-5xl font-bold">Latest Job For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
