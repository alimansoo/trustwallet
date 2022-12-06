import React from "react";
import {
    BiCalculator,
    BiUserPlus,
    BiMoney,
    BiCreditCard,
    BiDollarCircle,
    BiBitcoin,
    BiSupport
  } from "react-icons/bi";
  import { 
    RiTumblrLine
  } from "react-icons/ri";
import { Action } from '../Action';

export default function ActionSection({loadmode}){
  console.log(loadmode);
  return (
    <div className="row action-row">
      {
        loadmode?
        <>
          <Action title='Bitcoins'>
            <BiBitcoin/>
          </Action>
          <Action title='Deposit withdraw'>
            <BiMoney/>
          </Action>
          <Action title='Tethers'>
            <RiTumblrLine/>
          </Action>
          <Action title='Credits'>
            <BiCreditCard/>
          </Action>
          <Action title='Coins'>
            <BiDollarCircle/>
          </Action>
          <Action title='Market Calculator'>
            <BiCalculator/>
          </Action>
          <Action title='Invite'>
            <BiUserPlus/>
          </Action>
          <Action title='Support'>
            <BiSupport/>
          </Action>
        </>
        :
        <>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
          <Action loading></Action>
        </>
      }
      
    </div>
  );
}