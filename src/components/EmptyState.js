import React from "react";
import { FaRegSurprise } from 'react-icons/fa';

function EmptyState(props) {
  return (
    <div style={
      {
      display: 'flex',
      flexDirection : 'column',
      alignItems: 'center'}
      }>
      <FaRegSurprise className="fa-2x" />
      {
        props.content
      }
    </div>
  );
}

export default EmptyState;