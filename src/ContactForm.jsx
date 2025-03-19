// import React from "react";
// import contact from "./assets/Contact.jpg";
// const ContactForm = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen mx-auto bg-[#E2ECFF]"
   
//     >
//       <div className="flex w-full">
//         {/* Left Section - Form */}
//         <div className="w-full h-0 ">
//           <h2 className="text-xl font-bold text-gray-800 mb-2">CyberCraft Bangladesh</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Welcome back to CyberCraft Bangladesh, where your creativity thrives
//           </p>
//           <form>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <textarea
//                 placeholder="Write message"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button className="w-full p-3 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition">
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Right Section - Illustration */}
//         <div className="w-full  flex items-center justify-center">
//           <img
//             src={contact} // Replace with actual illustration
//             alt="Illustration"
//             className="w-2/3"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



import React from "react";
import contact from "./assets/Contact.jpg";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E2ECFF] w-full">
      <div className="flex flex-col md:flex-row w-full ">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">CyberCraft Bangladesh</h2>
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
        <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-100 p-6 h-full">
          <img
            src={contact}
            alt="Illustration"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
