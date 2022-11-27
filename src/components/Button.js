import React,{ useState } from 'react';
import Loader from './Loader';

export default function Button(
  {
    style='primary',
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
        btn ${style} ${size} ${confirm} icon-${iconP} ${className} ${load ? 'loading':''}
      `}
      onClick={()=>setLoad(!load)}
    >
      {
        load ? <Loader style={style} size={size}/>:''
      }
      {
        children
      }
    </button>
  );
}