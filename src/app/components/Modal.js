import React from 'react';

// const Modal = ({ children, isOpen, onClose }) => {
function Modal({children, isOpen, onClose}){
    return (
        <div className={`modal absolute top-0 w-full h-[100svh] z-[999] ${isOpen ? 'right-0' : 'right-[-100%] hidden'}`}>
            <div className={`modal-overlay ${isOpen ? 'absolute' : 'hidden'} top-0 left-0 w-full h-full bg-gray1 opacity-50`} onClick={onClose}></div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;