import React from 'react'
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mgvawlka");
    if (state.succeeded) {
        return (
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
                        <FaEnvelope className="inline-block mr-4 text-green-700" />
                        Contact Us
                    </h2>
                    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-12 text-center">
                        <FaCheckCircle className="text-green-700 text-5xl mx-auto mb-6" size={64} />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                        <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                </div>
            </section>
        );
    }
    return (
      <section id="contact" className="py-20 bg-gray-100 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
            <FaEnvelope className="inline-block mr-4 text-green-700" />
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}