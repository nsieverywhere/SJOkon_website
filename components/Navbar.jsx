import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={` navbar navbar-expand-lg  ${styles.navbar}`}>
      <div className={` container-fluid`}>
        <Image
          src="/images/sjokon_logo.png"
          alt="company_logo"
          width="100"
          height="50"
        />
        <Link className={`navbar-brand ${styles.navbarbrand}`} href="/">
          <h3 className={` ${styles.navlogo}`}>
            S.J OKON & SONS NIGERIA LIMITED
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className={` nav-item  ${styles.navitem}`}>
              <Link
                className={` nav-link  ${styles.navlink}`}
                aria-current="page"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className={` nav-item  ${styles.navitem}`}>
              <Link className={` nav-link  ${styles.navlink}`} href="/services">
                SERVICE
              </Link>
            </li>
            <li className={` nav-item  ${styles.navitem}`}>
              <Link className={` nav-link  ${styles.navlink}`} href="/about">
                ABOUT
              </Link>
            </li>
            <li className={` nav-item  ${styles.navitem}`}>
              <Link className={` nav-link  ${styles.navlink}`} href="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
