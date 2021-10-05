import React from "react";
import { useState } from "react";
import { PlusCircle, XCircle } from "react-feather"

import FloatingMenuItem from "./FloatingMenuItem"

import './FloatingMenu.css'

const FloatingMenu = props => {

    let buttons = [];
    let className = "floating-menu";
    let icon = <PlusCircle className="floating-menu-icon" />;

    buttons.push(<FloatingMenuItem icon={icon} action={props.action} key="m" />);

    return (
        <div className={className}>
            {buttons}
        </div>);
}

export default FloatingMenu