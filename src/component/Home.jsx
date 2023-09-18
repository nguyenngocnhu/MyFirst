import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <div classNameName="hero ">
        <div className="card bg-dark text-white border-0">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="assets/1.png"
                  height="800px "
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://discovertemplate.com/wp-content/uploads/2021/05/E-Commerce-Shopping-Animated-GIF-Icon-pack-by-Discover-Template.gif"
                  height="800px "
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="assets/3.jpg"
                  height="800px "
                  class="card-img"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-img-overlay d-flex flex-column justify-content-start">
            <h5 classNameName="cart-title display-3 fw-bolder mb-0 text-black">
              NEW SEASON ARIVALS
            </h5>
            <p className="card-text ">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
