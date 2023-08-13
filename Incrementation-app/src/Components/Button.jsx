import {React, useState} from "react";
import Fibonacci from './Fibonacci';
import '../css/Fibonacci.css'

export default function Button(){
    const [currentValue, setCurrentValue] = useState(0);
    const [isFibonacci, setIsFibonacci] = useState(true);

    const threshold = 30;
    const thresholdAlmostReachedValue = 25;

    const isFibonacciNumber = (number) =>{
        if (number === 1){
            return true;
        }

        let previous = 0;
        let current = 1;

        while (current<number){
            const new_current = previous + current;
            previous = current;
            current = new_current;

            if (current === number){
                return true;
            }
        }
        return false;
    }
    
    const handleFunctions = () => {
        if (currentValue === thresholdAlmostReachedValue) {
            alert(
              "Warning: Threshold is almost reached, it is recommended you stop clicking the button."
            );
        }

        if (currentValue === threshold) {
            alert(
              "Warning: Threshold has been reached. We've disabled the button to prevent further clicking."
            );
        }
      
        if (currentValue < threshold) {
            setCurrentValue((prevValue) => prevValue + 1);
            const checkFibonacci = isFibonacciNumber(currentValue + 1);
            setIsFibonacci(checkFibonacci);
        }
    }

    return(
        <div className="button-box">
            <div className="label-and-button">
                <label>Click the button to increase the current value.</label>
                <p className="compteur">{currentValue}</p>
                <button className="button-incrementation" onClick={handleFunctions}>Increase Value</button>
            </div>
            {isFibonacci ?
            <Fibonacci/>
            :
            null}
        </div>
    );
}