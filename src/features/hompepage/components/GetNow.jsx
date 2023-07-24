import whiteRightArrow from "../assets/whiteRightArrow.svg";
const GetNow = () => {
  return (
    <div className="get-now-container"
      id="shop"
    >
      <div id="get-now">
        <span className="slogan">One More Friend Thousands More Fun!</span>
        <h3>"Find your furry soulmate at Our Pet Shop."</h3>
        <button>
          <span>Get Now</span>
          <div>
            <img src={whiteRightArrow} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default GetNow;
