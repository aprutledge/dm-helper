import React from "react";

const FloatingMenuItem = props => {

    const handleClick = () => {
        console.log("hello from handleClick")
        props.action(true);
    }

    let label;

    if (props.label) {
        label = <label>{props.label}</label>;
    }

    return (
        <div
            onClick={() => handleClick()}
            className="floating-menu-item">
            {label}
            <div className="floating-menu-icon"><i className="material-icons">{props.icon}</i></div>
        </div>
    );
}

export default FloatingMenuItem