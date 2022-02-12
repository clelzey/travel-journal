import React from "react"
import Navbar from "./components/Navbar"
import Location from "./components/Location"
import data from "./data"

export default function App() {
    const myTravel = data.map( site => <Location key={site.id} {...site}/>)
    
    return(
        <div>
            <Navbar />
            <section className="travel">
                {myTravel}
            </section>
        </div>
    )
}