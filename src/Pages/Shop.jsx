import React from "react";
import { dummyData } from "../dummydata";

const Shop = () => {
  return (
    <>
      <div className="space2"></div>
      {/* <div>space</div> */}
      <div class="shopping-area-start rts-section-gap">
        <div class="container">
          <div class="row align-items-center rs-vertical-middle shorting mb-50 md-mb-30">
            <div class="col-lg-6 col-12">
              <p class="woocommerce-result-count">Showing 1-9 of 12 results</p>
            </div>
            <div class="col-lg-6 col-12 sm-mt-20">
              <select class="from-control">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by lates</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          <div class="row g-24 mt--0">
            {dummyData.map((item) => (
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb--30">
              <div class="single-shopping-product">
                <a href="product-details.html" class="thumbnail">
                  <img src={item.image} alt="shopping" />
                </a>
                <div class="inner-content">
                  <a href="product-details.html">
                    <h6 class="title">{item.title}</h6>
                  </a>
                  <div class="button-cart-area">
                    <div class="inner">
                      <div class="pricing-area">
                        <span class="active">₦{item.price}</span>
                        <span class="none">₦{item.discount}</span>
                      </div>
                      <a href="product-details.html" class="cart-btn">
                        <i class="fa-regular fa-cart-shopping"></i>
                        <span>Buy Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
           
          </div>
          <div class="row g-24 mt--0"></div>
          <div class="row mt--30">
            <div class="col-lg-12">
              <div class="rts-elevate-pagination">
                <ul>
                  <li>
                    <button class="active">01</button>
                  </li>
                  <li>
                    <button>02</button>
                  </li>
                  <li>
                    <button>03</button>
                  </li>
                  <li>
                    <button>04</button>
                  </li>
                  <li>
                    <button>
                      <i class="fa-solid fa-chevrons-right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
