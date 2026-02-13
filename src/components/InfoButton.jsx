import { useId, useState, useEffect } from 'react'

const InfoButton = ({ children, balloonText, onClick }) => {
    const buttonId = useId();
    const spanId = useId();
    const [showBalloon, setShowBalloon] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setShowBalloon(!showBalloon);
        onClick?.();
    };

    useEffect(() => {
        const handleOutsideClick = () => {
            setShowBalloon(false);
        };

        if (showBalloon) {
            document.addEventListener('click', handleOutsideClick);
            return () => document.removeEventListener('click', handleOutsideClick);
        }
    }, [showBalloon]);

    return (
        <>
            <button id={buttonId} onClick={handleClick} className={showBalloon ? 'balloon-active' : ''}>
                {children}
                <span id={spanId} className={`balloon ${showBalloon ? 'show' : ''}`}>{balloonText}</span>
            </button>
        </>
    )
}

export default InfoButton