import React from 'react'
import myImg from '../../assets/Atmosphere-PNG-Pic.png'
import styles from './clicker.module.scss'

export const Clicker = () => {
  return (
    <div>
        <img src={myImg} alt="img not found" />
        <h2>Click me!</h2>
    </div>
  )
}
