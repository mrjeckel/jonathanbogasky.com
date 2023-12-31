import React, { Children, useState } from 'react';
import Navbar from './navigation';
import Footer from './footer';
import Modal from './modal';
import {
  background,
  container,
  section
} from './layout.module.css'
import ContactMe from '../pages/letschat';

const Layout = ({ wrapChildren, children }) => {
    const [show, setShow] = useState(false)
    const modalOpen = () => setShow(true)

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
                {ContactMe()}
            </Modal>
            <main className={container}>
                {wrappedChildren}
            </main>
            <Footer modalOpen={modalOpen} />
        </div>
    );
}

export default Layout
