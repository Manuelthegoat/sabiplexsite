import React from "react";

const Offer = () => {
  return (
    <>
      <div class="offer-add-area rts-section-gapBottom">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6">
              <div class="course-add-single-one bg_image bg-p">
                <div class="title-area-left-style">
                  <div class="pre-title">
                    <img src="assets/images/banner/bulb-4.png" alt="icon" />
                    <span>New Course </span>
                  </div>
                  <h2 class="title">
                    Enroll Now and Save Big <br />
                    on Quality Learning
                  </h2>
                  <a href="course-five.html" class="rts-btn btn-primary-white">
                    View Course
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="course-add-single-one bg_image bg-y">
                <div class="title-area-left-style">
                  <div class="pre-title">
                    <img src="assets/images/banner/bulb-5.png" alt="icon" />
                    <span>New Course </span>
                  </div>
                  <h2 class="title">
                    Limited-Time Offer: Enroll <br />
                    Today for Big Savings
                  </h2>
                  <a
                    href="course-five.html"
                    class="rts-btn btn-primary hov--white"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
