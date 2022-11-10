import React from "react";
import { BiCoin } from "react-icons/bi";

export function Action(props){
    return (
        <div className="sm-Action">
            <div className="icon">
                <BiCoin  />
            </div>
            Coins
        </div>
    );
}