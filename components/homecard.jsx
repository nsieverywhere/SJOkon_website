import styles from "/styles/homecard.module.css";
import Image from "next/image";

const Homecard = (props) => {
  return (
    <div className={`col ${styles.cardcol}`}>
      <div
        className="card"
        style={{
          margin: "0 auto",
          height: "700px",
          maxWidth: "400px",
          backgroundColor: "transparent",
          paddingBottom: "3rem",
        }}
      >
        <div>
          <Image
            src={props.imageUrl}
            alt={props.altText}
            style={{}}
            className="card-img-top"
            width={500}
            height={500}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
