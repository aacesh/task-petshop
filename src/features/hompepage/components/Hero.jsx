import leftArrow from "../assets/leftArrow.svg";
import right from "../assets/right.svg";
const Hero = () => {
  return (
    <div className="hero w-full">
      <div className="main-container">
        <div className="content">
          <span className="title">
            We provide the best care to our furry friends!
          </span>
          <span className="desc">Top Quality of Pet Product Store.</span>
        </div>
        <div className="slide-button">
          <div className="left-arrow-Wrapper">
            <img src={leftArrow} alt="" />
          </div>
          <div className="right-arrow-Wrapper">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
