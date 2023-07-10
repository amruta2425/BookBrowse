import React from "react";
import styles from "./Header.module.scss";
const Header = (props) => {
  const receivedDataForHeaderStyle = props.toggle;
  return (
    <div
    //Changing margin height based on the cards displayed
      className={`${
        receivedDataForHeaderStyle
          ? styles.container__header__align__aftersubmit
          : styles.container__header__align
      }`}
    >
      <h1 className={styles.header__title}>Book Browse</h1>
      
    </div>
  );
};

export default Header;
