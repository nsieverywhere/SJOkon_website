import React from "react";
import styles from "/styles/Footer.module.css";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("Subscribe to our newsletter");

  const handler = async (e) => {
    // const payload = {
    //   email: email,
    // };
    // e.preventDefault();

    // try {
    //   const response = await fetch("/api/subscribe", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   const data = await response.json();

    //   function mailaction() {
    //     const successMessage = data.message;
    //     setSuccessMessage(successMessage);

    //     function clearmessage() {
    //       setSuccessMessage("Subscribe to our newsletter");
    //     }

    //     setTimeout(clearmessage, 3000);
    //   }

    //   if (response.ok) {
    //     mailaction();
    //   } else {
    //     mailaction();
    //   }
    // } catch (error) {
    //   console.log("Error occured:", error);
    // }
  };

  return (
    <footer className={` ${styles.footer}`}>
      <div className="row">
        <div className="col-lg-6">
          <div className={styles.socialLinks}>
            <Image
              src="/images/sjokon_logo.png"
              width="100"
              height="50"
              alt="logo"
              className={` ${styles.logo}`}
            />
            <p>
              S.J Okon & Sons Enterprise is Nigeria&apos;s No.1 engineering solution
              provider, our services range from consultation, procurment and
              installation of engineering facilities.
            </p>
            <a
              href="https://linkedin.com/sjokon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <h5>{successMessage}</h5>
          <form onSubmit={handler} className={styles.newsletterForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
            <br />
          </form>
        </div>
      </div>
      <p className={styles.footerText}>
        &copy; {currentYear} S.J Okon Enterprise. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
