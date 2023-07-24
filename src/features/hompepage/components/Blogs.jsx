import React from "react";
import { blogsData } from "../data/blogs";

const Blogs = () => {
  return (
    <div className="blogs-container" id="gallery">
      <div id="blogs">
        <h3>Our Blogs</h3>
        <div className="blog-list-container">
          {blogsData.map((data, index) => (
            <div className="card-container" key={index}>
              <div className="img-wrapper">
                <img src={data.img} alt="" />
              </div>
              <h3>{data.heading}</h3>
              <span>{data.desc}</span>
              <button className="btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
