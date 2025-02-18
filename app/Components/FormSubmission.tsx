"use client";

import React, { useState } from "react";

export default function FormSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, phone } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: "formSubmission",
    //   name,
    //   email,
    //   message,
    //   phone,
    // };

    // client
    //   .create(contact)
    //   .then((data) => {
    //     setLoading(false);
    //     console.log(data);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      id="getQuote"
      className=" flex flex-col mb-14 items-center justify-center px-5 md:px-10 lg:px-14 gap-10 mx-auto w-full"
    >
      <h3 className=" text-[26px] leading-[42px] text-mainColor2 font-bold font-Raj">
        Leave a Reply
      </h3>
      {!isFormSubmitted ? (
        <>
          <div className=" w-full md:max-w-[95%] lg:max-w-[70%] flex flex-col gap-4 items-start justify-center">
            <div className=" w-full flex-col flex items-start gap-5 justify-center min-[872px]:flex-row min-[872px]:items-center ">
              <input
                type="text"
                placeholder="Full name*"
                name="name"
                onChange={handleChangeInput}
                className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
              />
              <input
                type="email"
                onChange={handleChangeInput}
                placeholder="Email*"
                name="email"
                className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
              />
              <input
                type="number"
                onChange={handleChangeInput}
                name="phone"
                placeholder="Phone*"
                className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
              />
            </div>
            <div className=" w-full">
              <textarea
                onChange={handleChangeInput}
                className=" border-mainColor2 outline-mainColor min-h-[300px] border rounded-lg p-4 w-full "
                placeholder="Your Message"
                name="message"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-primary-gradient mx-auto text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
          >
            {!loading ? "Send now" : "Sending..."}
          </button>
        </>
      ) : (
        <div className=" w-full p-4 bg-[#dddddd]">
          <p className=" text-base leading-[26px] font-liv font-normal text-center w-full">
            Thank you! Your submission has been received!
          </p>
        </div>
      )}
    </div>
  );
}
