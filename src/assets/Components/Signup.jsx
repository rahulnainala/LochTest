import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div>
      <section>
        <h1 className="text-4xl text-gray-300 pb-5">
          Sign up for <br /> exclusive access.
        </h1>
        <div className="pb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex rounded-md text-gray-300 p-2 shadow-md">
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Your email address"
                className="bg-transparent text-black focus:outline-none flex-grow transition-all duration-300 ease-in-out border border-gray-400 px-3 py-2"
                onMouseOver={(e) =>
                  (e.target.style.border = "2px solid #4CAF50")
                }
                onMouseOut={(e) => (e.target.style.border = "1px solid #ccc")}
              />
            </div>
            {errors.email && (
              <p style={{ color: "red", width: "100%" }}>
                {errors.email.message}
              </p>
            )}
            <div className="flex pb-5">
              <button
                type="submit"
                className="rounded-md bg-gray-900 text-white px-4 py-2 flex-grow transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>

        <span className="font-semi">
          You’ll receive an email with an invite link to join.
        </span>
      </section>
    </div>
  );
};

export default Signup;
