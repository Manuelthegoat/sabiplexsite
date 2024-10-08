import React from "react";

const Hero = () => {
  return (
    <>
    <div className="space2"></div>
      <div class="banner-two-flow-1920">
        <div class="banner-area-one v-2 bg_image shape-move">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
                <div class="banner-content-one">
                  <div class="inner">
                    <div class="pre-title-banner">
                      <img
                        src="assets/images/banner/bulb-3.png"
                        width="22"
                        alt="icon"
                      />
                      <span>Its time to SABI!</span>
                    </div>
                    <h1 class="title-banner">
                    Discover the&nbsp;
                      <span>Ultimate</span>
                      <img src="assets/images/banner/06.png" alt="banner" /> learning companion
                    </h1>
                    <p class="disc">
                      We Have 30k+ Online Courses & 300K+ Online Registered
                      Student.
                    </p>
                    <form action="#">
                      <div class="category-search-input">
                        <div class="select-banner-search-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0H3V3H0V0ZM6 0H9V3H6V0ZM3 6.00001H0V9.00001H3V6.00001ZM6 6.00001H9V9.00001H6V6.00001ZM3 12H0V15H3V12ZM6 12H9V15H6V12Z"
                              fill="#553CDF"
                            />
                            <path d="M15 0H12V3H15V0Z" fill="#553CDF" />
                            <path d="M15 6H12V9H15V6Z" fill="#553CDF" />
                            <path d="M15 12H12V15H15V12Z" fill="#553CDF" />
                          </svg>
                          <select class="nice-select" name="price">
                            <option>All Category</option>
                            <option value="asc">Design</option>
                            <option value="desc">Development</option>
                            <option value="pop">Popularity</option>
                            <option value="low">Price</option>
                            <option value="high">Stars</option>
                          </select>
                        </div>
                        <input
                          type="email"
                          placeholder="Find Your Course"
                          required
                        />
                        <button>Search</button>
                      </div>
                    </form>
                    <div class="banner-tags-wrapper">
                    
                      <div class="single-tags-banner">
                        <p>Computer Science</p>
                      </div>

                      <div class="single-tags-banner">
                        <p>UNN</p>
                      </div>

                      <div class="single-tags-banner">
                        <p>UNEC</p>
                      </div>

                      <div class="single-tags-banner">
                        <p>Medicine</p>
                      </div>

                      <div class="single-tags-banner">
                        <p>Engineering</p>
                      </div>

                      <div class="single-tags-banner">
                        <p>Arts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
                <div class="banner-right-img">
                  <img src="assets/images/banner/student.png" alt="banner" />
                </div>
              </div>
            </div>
          </div>
          <div class="review-thumb">
            <div class="review-single">
              <img src="assets/images/banner/07.png" alt="banner" />
              <div class="info-right">
                <h6 class="title">4.5</h6>
                <span>(2.4k Review)</span>
              </div>
            </div>

            <div class="review-single two">
              <img src="assets/images/banner/08.png" alt="banner" />
              <div class="info-right">
                <h6 class="title">100+</h6>
                <span>Online Course</span>
              </div>
            </div>
          </div>
          <div class="banner-shape-area-two shape-image">
            <img
              src="assets/images/banner/shape/16.png"
              data-speed="0.04"
              alt="one"
              class=" shape one"
            />
            <img
              src="assets/images/banner/shape/17.png"
              data-speed="0.04"
              data-revert="true"
              alt="two"
              class=" shape two"
            />
            <img
              src="assets/images/banner/shape/18.png"
              data-speed="0.04"
              alt="three"
              class=" shape three"
            />
            <img
              src="assets/images/banner/shape/19.png"
              data-speed="0.04"
              data-revert="true"
              alt="four"
              class=" shape four"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
