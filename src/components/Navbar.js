import React from "react"
import worldIcon from "../images/planet-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--image" src={worldIcon} alt=""/>
            <h1>my travel journal.</h1>
        </nav>
    )
}