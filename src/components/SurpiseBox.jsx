import React, { useEffect, useRef, useState } from 'react'
import './SurpriseBox.css';

export const SurpiseBox = ({ audio, cover }) => {
    const containerRef = useRef(null);
    const spanRef = useRef(null);
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleCaptureEvents = (e) => {
            if (e.type === 'click' && spanRef.current && spanRef.current.contains(e.target)) {
                setIsOpen(true);
            }
            
            e.stopPropagation();
        };

        const events = ['mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup', 'click'];

        events.forEach(eventName => {
            container.addEventListener(eventName, handleCaptureEvents, true);
        });

        return () => {
            events.forEach(eventName => {
                container.removeEventListener(eventName, handleCaptureEvents, true);
            });
        };
    }, []);

    return (
        <div className='surpriseBox' ref={containerRef}>
            <span
                ref={spanRef}
                className={isOpen ? 'active' : ''}
                style={{ backgroundImage: `url("${cover}")` }}
            />
            <audio src={audio} controls style={{ alignSelf: "center" }} />
        </div>
    );
};