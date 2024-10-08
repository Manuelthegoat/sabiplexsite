import React from "react";

const NotFound = () => {
  return (
    <>
    <div className="space"></div>
      <div class="rts-404-area-start">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-content">
                <h1 class="title">404</h1>
                <h2 class="title">PAGE NOT FOUND</h2>
                <p class="disc">
                  Sorry, the page you seems looking for, has been moved,
                  redirected or removed permanently.
                </p>
                <a href="/" class="rts-btn btn-primary">
                  GO BACK HOME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
