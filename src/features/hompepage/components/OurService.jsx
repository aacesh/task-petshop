import { serviceData } from "../data/service";

const OurService = () => {
  return (
    <div className="flex-center service-container">
      <div className="" id="services">
        <h3>Our Services</h3>
        <p>
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </p>
        <div className="service-list-container">
          {serviceData.map((data, index) => (
            <div className="card-container" key={index}>
              <div className="service-card" key={index}>
                <div className="img-wrapper">
                  <img src={data.img} alt="" />
                </div>
                <div></div>
                <h3 className="title">{data.title}</h3>
                <span>{data.desc}</span>
                <button
                  className="btn-view-more"
                >View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
