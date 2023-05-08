import React from "react";

import "/Projects/reactProjects/my-todo-list/src/components/button/button.scss"


const Button = ({ children, onClick, className, disabled, active}) => {

    const classes = className('btn', className, {active}, )
    return (
        <button className={classes} disable = {disabled} onClick={onClick}>{children}</button>
    );
};

Button.prototype = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
};

export default Button;