import React from "react"
import { GlobalStyles } from "twin.macro"
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
    </>
  )
}
