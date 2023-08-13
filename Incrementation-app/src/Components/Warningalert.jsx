import React from "react";
import '../css/Warningalert.css'

export default function Warningalert({title, description}){

    return(
        <div className="warning-box">
            <p className="warning-title">{title}</p>
            <p className="warning-description">{description}</p>
        </div>
    );
}