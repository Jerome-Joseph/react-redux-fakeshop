import React from "react";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div>
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"  >
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner fs-4" style={{height:"800px"}}>
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{height:"600px"}}>
        {/* <h3>First slide label</h3>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{height:"600px"}}>
        {/* <h3>Second slide label</h3>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{height:"600px"}}>
        {/* <h3>Third slide label</h3>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Products/>
    </div>
  );
};

export default Home;
