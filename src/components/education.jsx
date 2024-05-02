import { fieldData } from "./data";
import { Field } from "./basicFields";

function Education(){
    const schoolArr=fieldData.educational.secondary.map(
        (item)=><li key={item.id}>
            <Field {...item}/>
        </li>
    );
    const collegeArr=fieldData.educational.college.map(
        (item)=><li key={item.id}>
        <Field {...item}/>
        </li>
    );
    return (
        <>
        <section>
            <h2>Education Details</h2>
            <h3>School Details</h3>
            <ul>{schoolArr}</ul>
            <h3>College Details</h3>
            <ul>{collegeArr}</ul>
        </section></>
    )
}

export {Education};