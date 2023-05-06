import React from "react"


const Input = ({ id, className, ...attrs,}) => {
    const classes = className(
        'input',
        className,
    )
}

return (
    <div>
        <input
        name={id}
        className={className} 
        {...attrs}
        />
    </div>
)

Input.prototype = {
    id:
}