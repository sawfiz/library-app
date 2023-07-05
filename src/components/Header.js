import React from 'react'
import AddBook from './AddBook'
import logo from '../images/library.svg'

export default function Header() {
  return (
    <header>
        <img class="logo" src={logo} alt="" />
        <h1>
        My Reading List
        </h1>
      <AddBook />
    </header>
  )
}
