import React from "react";
import '../css/Button.css'

export default function Fibonacci(){

    return(
        <div className="didyouknow">
            <p className="didyouknow-title">☑️ Did you know ?</p>
            <p className="didyouknow-desc">The current number is a <a href="https://en.wikipedia.org/wiki/Fibonacci_sequence" target="_blank" rel="noopener noreferrer">Fibonacci sequence</a>'s number.</p>
        </div>
    );
}