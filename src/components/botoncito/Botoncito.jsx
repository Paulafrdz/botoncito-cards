import React from 'react'
import './Botoncito.css'

const Botoncito = ({text = "", onClick = () => {}, isActive = false }) => {
  return (
    <button className={`botoncito ${isActive ? 'active' : ''}`}
    onClick={onClick}> 
        {text} {/* Boton */}
    </button>

  )
}

export default Botoncito