import React,{ useEffect,useRef } from "react";
import Asset from '../Asset';
import TopCoins from "../sections/TopCoins";
import ActionSection from "../sections/ActionSection";
import TopHeader from "../sections/TopHeader";
import { ReqandSetAssets,AssetStatus } from '../../Store/slice/assetsslice';
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const ReduxState = useSelector(AssetStatus);

    const isRunned = useRef(false);

    const loadDataOnlyOnce = async() => {
        if(isRunned.current) return;
        isRunned.current = true;

        console.log(ReduxState.payload.asset.assets);

        if (ReduxState.payload.asset.status === 0) {
            console.log('requeset sended');
            dispatch(ReqandSetAssets);
        }
    };

    useEffect(() => {
        loadDataOnlyOnce();
    }, []);

    return (
        <main className='container'>
        <TopHeader/>
        
        <ActionSection/>

        <TopCoins />

        <div className='row flex-column bg-white border-coner'>
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
            <Asset confirm={'row'} loading />
        </div>
        </main>
    );
}
export default  Home;