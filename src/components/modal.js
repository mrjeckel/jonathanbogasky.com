import React from 'react';
import { overlay, modal, modalBody, modalClose } from './modal.module.css';

export default function Modal({ children, show, setShow }) {
        return show ? (
            <div className={overlay}
                onClick={() => {
                    if (show) {
                        setShow(false)
                    }
                }}
            >
                <div className={modal} onClick={e => {e.stopPropagation()}}>
                    <div className={modalBody}>{children}</div>
                    <button className={modalClose} onClick={() => setShow(false)}>X</button>
                </div>
            </div>
        ) : null;
}
