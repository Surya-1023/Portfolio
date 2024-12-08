import React from "react";

const ContactForm = () => {
  return (
    <form action="https://getform.io/f/adrrxnla" method="POST">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-600 bg-gradient-to-r from-emerald-500 via-blue-300 to-purple-300 border-none rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-600 bg-gradient-to-r from-emerald-500 via-blue-300 to-purple-300 border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-600 bg-gradient-to-r from-emerald-500 via-blue-300 to-purple-300 border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold rounded-md text-white uppercase transition-all duration-150 ease-linear bg-gradient-to-r from-emerald-500 to-purple-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;