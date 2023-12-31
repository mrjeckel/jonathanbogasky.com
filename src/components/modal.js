import React from 'react';
import { overlay, modal, modalClose } from './modal.module.css';

export default function Modal({ children, show, setShow }) {
        return show ? (
            <div className={overlay}
                onClick={() => {
                    if (show) {
                        setShow(false)
                    }
                }}
            >
                <div className={modal}>
                    <h3>Modal Window</h3>
                    <div>{children}</div>
                    <button className={modalClose} onClick={() => setShow(false)}>X</button>
                </div>
            </div>
        ) : null;
}
