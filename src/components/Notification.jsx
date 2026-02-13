import React from 'react'

const Notification = ({ title, message}) => {
    const myId = React.useId();

    const clickHandler = (e) => {
        document.getElementById(myId).style.display = 'none'
    }

    return (
        <div id={myId} className='notification' onClick={clickHandler}>
            <h3>{title}</h3>
            <p>{message}</p>
            <span className="dismiss">Click this notification to dismiss.</span>
        </div>
    )
}

export default Notification