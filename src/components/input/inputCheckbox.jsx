import React, {useState} from 'react'

const InputCheckbox = ({value, setValue}) => {
   

    
    const getValueInput = (event) => {
         setValue(event.target.value);
    }
    
    return(
        <div>
            <input  value={value} type='checkbox' onChange={ (event)=> getValueInput(event)} /> 
        </div>
    );
}

export default InputCheckbox;