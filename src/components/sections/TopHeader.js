import React,{ useDispatch }  from "react";
import { BiUser,BiBell } from "react-icons/bi";
import { ReactComponent as Logo } from '../../logo.svg';
import IconBtn from '../IconBtn';
import { authUser } from '../../Store/slice/authslice';

export default function TopHeader(props){
  // const dispatch = useDispatch();
  const authentication = ()=>{
    
  }
    return (
        <div className="row space-between ">
          <div>
            <Logo/>
          </div>
          <div>
            <IconBtn confirm='outline' style='primary'>
              <BiBell/>
            </IconBtn>
            <IconBtn confirm='outline' style='primary' onClick={authentication} className='ml-8'>
              <BiUser/>
            </IconBtn>
          </div>
        </div>
    );
}