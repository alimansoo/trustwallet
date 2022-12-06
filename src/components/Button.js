import React,{ useState } from 'react';
import Loader from './Loader';

export default function Button(
  {
    stylecolor='primary',
    size='sm',
    confirm='filled',
    iconP='',
    children,
    className
  }
  ){
  const [load,setLoad] = useState(false);
  return (
    <button 
      className={`
        btn ${stylecolor} ${size} ${confirm} icon-${iconP} ${className} ${load ? 'loading':''}
      `}
      onClick={()=>setLoad(!load)}
    >
      {
        load ? <Loader style={stylecolor} size={size}/>:''
      }
      {
        children
      }
    </button>
  );
}