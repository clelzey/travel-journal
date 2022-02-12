import React from "react"
import locationIcon from "../images/location-icon.png"


export default function Location(props) {
    return(
        <div className="location">
            <img
                className="location--img"
                src={props.imageUrl}
                alt={props.title}
            />
            <div className="location--info">
                <h4 className="location--country">
                    <img className="location--icon" src={locationIcon} alt=""/>
                    {props.location.toUpperCase()}
                    <a className="location--map" 
                       href={props.googleMapsUrl}
                       target="_blank"
                       rel="noopener noreferrer">View on Google Maps</a>
                </h4>
                <h2 className="location--title">{props.title}</h2>
                <h3 className="location--dates">{`${props.startDate} - ${props.endDate}`}</h3>
                <div className="location--text">{props.description}</div>
            </div>
        </div>
    )
}