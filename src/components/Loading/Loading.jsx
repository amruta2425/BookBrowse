import React from 'react'
import styles from './Loading.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
   <p className={styles.container__loading}><FontAwesomeIcon icon={faSpinner} spin className={styles.icon}/></p>
  )
}

export default Loading