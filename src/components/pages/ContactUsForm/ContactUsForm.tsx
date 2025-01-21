const ContactUsForm = () => {
  return (
    <div className="bg-[#F8F8F8] p-2 rounded-xl shadow-md max-w-[856px] mx-auto">
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-9 md:px-16 md:py-16">
      {/* First Name */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-xl md:text-[22px] font-semibold text-black"
        >
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          className="block w-full md:w-[346px] md:h-[51px] px-6 py-4 my-2 rounded-3xl  shadow-sm "
        />
      </div>
  
      {/* Last Name */}
      <div>
        <label
          htmlFor="lastName"
          className="block text-xl md:text-[22px] font-semibold "
        >
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Smith"
          className="block w-full md:w-[346px] md:h-[51px] px-6 py-4 my-2 rounded-3xl shadow-sm "
        />
      </div>
  
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xl md:text-[22px] font-semibold "
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="block w-full md:w-[346px] md:h-[51px] px-6 py-4 my-2 rounded-3xl  shadow-sm "
        />
      </div>
  
      {/* Phone Number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-xl md:text-[22px] font-semibold "
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+1 234 5678"
          className="block w-full md:w-[346px] md:h-[51px] px-6 py-4 my-2 rounded-3xl  shadow-sm "
        />
      </div>
  
      {/* Message */}
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-lg md:text-xl font-semibold  mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave your message"
          className="w-full md:w-[705px] md:h-[179px] rounded-[20px] px-6 py-4 border  shadow-sm    resize-none"
        ></textarea>
      </div>
  
      {/* Submit Button */}
      <div className="sm:col-span-2 lg:justify-start sm:pt-5 flex justify-center">
        <button
          type="submit"
          className="bg-yellow-primary w-full md:w-[194px] text-black font-bold px-8 py-3 rounded-full focus:ring focus:ring-yellow-100"
        >
          Schedule A Call
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default ContactUsForm;
