import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import styles from "./Card.module.css";

const imgStyle = {
  width: "200px",
  height: "300px",
  marginTop: "200px",
  marginLeft: "200px",
};

export default function Card({ imgLink, name, price }) {
  return (
    <div>
      <img style={{ ...imgStyle }} src={imgLink} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

Card.propTypes = {
  imgLink: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Card.defaultProps = {
//   imgLink:
//     "https://lh3.googleusercontent.com/proxy/jbPEn7nV4XFHmXLZG03E-RsWSt6sWEzDOPR4MI_LQ0NXMeG7WV8hLpcS3e-2Yx5sd1kqoOb0cQ3Y6pvBzGPla7VuDrH_AloosUDRiDwjdbkhtAUyhd5S-RZ9gv4sKzcSYUb_dlqMmU7D9HnX_E2KVSljTTCboXnCGdn6B71kUfDa",
//   name: "bsdbdsbdsbdbds",
//   price: 2323232,
// };
