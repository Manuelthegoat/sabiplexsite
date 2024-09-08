import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import NotFound from "./Pages/NotFound";
import Cart from "./Components/Cart";
import TestPage from "./Components/TestPage";
import ProductsDetails from "./Pages/ProductsDetails";
import CourseDetails from "./Components/CourseDetails";
import Courses from "./Pages/Courses";
import BecomeAnInstructor from "./Pages/BecomeAnInstructor";
import Pricing from "./Pages/Pricing";

const Routing = ({ productItems, cartItems }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop productItems={productItems} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductsDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testing" element={<TestPage />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/become-an-instructor" element={<BecomeAnInstructor />} />
      </Routes>
    </>
  );
};

export default Routing;
