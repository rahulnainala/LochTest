import React from "react";

const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center px-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
        <div>
          <img src="/public/Images/Cohorts 1.png" alt="Testimonial" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-end">
          <div className="flex items-center justify-end">
            <img
              src="/public/Images/Eye.png"
              height={32}
              width={32}
              alt="Icon"
            />
          </div>
          <div>
            <h4 className="lg:text-3xl flex items-center lg:justify-end m-0 font-medium text-gray-200">
              Watch what the whales are doing
            </h4>
          </div>
          <div>
            <p className="flex items-center justify-end m-0 text-base lg:font-medium text-gray-200 max-w-90">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <p className="text-right text-white text-2xl mx-4 pb-3 font-semi">
          Testimonials
        </p>
        <hr className="border-b border-gray-300 mx-4" />
      </div>
    </section>
  );
};

export default Testimonials;
