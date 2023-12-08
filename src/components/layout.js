import * as React from 'react'
import Navbar from './navigation'
import {
  background,
  container,
  heading,
} from './layout.module.css'
import CV from './cv'

const Layout = ({ pageTitle, children }) => {
    console.log(<CV />)
    return (
    <div className={background}>
        <Navbar />
        <main>
        <div className={container}>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </div>
        <CV />
        </main>
    </div>
    )
}

export default Layout
