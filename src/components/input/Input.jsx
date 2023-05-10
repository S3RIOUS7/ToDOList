import React, {useState} from 'react'

const Input = ({value, setValue}) => {
   

    
    const getValueInput = (event) => {
         setValue(event.target.value);
        
    }
    
    return(
        <div>
            <input value={value} onChange={ (event)=> getValueInput(event)} /> 
        </div>
    );
}

export default Input