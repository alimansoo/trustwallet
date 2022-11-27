import React from "react";
import { BiUser,BiBell,BiSearch,BiStar } from "react-icons/bi";
import { ReactComponent as Logo } from '../../logo.svg';
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Button from "../Button";
import IconBtn from '../IconBtn';
import Input from "../Input";
import TopHeader from "../sections/TopHeader";

export function Exchange(){
    return (
        <main className='container'>
        <TopHeader/>
        <div className='row flex-column bg-white border-coner'>
          <div className="row p-16 mb-0">
            <div className="search-section w100">
              <Input placeholder="Balance" label="From" className='w100 mb-8'/>
              <Input placeholder="Balance" label="To" className='w100 mb-24'/>
              <Button size="md" style="primary" confirm="corner" iconP="left" className='w100'><CgArrowsExchangeAlt/>Convert</Button>
            </div>
          </div>
        </div>
      </main>
    );
}