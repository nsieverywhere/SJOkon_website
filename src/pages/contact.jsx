import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "/styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handler = async (e) => {
    // const payload = {
    //   name: name,
    //   email: email,
    //   message: message, 
    // }
    // e.preventDefault();

    // try {
    //   const response = await fetch("/api/contact", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   const data = await response.json();

    //   function mailaction() {
    //     const successMessage = data.message;
    //     setSuccessMessage(successMessage)

    //     function clearmessage() {
    //       setSuccessMessage("")
    //     }

    //     setTimeout(clearmessage, 2000);
    //   }

    //   if (response.ok) {
    //     mailaction()
        
    //   } else {
    //     mailaction()
    //   }

      
    // }
    // catch(error) {
    //   console.log('Error occured:', error);
    // }

  };

  return (
    <>
      <main>
        <Navbar />
        <section className={`row ${styles.section1}`}>
          <div className="col-lg-6">
            <div className="container">
              <div className="row ">
                <div className="">
                  <div className="contact-form">
                    <h2>Contact Us</h2>

                    <p></p>
                    <form onSubmit={handler}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="5"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <button type="submit" className={` ${styles.btnSubmit}`}>
                        Submit
                      </button>
                      <p>{successMessage}</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={` ${styles.location}`}>
              <div>
                <h3>contact details</h3>
                <p>
                  <Image
                    src="/images/pin.png"
                    width="20"
                    height="20"
                    className={` ${styles.icon}`}
                    alt="location"
                  />
                  1, Okon Close, Meiran, Lagos, Nigeria.
                </p>
                <p>
                  <Image
                    src="/images/phone-call.png"
                    width="20"
                    height="20"
                    className={` ${styles.icon}`}
                    alt="phone_number"
                  />
                  +234 8027692851
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
