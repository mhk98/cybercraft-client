import React from "react";
import contact from "./assets/Contact.jpg";

import logo from "../src/assets/Asset 1 1.png"
import { useCreateContactMutation } from "./features/contact/contact";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const ContactForm = () => {

  const [createContact] = useCreateContactMutation()


  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    const res = await createContact(data)

    if(res){
      toast('Successfully sent your information')
    }
  }

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E2ECFF] w-full">
      <div className="flex flex-col md:flex-row w-full ">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <img src={logo} alt="Logo" className="w-48 mb-4" />

          <p className="text-sm text-gray-600 mb-6 text-start">
            Welcome back to CyberCraft Bangladesh, <br/> where your creativity thrives
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
            <label className="block text-sm text-[#345485] text-start">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("fullName", { required: true })} 
             />
             {errors.fullName?.type === 'required' && <p role="alert">Full Name is required</p>}
            </div>
            <div className="mb-4">
            <label className="block text-sm text-[#345485] text-start">Email</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: true })} 
             />
             {errors.email?.type === 'required' && <p role="alert">Email is required</p>}

            </div>
            <div className="mb-4">
            <label className="block text-sm text-[#345485] text-start">Message</label>
              <textarea
                placeholder="Write message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("message", { required: true })} 
            />
             {errors.message?.type === 'required' && <p role="alert">Message is required</p>}
            
            </div>
            <button className="w-full p-3 text-white rounded-lg  transition" style={{backgroundColor:"#345485"}}>
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
