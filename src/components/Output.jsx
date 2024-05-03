/* eslint-disable react/prop-types */
function Output({outputObj}){
return(
    <section className='output container'>
        <h1 className="output name">{outputObj['Name']}</h1>
        <ul className="personalDetails">
            <li>email: {outputObj['Email']}</li>
            <li>contact: {outputObj['phone']}</li>
        </ul>
        <section className="eduDetails">
            <h2>Education Details</h2>
            <ul className="eduList">
                <li>
                    <ul className="eduItem">
                        <li><span>Degree:</span> {outputObj['SchoolDegree']}</li>
                        <li><span>Institute name:</span> {outputObj['secondarySchool']}</li>
                        <li><span>Passing year:</span> {outputObj['SchoolYear']}</li>
                    </ul>
                </li>
                <li>
                    <ul className="eduItem">
                        <li><span>Degree:</span> {outputObj['collegeDegree']}</li>
                        <li><span>Institute name:</span> {outputObj['collegeName']}</li>
                        <li><span>Passing year:</span> {outputObj['collegeYear']}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section className="workDetails">
            <h2>Work details</h2>
            <ul className="workList">
                <li><ul className="workItem">
                <li><span>Name of Company:</span> {outputObj['companyName']}</li>
                <li><span>Position: </span>{outputObj['position']}</li>
                <li><span>Responsibility: </span>{outputObj['Responsibility']}</li>
                <li><span>From: </span>{outputObj['joiningDate']}</li>
                <li><span>To: </span>{outputObj['leavingDate']}</li>
            </ul></li>
            </ul>
            
        </section>
    </section>
);
}

export {Output};