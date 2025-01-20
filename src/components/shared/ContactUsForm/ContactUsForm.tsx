const ContactUsForm = () => {
    return (
      <div className="bg-[#F8F8F8] p-8 rounded-xl shadow-md max-w-4xl  mx-auto">
        <form className="    grid grid-cols-1 sm:grid-cols-2 gap-6 md:px-12 md:py-10">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-xl md:text-[22px]  font-semibold text-black"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              className=" block w-full px-6 py-4 my-2 rounded-3xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
  
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-xl md:text-[22px] font-semibold text-gray-700"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              className=" block w-full px-6 py-4 my-2 rounded-3xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
  
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl md:text-[22px]  font-semibold text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className=" block w-full px-6 py-4 my-2 rounded-3xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
  
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xl md:text-[22px] font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+1 234 5678"
              className=" block w-full px-6 py-4 my-2 rounded-3xl border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
  
          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-xl md:text-[22px] font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Leave your message"
              className=" block w-full rounded-[20px] p-6 my-2 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <div className="sm:col-span-2 lg:justify-start flex justify-center">
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
  