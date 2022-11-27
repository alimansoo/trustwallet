import React from "react";
import Asset from '../Asset';
import { useSelector,useDispatch } from "react-redux";
import { getAssets,ReqandSetAssets } from '../../Store/slice/assetsslice';

// function download(content, fileName, contentType) {
//   var a = document.createElement("a");
//   var file = new Blob([JSON.stringify(content)], {type: contentType});
//   a.href = URL.createObjectURL(file);
//   a.download = fileName;
//   a.click();
// }

const TopCoins = (props) => {
  
    const ReduxState = useSelector(getAssets);
    const dispatch = useDispatch();

    if (ReduxState.payload.asset.status === 0) {
        console.log('requeset sended');
        dispatch(ReqandSetAssets());
    }

    console.log('Assets from redux ',ReduxState);

    return (
        <div className="row currencies c-scroll">
        {
            ReduxState.payload.asset.assets.length < 1 ?
            <>
                <Asset loading />
                <Asset loading />
                <Asset loading />
            </>
            : 
            ReduxState.payload.asset.assets.map((value, index, array) => {
            return <Asset 
                key={value.asset_id}
                asset_id = {value.asset_id}
                name = {value.name}
                id_icon = {value.id_icon}
                volume_1hrs_usd = {value.volume_1hrs_usd}
                volume_1day_usd = {value.volume_1day_usd}
                volume_1mth_usd = {value.volume_1mth_usd}
                price_usd = {value.price_usd}
            />;
            })
        }
        </div>
    );
}
export default  TopCoins;