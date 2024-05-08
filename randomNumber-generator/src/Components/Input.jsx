import React from "react";

export default function Input({value, setValue, setPage}){
    function handleSubmit(event){
        event.preventDefault()
        if (value < 1 || value > 20 || isNaN(value)){
            alert('Please enter a value between 1 and 20')
        } else {
            setPage('Go to RandomGen')
        }
    }

    return (
        <div className="main">
            <div className="title">How many numbers would you like to generate between 1 and 20?</div>
            <form className="formContainer">
                <label>
                    Please enter here:
                    <input                        
                        type="number" 
                        value={value}
                        onChange={(e) => setValue(parseInt(e.target.value))}
                    />
                </label>
            </form>
            <button onClick={handleSubmit}>Next Step</button>            
        </div>
        
    )
}