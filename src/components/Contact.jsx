import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mzzepdbq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <section id="contact" className="py-20">
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}