import { useState } from "react";
import questions from "./Questions";

const Buttons = () => {
    
    const amountQuestions = questions.length;
    const [count, setCount] = useState(0);
    const [points, setPoints] = useState(0);

    let Options = (i) =>
    {
        setCount(count+1)
        if (questions[count].answer === i)
        {
            setPoints(points+1)
        }
    }

    const A = () =>{Options('A')}
    const B = () =>{Options('B')}
    const C = () =>{Options('C')}
        
    return (
        <>
        { count < amountQuestions ? <p>{questions[count].quest}</p> : ''}
        { count < amountQuestions ? <button onClick={A}> {questions[count].options[0]} </button> : ''}
        { count < amountQuestions ? <button onClick={B}> {questions[count].options[1]} </button> : ''}
        { count < amountQuestions ? <button onClick={C}> {questions[count].options[2]} </button> :''}

        {count === amountQuestions ? 
         <> 
            <p>Your correct answers : {points}</p> <button><a href="index.html">Try again</a></button> </> : ''}
        </>
    )
}

export default Buttons