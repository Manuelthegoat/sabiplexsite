import React, { useState } from "react";
import { dummyData } from "../dummydata";

const Header = () => {
  const [className, setClassName] = useState("cart-bar");
  const [className2, setClassName2] = useState("search-input-area");
  return (
    <>
    {/* ====== HEADER STARTS ======== */}
      <header class="header-one header--sticky fixed">
        <div class="header-top-one-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-top-one">
                  <div class="left-information">
                    <a href="mailto:someone@example.com" class="email">
                      <i class="fa-light fa-envelope"></i>info@sabiplexapp.com
                    </a>
                    <a href="tel:+4733378901" class="email">
                      <i class="fa-light fa-phone"></i>+234 708 823 9725
                    </a>
                  </div>
                  <div class="right-information">
                    <ul class="rts-dropdown-menu switcher-language">
                      <li class="has-child-menu">
                        <a href="index.html#">
                          <img
                            class="left-image"
                            src="assets/images/flag-01.svg"
                            alt="Language Images"
                          />
                          <span class="menu-item">English</span>
                          <i class="fa-regular fa-chevron-down"></i>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="index.html#">
                              <img
                                class="left-image"
                                src="assets/images/flag-03.svg"
                                alt="Language Images"
                              />
                              <span class="menu-item">Deutsch</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <img
                                class="left-image"
                                src="assets/images/flag-02.svg"
                                alt="Language Images"
                              />
                              <span class="menu-item">Portuguese</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <img
                                class="left-image"
                                src="assets/images/flag-04.svg"
                                alt="Language Images"
                              />
                              <span class="menu-item">Russian</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="rts-dropdown-menu switcher-currency">
                      <li class="has-child-menu">
                        <a href="index.html#">
                          <span class="menu-item">Naira (₦)</span>
                          <i class="fa-regular fa-chevron-down"></i>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="index.html#">
                              <span class="menu-item">Euro</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <span class="menu-item">USD</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html#">
                              <span class="menu-item">Ruble</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-one-wrapper">
                <div class="left-side-header">
                  <a href="index.html" class="logo-area">
                    <img src="assets/logo.png" alt="logo" className="logoimg" />
                  </a>
                </div>

                <div class="main-nav-one">
                  <nav>
                    <ul>
                      <li class="" style={{ position: "static" }}>
                        <a class="nav-link" href="index.html#">
                          Home
                        </a>

                    
                      </li>

                      <li class="">
                        <a class="nav-link" href="index.html#">
                          About Us
                        </a>
                     
                      </li>
                      <li class="has-dropdown" style={{ position: "static" }}>
                        <a class="nav-link" href="index.html#">
                          Courses
                        </a>
                        <ul class="megamenu-hub min-mega shape-move">
                          <li>
                            <ul class="">
                              <li class="parent">
                                <a href="index.html#">Courses</a>
                              </li>
                            
                            
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="course-six.html"
                                >
                                  Something here
                                </a>
                              </li>
                            </ul>
                            <ul class="">
                              <li class="parent">
                                <a href="index.html#">Courses Details</a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course.html"
                                >
                                  Course Details
                                </a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course-two.html"
                                >
                                  Course Details v2
                                </a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course-three.html"
                                >
                                  Course Details v3
                                </a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course-four.html"
                                >
                                  Course Details v4
                                </a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course-five.html"
                                >
                                  Course Details v5
                                </a>
                              </li>
                              <li>
                                <a
                                  class="mobile-menu-link"
                                  href="single-course-free.html"
                                >
                                  Course Details Free
                                </a>
                              </li>
                            </ul>
                            <ul class="">
                              <li class="parent">
                                <a href="index.html#">Others</a>
                              </li>
                              <li>
                                <a href="become-instructor.html">
                                  Become an Instructor
                                </a>
                              </li>
                              <li>
                                <a href="instructor-profile.html">
                                  Instructor Profile
                                </a>
                              </li>
                              <li>
                                <a href="instructor.html">Instructor</a>
                              </li>
                              <li>
                                <a href="pricing.html">Membership Plan</a>
                              </li>
                              <li>
                                <a href="log-in.html">Log In</a>
                              </li>
                              <li>
                                <a href="registration.html">Registration</a>
                              </li>
                            </ul>
                            <div class="thumbnav-area">
                              <a
                                href="create-course.html"
                                class="single-thumbnav"
                              >
                                <div class="icon">
                                  <img
                                    src="assets/images/nav/04.png"
                                    alt="nav"
                                  />
                                </div>
                                <span>Create Course</span>
                              </a>

                              <a
                                href="lesson-details.html"
                                class="single-thumbnav mash"
                              >
                                <div class="icon">
                                  <img
                                    src="assets/images/nav/05.png"
                                    alt="nav"
                                  />
                                </div>
                                <span>Lesson Details</span>
                              </a>

                              <a href="instructor.html" class="single-thumbnav">
                                <div class="icon">
                                  <img
                                    src="assets/images/nav/06.png"
                                    alt="nav"
                                  />
                                </div>
                                <span>Instructor</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="">
                        <a class="nav-link" href="index.html#">
                          Our App
                        </a>
                     
                      </li>
                      <li class="">
                        <a class="nav-link" href="/shop">
                          Shop
                        </a>
                        
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="main-nav-one"></div>
                <div class="header-right-area-one">
                  <div class="actions-area">
                    <div class="search-btn" id="search"  onClick={() => setClassName2("search-input-area show")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M19.9375 18.9652L14.7454 13.7732C15.993 12.2753 16.6152 10.3542 16.4824 8.40936C16.3497 6.46453 15.4722 4.64575 14.0326 3.33139C12.593 2.01702 10.7021 1.30826 8.75326 1.35254C6.8044 1.39683 4.94764 2.19075 3.56924 3.56916C2.19083 4.94756 1.39691 6.80432 1.35263 8.75317C1.30834 10.702 2.0171 12.5929 3.33147 14.0325C4.64584 15.4721 6.46461 16.3496 8.40944 16.4823C10.3543 16.6151 12.2754 15.993 13.7732 14.7453L18.9653 19.9374L19.9375 18.9652ZM2.75 8.93742C2.75 7.71365 3.11289 6.51736 3.79278 5.49983C4.47267 4.4823 5.43903 3.68923 6.56965 3.22091C7.70026 2.7526 8.94436 2.63006 10.1446 2.86881C11.3449 3.10756 12.4474 3.69686 13.3127 4.56219C14.1781 5.42753 14.7674 6.53004 15.0061 7.7303C15.2449 8.93055 15.1223 10.1747 14.654 11.3053C14.1857 12.4359 13.3926 13.4022 12.3751 14.0821C11.3576 14.762 10.1613 15.1249 8.9375 15.1249C7.29703 15.1231 5.72427 14.4706 4.56429 13.3106C3.4043 12.1506 2.75182 10.5779 2.75 8.93742Z"
                          fill="#553CDF"
                        />
                      </svg>
                    </div>
                    <div
                      class="cart cart-icon"
                      onClick={() => setClassName("cart-bar show")}
                    >
                      <i class="fa-regular fa-cart-shopping"></i>
                    </div>
                  </div>
                  <div class="buttons-area">
                    <a href="log-in.html" class="rts-btn btn-border">
                      Log In
                    </a>
                    <a href="registration.html" class="rts-btn btn-primary">
                      Sign Up
                    </a>
                  </div>
                  <div class="menu-btn" id="menu-btn" >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                      <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                      <rect width="20" height="2" fill="#1F1F25"></rect>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


{/* ========= HEADER ENDS ========= */}



 {/* ============ CART STARTS ========== */}


      <div className={className}>
        <div class="cart-header">
          <h3 class="cart-heading">MY CART ({dummyData.length} ITEMS)</h3>
          <div class="close-cart" onClick={() => setClassName("cart-bar")}>
            <i class="fal fa-times"></i>
          </div>
        </div>
        <div class="product-area">
          {dummyData.map((item) => (
          <div class="product-item">
            <div class="product-detail">
              <div class="product-thumb">
                <img
                  src={item.image}
                  alt="product-thumb"
                />
              </div>
              <div class="item-wrapper">
                <span class="product-name">{item.title}</span>
                {/* <div class="item-wrapper">
                  <span class="product-variation">
                    <span class="color">Green /</span>
                    <span class="size">XL</span>
                  </span>
                </div> */}
                <div class="item-wrapper">
                  <span class="product-qnty">{item.quantity ? item.quantity : "2"}</span>
                  <span class="product-price">&nbsp;|| {item.price}</span>
                </div>
              </div>
            </div>
            <div class="cart-edit">
              <div class="quantity-edit">
                <button class="button">
                  <i class="fal fa-minus minus"></i>
                </button>
                <input type="text" class="input" value="2" />
                <button class="button plus">
                  +<i class="fal fa-plus plus"></i>
                </button>
              </div>
              <div class="item-wrapper d-flex mr--5 align-items-center">
             
                <a  class="delete-cart">
                  <i class="fal fa-trash text-danger"></i>
                </a>
              </div>
            </div>
          </div>
          ))}
   
        </div>
        <div class="cart-bottom-area">
          <span class="spend-shipping">
            <i class="fal fa-truck"></i> SPENT{" "}
            <span class="amount">₦199.00</span> MORE FOR FREE SHIPPING
          </span>
          <span class="total-price">
            TOTAL: <span class="price">₦556</span>
          </span>
          <a href="/checkout" class="checkout-btn cart-btn">
            PROCEED TO CHECKOUT
          </a>
          <a href="/cart" class="view-btn cart-btn">
            VIEW CART
          </a>
        </div>
      </div>



{/* ========= CART ENDS ============ */}


      <div id="side-bar" class="side-bar header-two">
        <button class="close-icon-menu">
          <i class="far fa-times"></i>
        </button>
        <div class="inner-main-wrapper-desk">
          <div class="thumbnail">
            <img src="assets/images/banner/04.jpg" alt="elevate" />
          </div>
          <div class="inner-content">
            <h4 class="title">
              We Build Building and Great Constructive Homes.
            </h4>
            <p class="disc">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master new technologies.
            </p>
            <div class="footer">
              <h4 class="title">Got a project in mind?</h4>
              <a href="contact.html" class="rts-btn btn-primary">
                Let's talk
              </a>
            </div>
          </div>
        </div>
        <div class="mobile-menu-main">
          <nav class="nav-main mainmenu-nav mt--30">
            <ul class="mainmenu metismenu" id="mobile-menu-active">
              <li class="has-droupdown">
                <a href="index-two.html#" class="main">
                  Home
                </a>
                <ul class="submenu mm-collapse">
                  <li>
                    <a class="mobile-menu-link" href="index.html">
                      Main Home
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-two.html">
                      Online Course
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-three.html">
                      Course Hub
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-four.html">
                      Distance Learning
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-five.html">
                      Single Instructor
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-six.html">
                      Language Academy
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-seven.html">
                      Gym Instructor
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-eight.html">
                      Kitchen Coach
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-nine.html">
                      Course Portal
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="index-ten.html">
                      Business Coach
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="index-two.html#" class="main">
                  Pages
                </a>
                <ul class="submenu mm-collapse">
                  <li>
                    <a class="mobile-menu-link" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="about-two.html">
                      About Us Two
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="instructor-profile.html">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li class="has-droupdown third-lvl">
                    <a class="main" href="index-two.html#">
                      Zoom
                    </a>
                    <ul class="submenu-third-lvl mm-collapse">
                      <li>
                        <a href="zoom-meeting.html"></a>Zoom Meeting
                      </li>
                      <li>
                        <a href="zoom-details.html"></a>Zoom Details
                      </li>
                    </ul>
                  </li>
                  <li class="has-droupdown third-lvl">
                    <a class="main" href="index-two.html#">
                      Event
                    </a>
                    <ul class="submenu-third-lvl mm-collapse">
                      <li>
                        <a href="event.html"></a>Event
                      </li>
                      <li>
                        <a href="https://html.themewant.com/studyhub/event-two.html"></a>
                        Event Two
                      </li>
                      <li>
                        <a href="event-details.html"></a>Event Details
                      </li>
                    </ul>
                  </li>
                  <li class="has-droupdown third-lvl">
                    <a class="main" href="index-two.html#">
                      Shop
                    </a>
                    <ul class="submenu-third-lvl mm-collapse">
                      <li>
                        <a href="shop.html"></a>Shop
                      </li>
                      <li>
                        <a href="product-details.html"></a>Product Details
                      </li>
                      <li>
                        <a href="checkout.html"></a>Checkout
                      </li>
                      <li>
                        <a href="cart.html"></a>Cart
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="index-two.html#" class="main">
                  Course
                </a>
                <ul class="submenu mm-collapse">
                  <li>
                    <a href="index-two.html#" class="tag">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-one.html">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-two.html">
                      Course List
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-three.html">
                      Course Grid
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-four.html">
                      Course List Two
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-five.html">
                      Course Grid Two
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="course-six.html">
                      Course Filter
                    </a>
                  </li>
                </ul>
                <ul class="submenu mm-collapse">
                  <li>
                    <a href="index-two.html#" class="tag">
                      Courses Details
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course.html">
                      Courses Details
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course-two.html">
                      Courses Details V2
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course-three.html">
                      Courses Details V3
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course-four.html">
                      Courses Details V4
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course-five.html">
                      Courses Details V5
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="single-course-free.html">
                      Courses Details Free
                    </a>
                  </li>
                </ul>
                <ul class="submenu mm-collapse">
                  <li>
                    <a href="index-two.html#" class="tag">
                      Others
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="become-instructor.html">
                      Become an Instructor
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="instructor-profile.html">
                      Instructor Profile
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="instructor.html">
                      Instructor
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="pricing.html">
                      Membership Plan
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="log-in.html">
                      Log In
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="registration.html">
                      Registration
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="index-two.html#" class="main">
                  Dashboard
                </a>
                <ul class="submenu mm-collapse">
                  <li class="has-droupdown third-lvl">
                    <a class="main" href="index-two.html#">
                      Instructor Dashboard
                    </a>
                    <ul class="submenu-third-lvl mm-collapse">
                      <li>
                        <a href="dashboard.html"></a>Dashboard
                      </li>
                      <li>
                        <a href="my-profile.html"></a>My Profile
                      </li>
                      <li>
                        <a href="enroll-course.html"></a>Enroll Course
                      </li>
                      <li>
                        <a href="wishlist.html"></a>Wishlist
                      </li>
                      <li>
                        <a href="reviews.html"></a>Reviews
                      </li>
                      <li>
                        <a href="quick-attempts.html"></a>Quick Attempts
                      </li>
                      <li>
                        <a href="order-history.html"></a>Order History
                      </li>
                      <li>
                        <a href="question-answer.html"></a>Question Answer
                      </li>
                      <li>
                        <a href="calender.html"></a>Calender
                      </li>
                      <li>
                        <a href="my-course.html"></a>My Course
                      </li>
                      <li>
                        <a href="announcement.html"></a>Announcement
                      </li>
                      <li>
                        <a href="assignments.html"></a>Assignments
                      </li>
                      <li>
                        <a href="certificate.html"></a>Certificate
                      </li>
                    </ul>
                  </li>
                  <li class="has-droupdown third-lvl">
                    <a class="main" href="index-two.html#">
                      Students Dashboard
                    </a>
                    <ul class="submenu-third-lvl mm-collapse">
                      <li>
                        <a href="student-dashboard.html"></a>Dashboard
                      </li>
                      <li>
                        <a href="student-profile.html"></a>My Profile
                      </li>
                      <li>
                        <a href="student-enroll-course.html"></a>Enroll Course
                      </li>
                      <li>
                        <a href="student-wishlist.html"></a>Wishlist
                      </li>
                      <li>
                        <a href="student-reviews.html"></a>Reviews
                      </li>
                      <li>
                        <a href="student-quick-attempts.html"></a>Quick Attempts
                      </li>
                      <li>
                        <a href="student-order-history.html"></a>Order History
                      </li>
                      <li>
                        <a href="student-question-answer.html"></a>Question
                        Answer
                      </li>
                      <li>
                        <a href="student-calender.html"></a>Calender
                      </li>
                      <li>
                        <a href="student-settings.html"></a>Students Settings
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-droupdown">
                <a href="index-two.html#" class="main">
                  Blog
                </a>
                <ul class="submenu mm-collapse">
                  <li>
                    <a class="mobile-menu-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="blog-grid.html">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="blog-list.html">
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="blog-right-sidebar.html">
                      Blog Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="blog-left-sidebar.html">
                      Blog Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a class="mobile-menu-link" href="blog-details.html">
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div class="buttons-area">
            <a href="index-two.html#" class="rts-btn btn-border">
              Log In
            </a>
            <a href="index-two.html#" class="rts-btn btn-primary">
              Sign Up
            </a>
          </div>

          <div class="rts-social-style-one pl--20 mt--50">
            <ul>
              <li>
                <a href="index-two.html#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="index-two.html#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="index-two.html#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="index-two.html#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={className2}>
        <div class="container">
          <div class="search-input-inner">
            <div class="input-div">
              <input
                class="search-input autocomplete"
                type="text"
                placeholder="Search by keyword or #"
              />
              <button>
                <i class="far fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div id="close" class="search-close-icon" onClick={() => setClassName2("search-input-area")}>
          <i class="far fa-times"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
