import React from "react";
import Signup from "../Components/Signup";
import Notifcationpanel from "../Components/Notifcationpanel";
import Testimonials from "../Components/Testimonials";
import Reviews from "../Components/Reviews";

const Body = () => {
  return (
    <div className="grid flex-row lg:grid-cols-2 gap-0 min-h-screen">
      <div className="flex flex-col custom-gradient bg-black text-white ">
        <div className="lg:notification-container">
          <Notifcationpanel />
        </div>
        <div className="lg:testimonials-container">
          <Testimonials />
        </div>
        <div className="lg:reviews-container">
          <Reviews />
        </div>
      </div>
      <div className="flex flex-col lg:px-40 lg:mx-20 py-20 min-w-fit justify-center items-center h-100 text-black">
        <Signup />
      </div>
    </div>
  );
};

export default Body;
