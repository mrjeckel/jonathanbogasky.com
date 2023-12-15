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
            <main className={container}>
                    {children}
            </main>
        </div>
    )
}

export default Layout
