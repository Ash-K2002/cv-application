import { useState } from "react";

/* eslint-disable react/prop-types */
function Field({name, type, content, data, setData}){
    let dataDefault=(type==='number')?0:'';
    const [fieldVal, setFieldVal]=useState(dataDefault);

    const handleChange=(element)=>{
        setFieldVal(element.target.value);
        const newObj={...data};
        newObj[name]=element.target.value;
        setData(newObj);
    };
    return (<>
    <label htmlFor={name}>{content}
    </label>
    <input type={type} id={name} value={fieldVal} onChange={handleChange}/>
    </>);
}

export {Field};