import { useState } from 'react'
import '../styles/App.css'
import  PersonalDetails  from './Info.jsx'
import Education from './Education.jsx'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [loc, setLoc] = useState('')
  const [educations, setEducations] = useState({})

  return (
    <div className='cont'>
      <div className='first-col'>
        <PersonalDetails name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} loc={loc} setLoc={setLoc}/>
        <Education educations={educations} setEducations={setEducations}/>
      </div>
      <div className='cv'>
        <p>{name}</p>
        <p>{email}</p>
        <p>{number}</p>
        <p>{loc}</p>
        {Object.keys(educations).map((el) => {
          return (
            <>
              <p>{educations[el].name}</p>
              <p>{educations[el].degree}</p>
              <p>{educations[el].date}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
