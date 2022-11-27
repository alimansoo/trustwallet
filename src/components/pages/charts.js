import React from "react";
import { BiUser,BiBell } from "react-icons/bi";
import { ReactComponent as Logo } from '../../logo.svg';
import Button from '../Button';
import IconBtn from '../IconBtn';
import Tabs from "../Tabs";
import Tab from "../Tab";
import Customeselect from "../customeselect";
import InfoRow from "../infoRow";
import TopHeader from "../sections/TopHeader";

export function Charts(){
    return (
      <main className='container'>
        <TopHeader/>
        
        <div className="row">
          <Customeselect className='w100'/>
        </div>

        <div className='row flex-column bg-white border-coner p-16'>
          <InfoRow status='up' label="Last Price :" value="$112,365.23" className={`mb-8`}/>
          <InfoRow status='down' label="Daily trading volume :" value="$112,365.23" className={`mb-8`}/>
          <InfoRow status='up' label="24 hour changes :" value="$112,365.23" className={`mb-8`}/>
          <InfoRow status='down' label="Highest price :" value="$112,365.23" className={`mb-8`}/>
          <InfoRow status='up' label="Lowest price :" value="$112,365.23" className={`mb-8`}/>
        
          <Tabs>
            <Tab key={'MarketOrder'} title='Market orders'>
              <div className={`d-flex justify-between mb-8`}>
                <span className="color-black f-16 f-bold">Value</span>
                <span className="color-black f-16 f-bold">Price</span>
              </div>

              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>

              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8 mt-24`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
            </Tab>
            <Tab key={'Latest trans'} title='Latest trans'>
              <div className={`d-flex justify-between mb-8`}>
                <span className="color-black f-16 f-bold">Value2</span>
                <span className="color-black f-16 f-bold">Price2</span>
              </div>

              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='down' label="0.00123" value="$112,365.23" className={`mb-8`}/>

              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8 mt-24`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
              <InfoRow status='up' label="0.00123" value="$112,365.23" className={`mb-8`}/>
            </Tab>
          </Tabs>

          

          <div className="d-flex justify-center  pt-16">
            <Button confirm="corner" style="success" className='mr-4'>Buy</Button>
            <Button confirm="corner" style="danger" className='ml-4'>Sell</Button>
          </div>
        </div>
      </main>
    );
}