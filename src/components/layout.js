import * as React from 'react'
import Navbar from './navigation'
import {
  background,
  container,
  heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={background}>
      <Navbar />
      <main>
        <div className={container}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
