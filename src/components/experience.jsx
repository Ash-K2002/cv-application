/* eslint-disable react/prop-types */
import { fieldData } from "./data";
import { useState } from "react";
import { Field } from "./basicFields";

function Experience({appData, submitFunc})
{   const [expData, setExpData]=useState({});
    const [show, setShow]=useState(false);

    const workArr=fieldData.work.map((item)=><li key={item.id}>
    <Field {...item} data={expData} setData={setExpData}/>
</li>);

const handleSubmit=()=>{
        
    if(Object.keys(expData).length!==0){
        submitFunc({...appData, ...expData});
        console.log(appData);
    }
    
}

function showHide(){
    setShow(!show);
}

    return (
        <>
        <section>
           <h2>Work Experience</h2>
            <button onClick={showHide}>{(show)?'Hide':'Show'}</button>
        {(show)?<><ul>{workArr}</ul>
            <button onClick={handleSubmit}>Submit</button></>:''}
            
        </section>
        </>
    )
}

export {Experience};