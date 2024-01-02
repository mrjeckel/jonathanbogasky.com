import React, { Children, useState } from 'react';
import Navbar from './navigation';
import Footer from './footer';
import Modal from './modal';
import ContactMe from './contact-me';
import {
  background,
  container,
  section
} from './layout.module.css'

const Layout = ({ wrapChildren, children }) => {
    const [show, setShow] = useState(false)
    const modalOpen = () => setShow(true)
    const modalClose = () => setShow(false)

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
            <Modal show={show} setShow={setShow}>
                <ContactMe modalClose={modalClose}/>
            </Modal>
            <main className={container}>
                {wrappedChildren}
            </main>
            <Footer modalOpen={modalOpen} />
        </div>
    );
}

export default Layout
