import React, { Children } from 'react'
import Navbar from './navigation'
import {
  background,
  container,
  section
} from './layout.module.css'

const Layout = ({ children }) => {
    let wrappedChildren = Children.map(children, child => {
        return <div className={section}>{child}</div>;
    })

    return (
        <div className={background}>
            <Navbar />
            <main className={container}>
                    {wrappedChildren}
            </main>
        </div>
    );
}

export default Layout
