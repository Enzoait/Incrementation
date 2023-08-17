import {React, useState} from "react";
import Fibonacci from './Fibonacci';
import Warningalert from "./Warningalert";
import '../css/Fibonacci.css'

export default function Button(){
    const [currentValue, setCurrentValue] = useState(0);
    const [isFibonacci, setIsFibonacci] = useState(true);
    const [IsButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isThresholdAlmostReached, setIsThresholdAlmostReached] = useState(false);

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
            setIsThresholdAlmostReached(true);
        }

        if (currentValue === threshold) {
            setIsButtonDisabled(true);
        }
      
        if (currentValue < threshold) {
            setCurrentValue((prevValue) => prevValue + 1);
            const checkFibonacci = isFibonacciNumber(currentValue + 1);
            setIsFibonacci(checkFibonacci);
        }
    }

    return(
        <div className="button-box">
                
            {IsButtonDisabled ?
                <div className="label-and-button">
                    <Warningalert title="⚠️ Threshold Reached" description="Threshold has been reached. We've disabled the button to prevent further clicking."/>
                    <label>Click on the button to increase the current value.</label>
                    <button className="button-incrementation disabled" onClick={handleFunctions} disabled>Increase Value</button>
                    <label className="info">ⓘ Tip : You can reload the page to set the counter back to 0.</label>
                </div>
                :
                <div className="label-and-button">
                    {isThresholdAlmostReached ?
                        <Warningalert title="⚠️ Threshold Almost Reached" description="Threshold is almost reached, it is recommended you stop clicking the button."/>
                        :
                        null
                    }
                    <label>Click on the button to increase the current value.</label>
                    <button className="button-incrementation" onClick={handleFunctions}>Increase Value ↗</button>
                    <label className="info">ⓘ The threshold is set to {threshold}.</label>
                </div>
            }
            <div className="number-container">
            <p className="compteur">{currentValue}</p>
            {isFibonacci ?
            <Fibonacci/>
            :
            null}
            </div>
        </div>
    );
}