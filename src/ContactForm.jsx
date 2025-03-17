import React from "react";
import contact from "./assets/Contact.jpg";
const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto bg-[#E2ECFF] px-4 -mt-42"
   
    >
      <div className="flex w-full">
        {/* Left Section - Form */}
        <div className="w-full h-0 ">
          <h2 className="text-xl font-bold text-gray-800 mb-2">CyberCraft Bangladesh</h2>
          <p className="text-sm text-gray-600 mb-6">
            Welcome back to CyberCraft Bangladesh, where your creativity thrives
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full p-3 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-full  flex items-center justify-center">
          <img
            src={contact} // Replace with actual illustration
            alt="Illustration"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



