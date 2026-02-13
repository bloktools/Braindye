import React from 'react'

const Hero = ({children, backgroundUrl}) => {
  return (
    <section style={{backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="hero">
        {children}
    </section>
  )
}

export default Hero