import React from "react";

export default function Loader({style='',size=''}){
    if (size === 'sm') {
        return <div className={`loader lds-ring ${style} ${size}`}><div></div><div></div><div></div><div></div></div>;
    }
    return <div className={`loader lds-ellipsis ${style} ${size}`}><div></div><div></div><div></div><div></div></div>;
}