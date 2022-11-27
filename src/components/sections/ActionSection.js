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

export default function ActionSection(porps){
    return (
        <div className="row action-row">
          <Action loading title='Bitcoins'>
            <BiBitcoin/>
          </Action>
          <Action loading title='Deposit withdraw'>
            <BiMoney/>
          </Action>
          <Action loading title='Tethers'>
            <RiTumblrLine/>
          </Action>
          <Action loading title='Credits'>
            <BiCreditCard/>
          </Action>
          <Action loading title='Coins'>
            <BiDollarCircle/>
          </Action>
          <Action loading title='Market Calculator'>
            <BiCalculator/>
          </Action>
          <Action loading title='Invite'>
            <BiUserPlus/>
          </Action>
          <Action loading title='Support'>
            <BiSupport/>
          </Action>
        </div>
    );
}