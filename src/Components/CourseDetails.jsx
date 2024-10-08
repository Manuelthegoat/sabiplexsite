import React from "react";

const CourseDetails = () => {
  return (
    <>
      <div className="space"></div>
      <div class="course-details-breadcrumb-1 bg_image rts-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="single-course-left-align-wrapper">
                <div class="meta-area">
                  <a href="index.html">Home</a>
                  <i class="fa-solid fa-chevron-right"></i>
                  <a class="active" href="single-course.html#">
                    Course Details
                  </a>
                </div>
                <h1 class="title">
                MECH 261: 2ND LAW OF<br/> THERMODYNAMICS
                </h1>
                <div class="rating-area">
                  <div class="stars-area">
                    <span>4.5</span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="students">
                    <i class="fa-thin fa-users"></i>
                    <span>3054 Students</span>
                  </div>
                  <div class="calender-area-stars">
                    <i class="fa-light fa-calendar-lines-pen"></i>
                    <span>Last updated 12/2024</span>
                  </div>
                </div>
                <div class="author-area">
                  <div class="author">
                    <img
                      src="assets/images/breadcrumb/01.png"
                      alt="breadcrumb"
                    />
                    <h6 class="name">
                      <span>By</span> Emmanuel U.
                    </h6>
                  </div>
                  <p>
                    {" "}
                    <span>Department: </span> Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rts-course-area rts-section-gap">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8 order-cl-1 order-lg-1 order-md-2 order-sm-2 order-2">
              <div class="course-details-btn-wrapper pb--50">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Course Information
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link "
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Course Content
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Instructor
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contacts-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contacts"
                      type="button"
                      role="tab"
                      aria-controls="contacts"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
              </div>
              <div class="tab-content mt--50" id="myTabContent">
                <div
                  class="tab-pane fade  show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="course-content-wrapper">
                    <h5 class="title">About Course</h5>
                    <p class="disc">
                      If filmmaking is your passion but you never went to film
                      school you’ve come to the right place. Here, you will get
                      hands-on experience and acquire skills that you never
                      would’ve elsewhere like learning how to make feature films
                      on your own, making do with any equipment, and doing it
                      all faster and better.
                    </p>
                    <h5 class="title">Description</h5>
                    <p class="disc">
                      You will be taught the full process of filmmaking starting
                      from planning, filming, and editing. Not only that but you
                      will learn how to make films that look way more expensive
                      than they are without spending a whole lot of time or
                      money on them. In this course, we’ll focus on a few
                      different forms of films from video ads, to movie trailers
                      to travel vlogs, you name it.
                    </p>
                    <p class="disc">
                      In addition to that, we’ll also go over Adobe Premiere Pro
                      in detail so that you get an idea of all that you need to
                      know to become an editing genius. And, if you feel like
                      you’re stuck at any point then you can always ask for
                      guidance and I’ll reply as soon as possible.
                    </p>
                    <p class="disc">
                      With this course, you also have access to a whole lot of
                      resources not only for reference but also free media like
                      aerial video shots, background music, fonts, and more.
                      These all come with proper licensing so you can use them
                      in your production worry free.
                    </p>
                    <div class="module-wrapper">
                      <h6 class="title">What Will You Learn?</h6>
                      <div class="inner-content">
                        <div class="single-wrapper">
                          <div class="single-codule">
                            <i class="fa-regular fa-check"></i>
                            <p>Learn the basics of computer programming</p>
                          </div>
                          <div class="single-codule">
                            <i class="fa-regular fa-check"></i>
                            <p>Differences between ads, trailers, vlogs, etc</p>
                          </div>
                          <div class="single-codule">
                            <i class="fa-regular fa-check"></i>
                            <p>Learn JavaScript</p>
                          </div>
                        </div>
                        <div class="single-wrapper">
                          <div class="single-codule">
                            <i class="fa-regular fa-check"></i>
                            <p>Learn CSS</p>
                          </div>
                          <div class="single-codule">
                            <i class="fa-regular fa-check"></i>
                            <p>Tools you need for best results</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="course-content-wrapper-main">
                    <h5 class="title">Course Content</h5>
                    <div class="accordion mt--30" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span>Introduction</span>
                            <span>3 Lectures . 9 min</span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction to the course</span>
                              </div>
                              <div class="right">
                                <span class="play">Preview</span>
                                <span>9 min</span>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction to the course</span>
                              </div>
                              <div class="right">
                                <span class="play">Preview</span>
                                <span>9 min</span>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction to the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span>Learn to Storyboard</span>
                            <span>7 Lectures . 120 min</span>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Become a storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>LEarning Fundamentsl Elementor</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Enter to the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Main Part of the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Function About PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span>
                              How to draw characters, layouts, and scenes
                            </span>
                            <span>7 Lectures . 83 min</span>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Become a storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>LEarning Fundamentsl Elementor</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Enter to the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Main Part of the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Function About PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span>1-point and 2-point perspective</span>
                            <span>7 Lectures . 72 min</span>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Become a storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>LEarning Fundamentsl Elementor</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Enter to the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Main Part of the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>

                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Function About PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <span>Digital drawing application</span>
                            <span>7 Lectures . 90 min</span>
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Become a storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>storyboard artist</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Introduction PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>LEarning Fundamentsl Elementor</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Enter to the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Main Part of the course</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            <a
                              href="single-course.html#"
                              class="play-vedio-wrapper"
                            >
                              <div class="left">
                                <i class="fa-light fa-circle-play"></i>
                                <span>Function About PHP</span>
                              </div>
                              <div class="right">
                                <i class="fa-regular fa-lock"></i>
                              </div>
                            </a>
                            /{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    /{" "}
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  /{" "}
                  <div class="single-instructor-area-details">
                    <a href="single-course.html#" class="thumbnail">
                      <img
                        src="assets/images/instructor/10.jpg"
                        alt="instructor"
                      />
                    </a>
                    <div class="inner-instrustor-area">
                      <h5 class="title">William U.</h5>
                      <span class="deg">Advanced Educator</span>
                      <div class="stars-area-wrapper">
                        <div class="stars-area">
                          <span>4.5</span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="users-area">
                          <i class="fa-light fa-users"></i>
                          <span>1350 Students</span>
                        </div>
                        <div class="users-area">
                          <i class="fa-light fa-video"></i>
                          <span>26 Courses</span>
                        </div>
                      </div>
                      <p class="disc">
                        William U. Peña, MBA, CISSP No. 349867, is a former
                        college professor and the lead instructor at Dion
                        Training Solutions.
                      </p>
                      <div class="follow-us">
                        <span>Follow</span>
                        <ul>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="single-instructor-area-details">
                    <a href="single-course.html#" class="thumbnail">
                      <img
                        src="assets/images/instructor/11.jpg"
                        alt="instructor"
                      />
                    </a>
                    <div class="inner-instrustor-area">
                      <h5 class="title">William U.</h5>
                      <span class="deg">Advanced Educator</span>
                      <div class="stars-area-wrapper">
                        <div class="stars-area">
                          <span>4.5</span>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="users-area">
                          <i class="fa-light fa-users"></i>
                          <span>1350 Students</span>
                        </div>
                        <div class="users-area">
                          <i class="fa-light fa-video"></i>
                          <span>26 Courses</span>
                        </div>
                      </div>
                      <p class="disc">
                        William U. Peña, MBA, CISSP No. 349867, is a former
                        college professor and the lead instructor at Dion
                        Training Solutions.
                      </p>
                      <div class="follow-us">
                        <span>Follow</span>
                        <ul>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade "
                  id="contacts"
                  role="tabpanel"
                  aria-labelledby="contacts-tab"
                >
                  <div class="rating-main-wrapper">
                    <div class="rating-top-main-wrapper">
                      <div class="rating-area-main-wrapper">
                        <h2 class="title">4.5</h2>
                        <div class="stars-wrapper">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <span>Total 2 Ratings</span>
                      </div>
                      <div class="progress-wrapper-main">
                        <div
                          class="single-progress-area-h"
                          data-sal-delay="150"
                          data-sal="slide-up"
                          data-sal-duration="800"
                        >
                          <div class="progress-top">
                            <i class="fa-regular fa-star"></i>
                            <span class="parcent">5</span>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft bg--primary"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="end">
                            <span>25 Rating</span>
                          </div>
                        </div>
                        <div
                          class="single-progress-area-h"
                          data-sal-delay="150"
                          data-sal="slide-up"
                          data-sal-duration="800"
                        >
                          <div class="progress-top">
                            <i class="fa-regular fa-star"></i>
                            <span class="parcent">4</span>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft bg--primary"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="end">
                            <span>20 Rating</span>
                          </div>
                        </div>
                        <div
                          class="single-progress-area-h"
                          data-sal-delay="150"
                          data-sal="slide-up"
                          data-sal-duration="800"
                        >
                          <div class="progress-top">
                            <i class="fa-regular fa-star"></i>
                            <span class="parcent">3</span>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft bg--primary"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="end">
                            <span>5 Rating</span>
                          </div>
                        </div>
                        <div
                          class="single-progress-area-h"
                          data-sal-delay="150"
                          data-sal="slide-up"
                          data-sal-duration="800"
                        >
                          <div class="progress-top">
                            <i class="fa-regular fa-star"></i>
                            <span class="parcent">2</span>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft bg--primary"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="end">
                            <span>2 Rating</span>
                          </div>
                        </div>
                        <div
                          class="single-progress-area-h"
                          data-sal-delay="150"
                          data-sal="slide-up"
                          data-sal-duration="800"
                        >
                          <div class="progress-top">
                            <i class="fa-regular fa-star"></i>
                            <span class="parcent">1</span>
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft bg--primary"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="end">
                            <span>1 Rating</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="indevidual-rating-area">
                      <div class="author-area">
                        <img
                          src="assets/images/instructor/12.jpg"
                          alt="instructor"
                        />
                        <div class="information">
                          <span>William U.</span>
                          <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span class="ml--30">a week ago</span>
                          </div>
                        </div>
                      </div>
                      <p class="disc">
                        I still have a lot of studying to do using this course
                        and the other practice exams, but so far it's been
                        great! I have not taken my Security+ exam as well, so
                        I'll update this at a later time.
                      </p>
                      <div class="like-love-area">
                        <a href="single-course.html#">
                          <i class="fa-sharp fa-light fa-thumbs-up"></i>
                        </a>
                        <a href="single-course.html#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>

                    <div class="indevidual-rating-area">
                      <div class="author-area">
                        <img
                          src="assets/images/instructor/13.jpg"
                          alt="instructor"
                        />
                        <div class="information">
                          <span>William U.</span>
                          <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span class="ml--30">a week ago</span>
                          </div>
                        </div>
                      </div>
                      <p class="disc">
                        I still have a lot of studying to do using this course
                        and the other practice exams, but so far it's been
                        great! I have not taken my Security+ exam as well, so
                        I'll update this at a later time.
                      </p>
                      <div class="like-love-area">
                        <a href="single-course.html#">
                          <i class="fa-sharp fa-light fa-thumbs-up"></i>
                        </a>
                        <a href="single-course.html#">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrapper-bottom-course-details-page g-5 row mt--50 pr--60 pr_sm--0 pl_sm--0">
                <div class="title-between-area pr--150">
                  <h5 class="title mb-0">More Courses by William U.</h5>
                  <a href="single-course.html#" class="rts-btn with-arrow p-0">
                    View All Course <i class="fa-light fa-arrow-right"></i>
                  </a>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="rts-single-course">
                    <a href="single-course.html" class="thumbnail">
                      <img src="assets/images/course/02.jpg" alt="course" />
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
                        <span>Marketing</span>
                      </div>
                      <div class="single-tag">
                        <span>Finance</span>
                      </div>
                    </div>
                    <div class="lesson-studente">
                      <div class="lesson">
                        <i class="fa-light fa-calendar-lines-pen"></i>
                        <span>22 Lessons</span>
                      </div>
                      <div class="lesson">
                        <i class="fa-light fa-user-group"></i>
                        <span>60 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 class="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <p class="teacher">William U. Peña, MBA</p>
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
                        <div class="price">₦79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                  <div class="rts-single-course">
                    <a href="single-course.html" class="thumbnail">
                      <img src="assets/images/course/03.jpg" alt="course" />
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
                        <span>Marketing</span>
                      </div>
                      <div class="single-tag">
                        <span>Finance</span>
                      </div>
                    </div>
                    <div class="lesson-studente">
                      <div class="lesson">
                        <i class="fa-light fa-calendar-lines-pen"></i>
                        <span>22 Lessons</span>
                      </div>
                      <div class="lesson">
                        <i class="fa-light fa-user-group"></i>
                        <span>60 Students</span>
                      </div>
                    </div>
                    <a href="single-course.html">
                      <h5 class="title">
                        How to Write the Ultimate 1 Page Strategic Business Plan
                      </h5>
                    </a>
                    <p class="teacher">William U. Peña, MBA</p>
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
                        <div class="price">₦79.99</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 order-cl-2 order-lg-2 order-md-1 order-sm-1 order-1  rts-sticky-column-item">
              <div class="right-course-details">
                <div class="course-side-bar">
                  <div class="thumbnail">
                    <img src="assets/images/course/20.jpg" alt="" />
                    <div class="vedio-icone">
                      <a
                        class="video-play-button play-video popup-video"
                        href="https://www.youtube.com/watch?v=ezbJwaLmOeM"
                      >
                        <span></span>
                      </a>
                      <div class="video-overlay">
                        <a class="video-overlay-close">×</a>
                      </div>
                    </div>
                  </div>
                  <div class="price-area">
                    <h3 class="title">₦39.99</h3>
                    <h4 class="none">₦79.99</h4>
                    <span class="discount">-50%</span>
                  </div>
                  <div class="clock-area">
                    <i class="fa-light fa-clock"></i>
                    <span>2 Day left at this price!</span>
                  </div>
                  <a href="single-course.html#" class="rts-btn btn-primary">
                    Add To Cart
                  </a>
                  <a href="single-course.html#" class="rts-btn btn-border">
                    Buy Now
                  </a>

                  <div class="what-includes">
                    <span class="m">30-Day Money-Back Guarantee</span>
                    <h5 class="title">This course includes: </h5>
                    <div class="single-include">
                      <div class="left">
                        <i class="fa-light fa-chart-bar"></i>
                        <span>Levels</span>
                      </div>
                      <div class="right">
                        <span>Beginner</span>
                      </div>
                    </div>
                    <div class="single-include">
                      <div class="left">
                        <i class="fa-light fa-timer"></i>
                        <span>Duration</span>
                      </div>
                      <div class="right">
                        <span>6 hours 56 minutes</span>
                      </div>
                    </div>
                    <div class="single-include">
                      <div class="left">
                        <i class="fa-regular fa-floppy-disk"></i>
                        <span>Subject</span>
                      </div>
                      <div class="right">
                        <span>Web Development</span>
                      </div>
                    </div>
                    <div class="single-include">
                      <div class="left">
                        <i class="fa-regular fa-pen-to-square"></i>
                        <span>Update</span>
                      </div>
                      <div class="right">
                        <span>29 October, 2023 Last Update</span>
                      </div>
                    </div>
                    <div class="single-include">
                      <div class="left">
                        <i class="fa-sharp fa-light fa-file-certificate"></i>
                        <span>Certificate</span>
                      </div>
                      <div class="right">
                        <span>Certificate of completion </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="right-course-details mt--30">
                <div class="course-side-bar">
                  <div class="course-single-information">
                    <h5 class="title">A course by</h5>
                    <div class="body">
                      <div class="author">
                        <img src="assets/images/course/13.png" alt="" />
                        <span>Dr. Angela Yu</span>
                      </div>
                      <div class="author">
                        <img src="assets/images/course/13.png" alt="" />
                        <span>Mr. John Yu</span>
                      </div>
                    </div>
                  </div>

                  <div class="course-single-information">
                    <h5 class="title">Material Includes</h5>
                    <div class="body">
                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Flexible Deadlines
                      </div>

                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Hours of live- demo
                      </div>

                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Hours of live- demo
                      </div>

                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        200+ downloadable resoursces
                      </div>
                    </div>
                  </div>

                  <div class="course-single-information">
                    <h5 class="title">Requirements</h5>
                    <div class="body">
                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Access to Adobe Premiere Pro
                      </div>

                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Familiarity with computers and other devices
                      </div>
                    </div>
                  </div>

                  <div class="course-single-information">
                    <h5 class="title">Tags</h5>
                    <div class="body">
                      <div class="tags-wrapper">
                        <span>Course</span>
                        <span>Design</span>
                        <span>Web development</span>
                        <span>Business</span>
                        <span>UI/UX</span>
                        <span>Financial</span>
                      </div>
                    </div>
                  </div>

                  <div class="course-single-information">
                    <h5 class="title">Share</h5>
                    <div class="body">
                      <div class="social-share-course-side-bar">
                        <ul>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-course.html#">
                              <i class="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="course-single-information last">
                    <h5 class="title">Audience</h5>
                    <div class="body">
                      <div class="single-check">
                        <i class="fa-light fa-circle-check"></i>
                        Suitable for beginners and intermediates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
