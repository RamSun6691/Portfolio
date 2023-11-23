import React from "react";
import "./Herosection.css";
import Typewriter from "typewriter-effect";
import RambabuImg from "../../assets/Rambabuimg.jpeg";
import HeroBganimation from "../HeroBgAnimation/HeroBganimation";
import { Bio } from "../../data/Constants";
const HeroSection = () => {
  return (
    <div id="about">
      <div className="HeroContainer">
        <div className="HeroBg">
          <HeroBganimation />
        </div>
        <div className="Heroinnercontainer">
          <div className="Heroleftcontainer">
            <div className="title">
              Hi, I am <br /> {Bio.name}
            </div>
            <div className="textloop">
              I am a
              <span className="Span">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sunt et, aliquid quasi tempore sed molestiae iste
              fuga. Modi, excepturi odio ut ducimus sunt et distinctio hic
              numquam? Doloremque, quasi?
            </div>
            <div  className="resumeButton">
              <a  href={Bio.resume} target="display" >Check Resume </a>
            </div>
          </div>
          <div className="Herorightcontainer">
            <img className="Img" src={RambabuImg} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
