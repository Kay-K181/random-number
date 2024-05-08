import React, { useState } from "react";

export default function RandomGen({value, setPage}){
    const [data, setData] = useState(
        {minimum: '', maximum: ''}
    )

    const [numberShown, setNumberShown] = useState([])

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setData(prevState => ({...prevState, [name]: value}))
    }

    function repeat(){
        const min = parseInt(data.minimum);
        const max = parseInt(data.maximum);

        if(min > max){
            alert('The minimum value cannot be greater than the maximum value');
            return;
        } else if (max > 500){
            alert('The maximum value cannot be greater than 500')
        } else {
            return Math.floor(Math.random() * (max - min + 1) ) + min;            
        }
    }

    function random(event){
        event.preventDefault()
        const numbers = [];

        for(let i = 0; i < value; i++){
            const randomNumber = repeat();
            if (randomNumber !== undefined) {
                numbers.push(randomNumber);
            } else {
                break; 
            }
        }
        setNumberShown(numbers)        
    }

    return (
        <div className="container2">
        <div className="numberShown">{numberShown.map((num, index) => (<div key={index}>{num}</div>))}</div>
        <form >
            <label className="input1">
                Minimum value here:
                <input
                    type="number"
                    name="minimum"
                    value={data.minimum}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Maximum value here:
                <input 
                    type="number" 
                    name="maximum"
                    value={data.maximum}
                    onChange={handleChange}
                />
            </label>
        </form>
        <button className="btn" onClick={random}>Generate random number</button>
        <button onClick={() => {setPage('')}}>Go to the beginning</button>
        </div>
    )
}