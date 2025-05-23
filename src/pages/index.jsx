import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/card";
import Footer from "../../components/Footer";
import Link from "next/link";
import Homecard from "../../components/homecard";

export default function Home() {
  return (
    <>
      <Head>
        <title>S.J Okon Enterprise</title>
        <meta
          name="description"
          content="Nigeria's number 1 engineering solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/images/sjokon_engineering_2.jpg"
                className={`d-block w-100 ${styles.sliderimg}`}
                alt="sjokon_slide1"
                width={800}
                height={600}
              />
              <div className={` ${styles.carouseloverlay}`}>
                <h2>S.J Okon & Sons Enterprise</h2>
                <p>
                  S.J Okon is an Engineering company that specializes in
                  consulting, engineering and installation of engineering parts
                  and facilities.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/images/sjokon_engineering_1.jpg"
                alt="sjokon_slide2"
                width={800}
                height={600}
                className={`d-block w-100 ${styles.sliderimg}`}
              />

              <div className={` ${styles.carouseloverlay}`}>
                <h2>Engineering Services</h2>
                <p>
                  We <span style={{ fontWeight: "bold" }}>Focus</span> on
                  engineering the most efficient solutions that solve your
                  business challenges.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src="/images/sjokon_engineering_3.jpg"
                className={`d-block w-100 ${styles.sliderimg}`}
                alt="Sjokon_slide3"
                width={800}
                height={600}
              />
              <div className={` ${styles.carouseloverlay}`}>
                <h2>Our Partners trust us</h2>
                <p>
                  We work with various first-class companies in the industry,
                  and deliver technical solutions in a timely manner.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <section
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
        </section> */}
        {/* <section className={` ${styles.section1}`}>
          <h2>Why work with Us? </h2>

          <div className={`row ${styles.cardContainer}`}>
            <Card
              heading="Expertise"
              text="We have a team of experienced engineers specialized in various disciplines."
              image="/images/engineering.png"
            />
            <Card
              heading="Innovation"
              text="We bring fresh perspectives and innovative ideas to tackle complex challenges."
              image="/images/innovation.png"
            />
            <Card
              heading="Timely Delivery"
              text="We prioritize project timelines, ensuring prompt and efficient delivery."
              image="/images/timing.png"
            />
          </div>
        </section> */}
        <section className={`row ${styles.section2}`}>
          <div className={`col-lg-6 ${styles.imageContainertext}`}>
            <h1>
              <span>
                &quot;At S.J Okon Enterprise, we focus on engineering the
                future.&quot;
              </span>
            </h1>
            <p className={`${styles.subtext}`}>In need engineering solution?</p>
            <Link href="/contact" className={`btn btn-primary ${styles.btn1}`}>
              Contact Us
            </Link>
          </div>
          <div className={`col-lg-6 ${styles.imageContainer}`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/S.J_OKON_VEST.jpg"
                alt="sjworking"
                height={600}
                width={450}
              />
            </div>
          </div>
        </section>
        <section className={`row ${styles.section4}`}>
          {/* section 4 entering */}
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <Homecard
              imageUrl="/images/S.J_OKON_FAN_INSTALLATION.jpg"
              altText="S.J OKON VEST"
              title="Premium Engineering Equipment Supply"
              description="Supplying top-tier industrial fans and engineering components to power your operations. Quality products that deliver efficiency and reliability every time"
            />
            <Homecard
              imageUrl="/images/S.J_OKON_MAN_WELDING.jpg"
              altText="S.J OKON VEST"
              title="Precision Welding Services"
              description="Delivering expert welding solutions with unmatched precision and durability. Our skilled craftsmen ensure every joint meets the highest engineering standards."
            />
            <Homecard
              imageUrl="/images/S.J_OKON_MAN_PAINTING.jpg"
              altText="S.J OKON PAINTING"
              title="Industrial Painting & Finishing"
              description="Protect and beautify your structures with our professional painting services. We apply high-performance coatings designed to withstand the toughest conditions."
            />

            <Homecard
              imageUrl="/images/S.J_OKON_MEN_HOLDING_DOOR.jpg"
              altText="S.J OKON VEST"
              title="Custom Metal Fabrication"
              description="From design to installation, we specialize in crafting high-quality fabricated doors and structures tailored to your project’s exact specifications."
            />
          </div>
        </section>
        <section className={`row ${styles.section3}`}>
          <div className={`col-lg-12 ${styles.partner}`}>
            <h2>Our Partners</h2>
          </div>
          <div className="row">
            <div className={`col-lg-4 ${styles.partnerlogo}`}>
              <Image
                src="/images/Guinness-Logo.png"
                alt="Guinness"
                height={80}
                width={150}
              />
            </div>
            <div className={`col-lg-4 ${styles.partnerlogo}`}>
              <Image
                src="/images/Diageo-Logo.png"
                alt="Diageo"
                height={80}
                width={150}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
