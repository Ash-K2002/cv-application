/* eslint-disable react/prop-types */
import callIcon from '../assets/call.svg';
import mailIcon from '../assets/mail.svg';
import '../styles/output.css'

function Output({outputObj}){
return(
    <section className='output container'>
        <h1 className="output name">{outputObj['Name']}</h1>
        <ul className="personal-details">
            <li><img src={mailIcon} alt="email" /> {outputObj['Email']}</li>
            <li><img src={callIcon} alt="phone Number" /> {outputObj['phone']}</li>
        </ul>
        <section className="edu-details">
            <h2>Education Details</h2>
            <ul className="edu-list">
                <li>
                    <ul className="eduItem">
                        <li><span className='item-name'>Degree:</span> {outputObj['SchoolDegree']}</li>
                        <li><span className='item-name'>Institute name:</span> {outputObj['secondarySchool']}</li>
                        <li><span className='item-name'>Passing year:</span> {outputObj['SchoolYear']}</li>
                    </ul>
                </li>
                <li>
                    <ul className="eduItem">
                        <li><span className='item-name'>Degree:</span> {outputObj['collegeDegree']}</li>
                        <li><span className='item-name'>Institute name:</span> {outputObj['collegeName']}</li>
                        <li><span className='item-name'>Passing year:</span> {outputObj['collegeYear']}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section className="workDetails">
            <h2>Work details</h2>
            <ul className="work-list">
                <li><ul className="workItem">
                <li><span className='item-name'>Name of Company:</span> {outputObj['companyName']}</li>
                <li><span className='item-name'>Position: </span>{outputObj['position']}</li>
                <li><span className='item-name'>Responsibility: </span>{outputObj['Responsibility']}</li>
                <li><span className='item-name'>From: </span>{outputObj['joiningDate']}</li>
                <li><span className='item-name'>To: </span>{outputObj['leavingDate']}</li>
            </ul></li>
            </ul>
            
        </section>
    </section>
);
}

export {Output};