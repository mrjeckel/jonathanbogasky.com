import React, { Children } from 'react';
import Navbar from './navigation';
import Footer from './footer';
import {
  background,
  container,
  section
} from './layout.module.css'

const Layout = ({ wrapChildren, children }) => {
    if (wrapChildren) {
        var wrappedChildren = Children.map(children, child => {
            return <div className={section}>{child}</div>;
        })
    }
    else {
        var wrappedChildren = children;
    }

    return (
        <div className={background}>
            <Navbar />
            <main className={container}>
                {wrappedChildren}
            </main>
            <Footer />
        </div>
    );
}

export default Layout
