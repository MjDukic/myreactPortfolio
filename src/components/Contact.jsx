import React from 'react';

//guidance from tailwind components

const Contact = () => {
  return (
    <section id="contact">
      <div class="py-15 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="pt-60 mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-600">
          Contact Me
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          I would love to hear from you!
        </p>
        <form action="#" class="space-y-8">
          <div>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-blue-500 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="subject"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Any further questions or comments..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-2 py-1 rounded-lg mt-3 hover:bg-blue-600"
          >
            send message
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contact
