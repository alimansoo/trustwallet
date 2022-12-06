import React from "react";

export default function IconBtn({style='primary',size='sm',confirm='filled',children,className=''}){
  return (
    <button className={`icon-btn  ${confirm} ${style} ${className}`}>
      {children}
    </button>
  )
}