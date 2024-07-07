import React from "react";
import CountUp from 'react-countup';

const Count = () => {
  return (
    <>
      <div class="fun-facts-area-1 shape-move bg_image ptb--50">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="fun-facts-main-wrapper-1">
                <div class="single-fun-facts">
                  <div class="icon">
                    <img src="assets/images/fun-facts/01.svg" alt="icon" />
                  </div>
                  <h5 class="title">
                    <CountUp start={0} end={65972} class="counter"/>
                  </h5>
                  <span class="enr">Students Enrolled</span>
                </div>

                <div class="single-fun-facts">
                  <div class="icon">
                    <img src="assets/images/fun-facts/02.svg" alt="icon" />
                  </div>
                  <h5 class="title">
                  <CountUp start={0} end={5321} class="counter"/>
                  </h5>
                  <span class="enr">Completed Course</span>
                </div>

                <div class="single-fun-facts">
                  <div class="icon">
                    <img src="assets/images/fun-facts/03.svg" alt="icon" />
                  </div>
                  <h5 class="title">
                  <CountUp start={0} end={44239} class="counter"/>
                  </h5>
                  <span class="enr">Students Learner</span>
                </div>

                <div class="single-fun-facts">
                  <div class="icon">
                    <img src="assets/images/fun-facts/04.svg" alt="icon" />
                  </div>
                  <h5 class="title">
                  <CountUp start={0} end={77896} class="counter"/>
                  </h5>
                  <span class="enr">Students Enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-image">
          <div class="shape one" data-speed="0.04" data-revert="true">
            <img src="assets/images/banner/15.png" alt="" />
          </div>
          <div class="shape three" data-speed="0.04">
            <img src="assets/images/banner/16.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
