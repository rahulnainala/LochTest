import React, { useState, useEffect } from "react";

const NotificationPanel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex justify-center lg:px-10">
      <div className="grid lg:grid-cols-2 lg:p-10 p-5 grid-cols-1 gap-2">
        <div className="flex items-start flex-col justify-center gap-4">
          <img
            src="/public/Images/Bell.png"
            height={32}
            width={32}
            alt="Bell Icon"
          />
          <h4 className="lg:text-3xl font-medium text-gray-200">
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className="lg:text-base font-medium text-gray-200">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="flex flex-row overflow-hidden items-center">
          <div
            className="carousel-container"
            style={{
              transform: `translateX(${-carouselIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
            }}
          >
            <img
              src="/public/Images/Card1.png"
              alt="Card 1"
              className="image-card"
            />
            <img
              src="/public/Images/Card2.png"
              alt="Card 2"
              className="image-card opacity-95"
            />
            <img
              src="/public/Images/Card3.png"
              alt="Card 3"
              className="image-card opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationPanel;
