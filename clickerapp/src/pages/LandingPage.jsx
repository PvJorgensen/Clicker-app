import React from 'react'
import { Link } from 'react-router-dom'
import { ClickerPage } from './ClickerPage'
import { Buttons } from '../components/Buttons/Buttons'
import { Header } from '../components/Header/Header'
import styles from './landing.module.scss'
import { FunText } from '../components/FunText/FunText'

export const LandingPage = () => {
  return (
    <>
    <div className={styles.gridContainer}>
    <Header />
    <Buttons text="Start" />
    <FunText />
    </div>
    </>
  )
}
