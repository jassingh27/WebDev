import React from "react";
import "./Contact.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="contact-page">
          <div className="background-image"></div>

          <div className="contact-form-wrapper">
            <div className="contact-form">
              <h2>Contact with Our Team</h2>
              <p>Your idea, our data, Melbourne future</p>

              <form action="/submit_form" method="post">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Company Email Address:</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Type Your Message Here:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
