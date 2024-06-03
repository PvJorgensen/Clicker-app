import React from 'react'
import { Progress } from '../components/Progress/Progress'
import { Clicker } from '../components/Clicker/Clicker'
import { Buttons } from '../components/Buttons/Buttons'

export const ClickerPage = () => {
  return (
    <div>
      <Progress />
      <Clicker />
      <Buttons text="Buy Solar Panel" />
      <Buttons text="Upgrades" />
    </div>
  )
}
