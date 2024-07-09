import React from "react";
import { dummyData } from "../dummydata";
import { dummy } from "../dummy";

const Courses = () => {
  return (
    <>
      <div className="space"></div>
      <div class="rts-course-default-area rts-section-gap">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-3">
              <div class="rts-course-filter-area">
                <div class="single-filter-left-wrapper">
                  <h6 class="title">Search</h6>
                  <div class="search-filter filter-body">
                    <div class="input-wrapper">
                      <input type="text" placeholder="Search Course..." />
                      <i class="fa-light fa-magnifying-glass"></i>
                    </div>
                  </div>
                </div>

                <div class="single-filter-left-wrapper">
                  <h6 class="title">Department</h6>
                  <div class="checkbox-filter filter-body">
                    <div class="checkbox-wrapper">
                      {dummy.map((item) => (
                        <div class="single-checkbox-filter">
                          <div class="check-box">
                            <input type="checkbox" id="category-7" />
                            <label for="category-7">{item.department}</label>
                            <br />
                          </div>
                          <span class="number">(95)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div class="single-filter-left-wrapper">
                  <h6 class="title">Level</h6>
                  <div class="checkbox-filter filter-body">
                    <div class="checkbox-wrapper">
                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="lavel-1" />
                          <label for="lavel-1">All Levels</label>
                          <br />
                        </div>
                        <span class="number">(130)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="lavel-2" />
                          <label for="lavel-2">100</label>
                          <br />
                        </div>
                        <span class="number">(85)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="lavel-3" />
                          <label for="lavel-3">200</label>
                          <br />
                        </div>
                        <span class="number">(210)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="lavel-4" />
                          <label for="lavel-4">300</label>
                          <br />
                        </div>
                        <span class="number">(45)</span>
                      </div>
                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="lavel-4" />
                          <label for="lavel-4">400</label>
                          <br />
                        </div>
                        <span class="number">(45)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-filter-left-wrapper">
                  <h6 class="title">Author</h6>
                  <div class="checkbox-filter filter-body">
                    <div class="checkbox-wrapper">
                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="author-1" />
                          <label for="author-1">Admin</label>
                          <br />
                        </div>
                        <span class="number">(130)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="author-2" />
                          <label for="author-2">Sean Kaye</label>
                          <br />
                        </div>
                        <span class="number">(85)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="author-3" />
                          <label for="author-3">David Travis</label>
                          <br />
                        </div>
                        <span class="number">(210)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="author-4" />
                          <label for="author-4">Dr. Angela Yu</label>
                          <br />
                        </div>
                        <span class="number">(45)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-filter-left-wrapper">
                  <h6 class="title">Price</h6>
                  <div class="checkbox-filter filter-body last">
                    <div class="checkbox-wrapper">
                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="price-1" />
                          <label for="price-1">Free</label>
                          <br />
                        </div>
                        <span class="number">(6)</span>
                      </div>

                      <div class="single-checkbox-filter">
                        <div class="check-box">
                          <input type="checkbox" id="price-2" />
                          <label for="price-2">Paid</label>
                          <br />
                        </div>
                        <span class="number">(80)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="course-two.html#" class="rts-btn btn-border">
                  <i class="fa-regular fa-x"></i> Clear All Filters
                </a>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="filter-small-top-full">
                <div class="left-filter">
                  <span>Short By</span>
                  <select class="nice-select" name="price">
                    <option>All Category</option>
                    <option value="asc">Design</option>
                    <option value="desc">Development</option>
                    <option value="pop">Popularity</option>
                    <option value="low">Price</option>
                    <option value="high">Stars</option>
                  </select>
                </div>
                <div class="right-filter">
                  <span>Showing 1-9 of 19 results</span>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link "
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="false"
                      >
                        <i class="fa-light fa-grid-2"></i>
                        <span>Grid</span>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        <i class="fa-light fa-list"></i>
                        <span> List</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row g-5 mt--30">
                    {dummy.map((item) => (
                      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="rts-single-course">
                          <a href="single-course.html" class="thumbnail">
                            <img src={item.image} alt="course" />
                          </a>
                          <div class="tags-area-wrapper">
                            <div class="single-tag">
                              <span>{item.tags}</span>
                            </div>
                          </div>
                          <div class="lesson-studente">
                            <div class="lesson">
                              <i class="fa-light fa-calendar-lines-pen"></i>
                              <span>23 Lessons</span>
                            </div>
                            <div class="lesson">
                              <i class="fa-light fa-user-group"></i>
                              <span>40 Students</span>
                            </div>
                          </div>
                          <a href="single-course.html">
                            <h5 class="title">{item.title}</h5>
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
                              <div class="not price">${item.discount}</div>
                              <div class="price">${item.price}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div class="row mt--30">
                    <div class="col-lg-12">
                      <div class="rts-pagination-area-2">
                        <ul>
                          <li>
                            <i class="fa-solid fa-chevron-left"></i>
                          </li>
                          <li class="active">1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>
                            <i class="fa-solid fa-chevron-right"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade  show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="row g-5 mt--0">1
                    <div class="col-lg-12">
                      {dummy.map((item) => (
                        <div class="rts-single-course course-list">
                          <a href="single-course.html" class="thumbnail">
                            <img
                              src='data:image/jpeg;base64,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'
                              alt="course"
                            />
                          </a>
                          <div class="information-inner">
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
                              <h5 class="title">{item.title}</h5>
                            </a>
                            <p class="disc">
                              Discover a world of knowledge and learning
                              opportunities
                            </p>
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
                                <div class="not price">${item.discount}</div>
                                <div class="price">${item.price}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="row mt--30">
                    <div class="col-lg-12">
                      <div class="rts-pagination-area-2">
                        <ul>
                          <li>
                            <i class="fa-solid fa-chevron-left"></i>
                          </li>
                          <li class="active">1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>
                            <i class="fa-solid fa-chevron-right"></i>
                          </li>
                        </ul>
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

export default Courses;
