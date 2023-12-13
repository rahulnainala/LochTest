import React from "react";

const data = [
  {
    name: "Jack F",
    position: "Ex Blackrock PM",
    desc: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    position: "Research, 3poch Crypto Hedge Fund",
    desc: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted",
  },
  {
    name: "Shiv S",
    position: "Co-Founder Magik Labs",
    desc: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];

const Reviews = () => {
  return (
    <section className="flex justify-center p-10">
      <div className="lg:flex lg:items-start grid gap-4">
        <img
          src="/Images/Vector.png"
          height={60}
          width={60}
          alt="Bell Icon"
          className="mr-4"
        />
        <div className="flex flex-row overflow-x-auto">
          {data.map((review, index) => (
            <div
              key={index}
              className="p-4 shadow-md mr-4 lg:max-w-xl lg:max-h-80 overflow-hidden text-left bg-white rounded-md"
              style={{ flex: "0 0 auto" }}
            >
              <div className="mt-4">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-gray-500">{review.position}</p>
                </div>
                <p className="mt-2 text-gray-800">{review.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
