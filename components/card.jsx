import styles from "/styles/card.module.css";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className={`card col-lg-6 ${styles.card}`}>
      {/* <img src={props.image} class="card-img-top" alt="..." /> */}
      <Image
        className={` ${styles.cardImage}`}
        src={props.image}
        width="80"
        height="80"
        alt={props.image}
      />
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className={`card-title ${styles.cardtitle}`}>{props.heading}</h5>
        <p  className={`card-text ${styles.cardtext}`}>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
