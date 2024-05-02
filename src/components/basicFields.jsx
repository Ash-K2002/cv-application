/* eslint-disable react/prop-types */
function Field({name, type, content}){
    return (<>
    <label htmlFor={name}>{content}
    </label>
    <input type={type} name={name} />
    </>);
}

export {Field};