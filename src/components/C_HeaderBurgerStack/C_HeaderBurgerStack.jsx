import './C_HeaderBurgerStack.scss'
import React from 'react'
import A_HeaderBurgerButtons from '../A_HeaderBurgerButtons/A_HeaderBurgerButtons.jsx'
export default function C_HeaderBurgerStack() {
  return (
    <div className="C_HeaderBurgerStack">
      <A_HeaderBurgerButtons href="" buttonTitle="Библиотека" />
      <A_HeaderBurgerButtons href="" buttonTitle="Журнал" />
    </div>
  )
}
