import React from "react";

export default function Input({id='input',label='',placeholder='',className}){
    return (
        <div className={`input-group ${className}`}>
            <label htmlFor={id} style={{display:label ===''?'none':''}}>{label}</label>
            <div className="input">
                <input className="input-element" placeholder={placeholder} id={id} type="text" />
            </div>
        </div>
    );
}