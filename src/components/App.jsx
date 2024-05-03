/* eslint-disable no-unused-vars */
import { useState } from "react"
import { General } from "./general"
import { Education } from "./education"
import { Experience } from "./experience"
import { Output } from "./Output"

function App() {
  const dataDefault =  {
    'Name': 'Merlin',
    'Email': 'merlin@wizardry.com',
    'phone': '+15-555-123456',
    'secondarySchool': 'Witchcraft Academy of Camelot',
    'SchoolYear': 1432,
    'SchoolDegree': 'Master of Arcane Arts',
    'collegeName': 'Wizarding University of Avalon',
    'collegeYear': 1440,
    'collegeDegree': 'Doctorate in Alchemy',
    'companyName': 'Mage Guild of Britannia',
    'position': 'Grand Sorcerer',
    'Responsibility': 'Protecting the realm from dark forces',
    'joiningDate': '1450-06-21',
    'leavingDate': 'Present (Immortal)'
};

  const [appData, setAppData] = useState({...dataDefault});

  return (
    <>
    <section className='app container'>
    <h1>CV Generator</h1>
    <General submitFunc={setAppData} appData={appData}/>
    <Education submitFunc={setAppData} appData={appData}/>
    <Experience submitFunc={setAppData} appData={appData}/>
    </section>
    <Output outputObj={appData}/>
    </>
    
  )
}

export default App
