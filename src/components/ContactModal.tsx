"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FormSection from "./FormSection";

export default function ContactModal() {
    const [modal, setModal] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Standard body overflow lock when modal is open
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [modal]);

    // Handle Escape key press to close modal
    useEffect(() => {
        if (!modal) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setModal(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modal]);

    const toggle = () => setModal(!modal);

    // Stop wheel/touchmove scroll events from bubbling up to Lenis/window
    const handleScrollLock = (e: React.WheelEvent | React.TouchEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <button className="btn btn-primary" onClick={toggle}>Send Me a Message</button>
            {mounted && createPortal(
                <div 
                    className={`modal-backdrop ${modal ? 'open' : ''}`} 
                    id="modalBackdrop"
                    onClick={(e) => {
                        // Close only if clicking the backdrop backdrop, not the container
                        if (e.target === e.currentTarget) {
                            setModal(false);
                        }
                    }}
                    // onWheel={handleScrollLock}
                    // onTouchMove={handleScrollLock}
                    inert={!modal ? true : undefined}
                >
                    <div className="modal-container" id="modalContainer" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                        <button onClick={() => {toggle();}} className="modal-close" id="modalClose" aria-label="Close modal">✕</button>
                        <FormSection isOpen={modal} />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};
