import React from 'react'
import styles from './buttons.module.scss'
import { Link } from 'react-router-dom'

export const Buttons = ({text}) => {
  return (
    <div className={styles.btnWrapper}>
    <Link to="clicker"><button className={styles.btn}>{text}</button></Link>
    </div>
  )
}
