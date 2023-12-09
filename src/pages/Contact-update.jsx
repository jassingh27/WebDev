// Home.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <div>
            <Header />
            <main>
                {/* Your home page content goes here */}
                <h2 className="!m-0 !p-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Welcome to the Contact Page!
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-stretch">
                    {/* First Column */}
                    <div className="p-5 flex-1">
                        <img
                            src="src/assets/dashboard-background.png"
                            alt="ContactUS"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Second Column */}
                    <div className="flex-1 p-5">
                        <h2 className="!m-0 !p-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                            Contact with our team
                        </h2>
                        <p className="!m-0 !p-0 text-fuchsia-900 mb-4">
                            Your idea, our data, Melbourne's Future
                        </p>
                        <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-5/6">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Company Email Address"
                                className="w-full my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your Message Here....."
                                className="w-full h-40 my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button
                                type="submit"
                                className="w-full my-0.5 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
