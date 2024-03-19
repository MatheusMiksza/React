import React from "react";
import './Button.css'

export default props =>{
    return <button className="button"  value={props.label}>{props.label}</button>
}