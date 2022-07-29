import React from "react";

export default function Main(props){
    return(
        <main>
            <img src={props.img} className="main--img"></img>
            <img src="../location.png"></img>
            <span className="main--country">{props.country}</span>
            <span className="main--link">View on Google Maps</span>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
            <span className="main--text">{props.description}</span>
        </main>
    );
}