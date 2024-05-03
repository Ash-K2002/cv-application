/* eslint-disable react/prop-types */
import { fieldData } from "./data";
import { Field } from "./basicFields";
import { useState } from "react";

function Education({submitFunc, appData}){
    const [edData, setEdData]=useState({});
    const [show, setShow]=useState(false);

    const schoolArr=fieldData.educational.secondary.map(
        (item)=><li key={item.id}>
            <Field {...item} data={edData} setData={setEdData}/>
        </li>
    );
    const collegeArr=fieldData.educational.college.map(
        (item)=><li key={item.id}>
        <Field {...item} data={edData} setData={setEdData}/>
        </li>
    );

    function showHide(){
        setShow(!show);
    }

    const handleSubmit=()=>{
        
        if(Object.keys(edData).length!==0){
            submitFunc({...appData, ...edData});
            console.log(appData);
        }
        
    }

    return (
        <>
        <section>
            <h2>Education Details</h2>

            <button onClick={showHide}>{(show)?'Hide':'Show'}</button>
        {(show)?<><h3>School Details</h3>
            <ul>{schoolArr}</ul>
            <h3>College Details</h3>
            <ul>{collegeArr}</ul>
            <button onClick={handleSubmit}>Submit</button></>:''}
        </section></>
    )
}

export {Education};