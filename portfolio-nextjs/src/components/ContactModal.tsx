"use client";
import { useState } from "react";
import FormSection from "./FormSection";

export default function ContactModal() {
    const [openModal, setOpenModal] = useState(false);

    const open = () => setOpenModal(true);
    const close = () => setOpenModal(false);

    return (
        <>

            <button className="btn btn-primary" onClick={open}>Send Me a Message</button>
            {openModal &&<div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out" id="modalBackdrop">
                <div className="modal-container" id="modalContainer" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                    <button onClick={close} className="modal-close" id="modalClose" aria-label="Close modal">✕</button>
                    <FormSection />
                </div>
            </div>}
        </>
    );
};
