import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
      <div className="title-container">
        <p className="title">War in Ukraine</p>
        <img className="map" src="ua-map-color.png" alt="img" />
      </div>
    </header>
  )
}
