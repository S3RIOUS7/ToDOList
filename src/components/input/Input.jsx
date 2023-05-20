import React, {useState} from 'react'

const Input = ({value, onChange, type, onClick}) => {
    

    
   
    return(
        <div>
            <input value={value} onChange={onChange} type={type} onClick={onClick}/> 
        </div>
    );
}

export default Input