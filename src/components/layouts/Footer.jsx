import { footerMenuData, galleryData } from "../../data/footer";
import social from "../../assets/footer/gallery/social.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div id="footer">
        <div className="upper">
          {/* left part */}
          <div className="contact">
            <div className="details">
              <div className="logo">YOUR LOGO HERE</div>
              <span>
                "City Pet House & Animal Clinic: Quality and affordable animal
                care at your doorstep. Comprehensive, professional, and
                compassionate veterinary services by our dedicated and
                experienced team."
              </span>
            </div>
            <div className="contact-details">
              <div className="phone">
                <h3>Phone Number:</h3>
                <span>+977-9861859764</span>
              </div>
              <div className="location">
                <h3>Location:</h3>
                <span>Tahachal-Kathmandu</span>
              </div>
            </div>
          </div>

          {/* middle */}
          <div className="menu">
            <h3>Menu</h3>
            {footerMenuData.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          {/* right */}

          <div className="gallery">
            <h3>Gallery</h3>
            <div className="gallery-container">
              {galleryData.map((data, index) => (
                <div className="img-wrapper" key={index}>
                  <img src={data.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="copy-social">
          <span className="copyright">
            Copyright © 2023 City Pet House & Animal Clinic | All Rights
            Reserved
          </span>
          <div className="img-wrapper">
            <img src={social} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
