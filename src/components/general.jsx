/* eslint-disable react/prop-types */
import { useState } from "react";
import { Field } from "./basicFields";
import { fieldData } from "./data";
import showIcon from '../assets/seeMore.svg';
import hideIcon from '../assets/seeLess.svg';


function General({submitFunc, appData}){
    const [genData, setGenData]=useState({});
    const [show, setShow]=useState(false);

    const renderedArr= fieldData.general.map((item)=><li key={item.id}><Field name={item.name} content={item.content} type={item.type} data={genData} setData={setGenData}/>
        </li>
    );
    
    const handleSubmit=()=>{
        
        if(Object.keys(genData).length!==0){
            submitFunc({...appData, ...genData});
            console.log(appData);
        }
        
    }

    function showHide(){
        setShow(!show);
    }

    
    return (
        <>
        <section>
            <h2>Personal details</h2>
            <button onClick={showHide}><img src={(show)?showIcon:hideIcon} alt={(show)?'show':'hide'} /></button>
        {(show)?<><ul>{renderedArr}</ul>
            <button onClick={handleSubmit}>Submit</button></>:''}
        </section>
        </>
    )
}

export {General}; 