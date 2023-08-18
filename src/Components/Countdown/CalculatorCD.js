import React, {useState , useEffect} from "react";
import Countdown from "./Countdown";

const Calculator = () =>{
    const targetDate = new Date("2023-10-18T00:00:00");
    
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return {
            days,
            hours,
            minutes,
            seconds
        };
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);
   
    return(
        <Countdown days={timeLeft.days} minutes={timeLeft.minutes} hours={timeLeft.hours} seconds={timeLeft.seconds}/>
    )
} 
export default Calculator;