import circle from "../assets/circle.png";
import redCircle from "../assets/redCircle.svg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import check from "../assets/check.svg";
import right from "../assets/right.svg";

export const aboutData = [
  "Comprehensive",
  "Professional",
  "Compassionate veterinary service.",
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="" id="about">
        <div className="left-container">
          <img className="image-circle" src={circle} alt="" />
          <img className="image-red-circle" src={redCircle} alt="" />
          <img className="image-1" src={img1} alt="" />
          <img className="image-2" src={img2} alt="" />
          <img className="image-3" src={img3} alt="" />
        </div>
        <div className="right-container">
          <h3>About Us</h3>
          <span className="desc">
            Pet House & Animal clinic was established with moto to provide
            qualitative and affordable animal healthcare service to your
            doorstep.
          </span>
          <ul>
            {aboutData.map((value, index) => (
              <li key={index}>
                <div>
                  <img src={check} alt="" />
                </div>
                <span className="feature"> {value}</span>
              </li>
            ))}
          </ul>
          <button>
            <span>Contact</span>
            <div className="btn-arrow">
              <img src={right} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

