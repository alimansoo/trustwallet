import React from "react";

export default function InfoRow({label='',value='',status,className}){
  return (
    <div className={`d-flex justify-between ${className}`}>
      <span className="color-secondary f-16">{label}</span>
      <span className={`${status=='up'?'color-success':'color-danger'} f-16 f-600`}>{value}</span>
    </div>
  );
}