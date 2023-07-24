import { petCollectionData } from "../data/petCollection";
import right from "../assets/right.svg";
const PetCollection = () => {
  return (
    <div className="pet-container"
      id="breeds"
    >
      <div className="" id="pet">
        <h3>Our Pet Collections</h3>
        <span>
          "Bring joy to your home with a furry companion from our pet
          selection."
        </span>
        <div className="pet-collections">
          {petCollectionData.map((data, index) => (
            <div className="card-container" key={index}>
              <div className="img-wrapper">
                <img src={data.img} alt="" />
              </div>
              <h3>{data.title}</h3>
              <div className="detail">
                <span>
                  Gender:
                  <span className="data">{data.gender}</span>
                </span>
                <span>
                  Age:
                  <span className="data">{data.age}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-div">
          <span>View All</span>
          <div className="btn-arrow">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCollection;
