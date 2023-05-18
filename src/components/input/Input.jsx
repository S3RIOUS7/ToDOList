import React, {useState} from 'react'

const Input = ({value, setValue}) => {
   
    console.log(value)
    
    const getValueInput = (event) => {


         setValue(event.target.value); //текст с инпута ложим в свой 'State' setValue 

        //  console.log(event);
    }
    
    
    return(
        <div>
            <input value={value} onChange={ (event)=> getValueInput(event) }  /> 
        </div>
    );
}

export default Input