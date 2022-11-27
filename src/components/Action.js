import React from "react";

export function Action({title,children,...props}){
  return (
    <div className="sm-Action">
      {
        props.loading ? 
        <>
          <span className="icon">
            <div className="conent-loading"></div>
          </span>
          <span className="title">
            <div className="conent-loading"></div>
          </span>
        </>
        : 
        <>
          <span className="icon">
            {children}
          </span>
          <span className="title">
            {title}
          </span>
        </>
      }
    </div>
  );
}