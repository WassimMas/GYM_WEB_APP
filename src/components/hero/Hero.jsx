import React from "react";
import "./Hero.css";
import Header from "../../components/header/Header";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body </span>
          </div>
          <div className="text">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={heroImage} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          src={heroImageBack}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
