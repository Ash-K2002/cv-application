import { fieldData } from "./data";
import { Field } from "./basicFields";

function Experience()
{   const workArr=fieldData.work.map((item)=><li key={item.id}>
    <Field {...item}/>
</li>);
    return (
        <>
        <section>
            <h2>Work Experience</h2>
            <ul>{workArr}</ul>
        </section>
        </>
    )
}

export {Experience};