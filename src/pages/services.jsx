import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "/styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Navbar />
      <main className={` ${styles.main}`}>
        <div className={` ${styles.banner}`}>
          <Image
            src="/images/services-page.jpg"
            alt="Banner Image"
            class="img-fluid"
            height={200}
            width={800}
          />
          <div className={`${styles.bannerCaption}`}>
            <h2 className={`${styles.bannerTitle}`}>Our Services</h2>
            <p className={`${styles.bannerText}`}></p>
          </div>
        </div>

        <div className={` ${styles.section1}`}>
          <div className={`${styles.serviceheading}`}>
            <p>
              We offer a wide variety of engineering services, ranging from
              comprehensive project management and consultation to innovative
              design solutions and efficient construction implementation.
            </p>
          </div>
          <div className={`row ${styles.sections}`}>
            <div className={`col-lg-6 ${styles.servicediv}`}>
              <div>
                <h2>Welding and Fabrication</h2>
                <p>
                  Our welding and fabrication services offer precise and
                  reliable solutions for all your metalwork needs. Our skilled
                  welders and fabricators use advanced techniques and equipment
                  to ensure the highest quality and durability of the final
                  products. Whether you require custom metal fabrication,
                  structural welding, or repairs, our team is ready to deliver
                  exceptional results.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-6 ${styles.imageContainerParent} ${styles.noPadding}`}
            >
              <div className={`${styles.imageContainer}`}>
                <Image
                  src="/images/services/welding.jpg"
                  fill
                  className={styles.image}
                  alt="welding"
                />
              </div>
            </div>
            <div
              className={`col-lg-6 ${styles.imageContainerParent} ${styles.noPadding}`}
            >
              <div className={`${styles.imageContainer}`}>
                <Image
                  src="/images/services/machining1.jpg"
                  fill
                  className={styles.image}
                  alt="machining"
                />
              </div>
            </div>
            <div className={`col-lg-6 ${styles.servicediv}`}>
              <div>
                <h2>Machining</h2>
                <p>
                  With our state-of-the-art machining capabilities, we provide
                  precision machining services for various industries. Our
                  experienced machinists use advanced CNC equipment to produce
                  intricate parts with tight tolerances. From prototyping to
                  large-scale production, we deliver superior machining
                  solutions tailored to your specifications.
                </p>
              </div>
            </div>

            <div className={`col-lg-6 ${styles.servicediv}`}>
              <div>
                <h2>Lagging and Cladding</h2>
                <p>
                  Our lagging and cladding services provide insulation and
                  protection for piping systems and equipment. We use premium
                  materials and follow industry best practices to ensure
                  efficient thermal insulation, corrosion resistance, and
                  improved energy efficiency. Trust us to deliver reliable
                  lagging and cladding solutions for your industrial needs.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-6 ${styles.imageContainerParent} ${styles.noPadding}`}
            >
              <div className={`${styles.imageContainer}`}>
                <Image
                  src="/images/services/lagging.jpg"
                  fill
                  className={styles.image}
                  alt="lagging"
                />
              </div>
            </div>

            <div
              className={`col-lg-6 ${styles.imageContainerParent} ${styles.noPadding}`}
            >
              <div className={`${styles.imageContainer}`}>
                <Image
                  src="/images/services/consultancy2.jpg"
                  fill
                  className={styles.image}
                  alt="consultancy"
                />
              </div>
            </div>
            <div className={`col-lg-6 ${styles.servicediv}`}>
              <div>
                <h2>Engineering Consultancy</h2>
                <p>
                  Our engineering consultancy services encompass a wide range of
                  expertise, including feasibility studies, design optimization,
                  and project planning. We collaborate closely with clients to
                  understand their goals and provide tailored engineering
                  solutions. With our consultancy services, you can make
                  informed decisions, mitigate risks, and achieve successful
                  project outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          className={` ${styles.section5}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Looking for a First-Class Engineering Services?</h4>
          <Link className={`btn btn-primary ${styles.btn1}`} href="/contact">
            Contact Us
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
