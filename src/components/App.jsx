import { useState } from 'react'
import '../styles/App.css'
import  PersonalDetails  from './Info.jsx'
import Education from './Education.jsx'
import Cv from './Cv'
import Example from './Example'
import Experience from './Experience'

function App() {
  const [name, setName] = useState('Emily Johnson')
  const [email, setEmail] = useState('emily.johnson123@example.com')
  const [number, setNumber] = useState(306912345678)
  const [loc, setLoc] = useState('Athens')
  const [educations, setEducations] = useState({'a': 
                                      {
                                        name:'National and Kapodistrian University of Athens', 
                                        degree: 'Bachelors in Economics',
                                        date:'2016-12-20'
                                      }})
  const [experiences, setExperiences] = useState({'a': 
                                        {
                                          name:'EcoTech Innovations Ltd',
                                          position:'Analyst',
                                          startDate: '2020-04-10',
                                          endDate: '2022-05-09',
                                          desc: 'Assisted lead economists in analyzing market trends for sustainable technologies. Developed and tested economic models, refining accuracy. Generated user-friendly guides for efficient integration of new analysts.'
                                        }})

  return (
    <div className='cont'>
      <div className='first-col'>
        <Example setEducations={setEducations} setEmail={setEmail} setName={setName} setNumber={setNumber} setLoc={setLoc} setExperiences={setExperiences}/>
        <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} loc={loc} setLoc={setLoc}/>
        <Education educations={educations} setEducations={setEducations}/>
        <Experience experiences={experiences} setExperiences={setExperiences}/>
      </div>
      <Cv name={name} email={email} number={number} loc={loc} educations={educations}/>
    </div>
  )
}

export default App
