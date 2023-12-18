import * as React from 'react'
import Navbar from './navigation'
import {
  background,
  container,
} from './layout.module.css'

const Layout = ({ children }) => {
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
