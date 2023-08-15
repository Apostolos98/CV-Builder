import '../styles/Example.css'

export default function Example({setEducations, setName, setEmail, setLoc, setNumber, setExperiences, setFormEdu, setFormExp}) {
    const handleClear = () => {
        setEducations({})
        setEmail('')
        setLoc('')
        setName('')
        setNumber('')
        setExperiences({})
        setFormEdu(null)
        setFormExp(null)
    }

    const handleLoad = () => {
        setName('Emily Johnson')
        setEmail('emily.johnson123@example.com')
        setLoc('Athens')
        setNumber(306912345678)
        setEducations({'a': {name:'National and Kapodistrian University of Athens', degree: 'Bachelors in Economics', date:'2016-12-20'}})
        setExperiences({'a': 
                        {
                            name:'EcoTech Innovations Ltd',
                            position:'Analyst',
                            startDate: '2020-04-10',
                            endDate: '2022-05-09',
                            desc: 'Assisted lead economists in analyzing market trends for sustainable technologies. Developed and tested economic models, refining accuracy. Generated user-friendly guides for efficient integration of new analysts.'
                        }})
        setFormEdu(null)
        setFormExp(null)
    }
    return (
        <div className="example-cont">
            <p className="example-clear" onClick={handleClear}><i className="fa-solid fa-trash"></i> Clear Resume</p>
            <p className="example-load" onClick={handleLoad}> Load example</p>
        </div>
    )   
}