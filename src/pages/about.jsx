import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "/styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <main className={` ${styles.main}`}>
        <div className={` ${styles.banner}`}>
          <Image
            src="/images/about-us-banner.jpg"
            alt="Banner Image"
            class="img-fluid"
            height={200}
            width={800}
          />
          <div className={`${styles.bannerCaption}`}>
            <h2 className={`${styles.bannerTitle}`}>Engineering Excellence</h2>
            <p className={`${styles.bannerText}`}>
              Welcome to S.J Okon Enterprise, your trusted partner for
              exceptional solutions. With a commitment to excellence and a
              passion for innovation, we specialize in providing a wide range of
              services to meet the diverse needs of our clients.
            </p>
          </div>
        </div>
        <div className={`row ${styles.section1}`}>
          <div className="col-lg-8">
            <div>
              <h1>We offer a Comprehensive Solution</h1>
              <p>
                As a comprehensive solutions provider, we offer a range of
                services that span across various industries. Our expertise lies
                in Engineering Consulting, Design, Installation, and Facility
                Management for industrial, commercial, and residential
                facilities. We pride ourselves on delivering results that align
                with international standards, ensuring that our clients receive
                the highest level of quality and compliance.
              </p>
            </div>
            <Image
              alt="checker"
              src="/images/about-page-image.jpg"
              height={1000}
              width={1000}
              className={`${styles.fullWidthImage}`}
            />

            <div className={`row ${styles.section2}`}>
              <div className="col-lg-4">
                <h5>Comprehensive Solutions</h5>
                <p>
                  As a comprehensive solutions provider, we offer a range of
                  services that span across various industries. Our expertise
                  lies in Engineering Consulting, Design, Installation, and
                  Facility Management for industrial, commercial, and
                  residential facilities.
                </p>
              </div>
              <div className="col-lg-4">
                <h5>Cutting-Edge Technology</h5>
                <p>
                  At S.J Okon Enterprise, we leverage the latest technology and
                  industry best practices to drive efficiency and deliver
                  optimal outcomes. Our team of skilled professionals stays
                  up-to-date with advancements in the field, enabling us to
                  provide innovative solutions tailored to our clients&apos;
                  unique requirements.
                </p>
              </div>
              <div className="col-lg-4">
                <h5>Customer-Centric Approach</h5>
                <p>
                  We value our clients and prioritize their satisfaction above
                  all else. Our customer-centric approach means that we listen
                  to our clients&apos; needs, understand their goals, and tailor
                  our solutions accordingly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className={` ${styles.contactcard}`}>
              <h5>We can help you with your engineering needs.</h5>
              <Link
                className={`btn btn-primary ${styles.btn1}`}
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
