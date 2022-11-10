import React,{ useState } from 'react';
import { Loader } from './Loader';

function Button(props){
  const [load, setload] = useState(false);
  return (
    <button className='btn btn-s' onClick={()=>setload(true)}>
      {
        load ? <Loader /> : "SignUp"
      }
    </button>
  );
}

export default Button;
