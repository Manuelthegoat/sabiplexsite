import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dummy } from "../dummy";

const Course = () => {
  return (
    <>
      <div class="course-area-two rts-section-gapBottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-between-area align-items-end">
                <div class="title-area-left-style">
                  <div class="pre-title">
                    <img src="assets/images/banner/bulb.png" alt="icon" />
                    <span>Courses</span>
                  </div>
                  <h2 class="title mb--5">Explore Featured Courses</h2>
                  <p class="disc">
                    You'll find something to spark your curiosity and enhance
                  </p>
                </div>
                <a href="index-two.html#" class="rts-btn with-arrow p-0">
                  View All Course <i class="fa-light fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
         
          <div class="row g-5 mt--20">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
              loop
              autoplay={{
                stopOnLastSlide: false,
                delay: 2000,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ 
                clickable: true, 
                el: ".swiper-pagination"
             }}
             breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                420: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                740: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                940: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1240: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
             }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              class="swiper mySwiper-category-1 swiper-float-right-course swiper-data"
            >
              <div class="swiper-wrapper">
              {dummy.map((item) => (
                <SwiperSlide class="swiper-slide">
                  <div class="rts-single-course">
                    <a href="/course-details" class="thumbnail">
                      <img src={item.image} alt="course" />
                    </a>
                    <div
                      class="save-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal-login"
                    >
                      <i class="fa-sharp fa-light fa-bookmark"></i>
                    </div>
                    <div class="tags-area-wrapper">
                      <div class="single-tag">
                        <span>{item.tags}</span>
                      </div>
                    </div>
                    <div class="lesson-studente">
                      <div class="lesson">
                        <i class="fa-light fa-calendar-lines-pen"></i>
                        <span>25 Lessons</span>
                      </div>
                      <div class="lesson">
                        <i class="fa-light fa-user-group"></i>
                        <span>54 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 class="title">
                        {item.title}
                      </h5>
                    </a>
                    <p class="teacher">By {item.tutor}</p>
                    <div class="rating-and-price">
                      <div class="rating-area">
                        <span>4.5</span>
                        <div class="stars">
                          <ul>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-solid fa-star"></i>
                            </li>
                            <li>
                              <i class="fa-sharp fa-regular fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="price-area">
                        <div class="not price">₦{item.discount}</div>
                        <div class="price">₦{item.price}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </div>
              <div class="swiper-button-next">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div class="swiper-button-prev">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div class="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
