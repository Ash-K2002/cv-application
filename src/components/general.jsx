import { Field } from "./basicFields";
import { fieldData } from "./data";

function General(){
    const renderedArr= fieldData.general.map((item)=><li key={item.id}><Field name={item.name} content={item.content} type={item.type}/>
        </li>
    );
    return (
        <>
        <section>
            <h2>Personal details</h2>
            <ul>{renderedArr}</ul>
        </section>
        </>
    )
}

export {General};