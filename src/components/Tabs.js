import React,{ useState } from "react";

export default function Tabs({children}){
    const [tab,setTab] = useState(0);
    return (
        <div className="tabs">
            <div className="tabs-titles">
                <div className="active-line" style={{left:tab*135}}></div>
                {
                    children.map(
                        (value, index, array) => 
                        <div 
                        className={`tabs-titles-title ${tab === index ? 'active':''}`} 
                        onClick={()=>setTab(index)}
                        >{value.props.title}</div>
                    )
                }
            </div>
            <div className="tabs-bodys">
                {
                    children.map(
                        (value, index, array) => 
                        <div 
                        className={`tabs-bodys-body ${tab === index ? 'active':''}`} 
                        onClick={()=>setTab(index)}
                        >{value.props.children}</div>
                    )
                }
            </div>
        </div>
    );
}