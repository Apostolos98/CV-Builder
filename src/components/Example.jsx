import '../styles/Example.css'

export default function Example({setEducations, setName, setEmail, setLoc, setNumber}) {
    const handleClear = () => {
        setEducations({})
        setEmail('')
        setLoc('')
        setName('')
        setNumber('')
    }

    const handleLoad = () => {
        setName('Emily Johnson')
        setEmail('emily.johnson123@example.com')
        setLoc('Athens')
        setNumber(306912345678)
        setEducations({'a': {name:'National and Kapodistrian University of Athens', degree: 'Bachelors in Economics', date:'2016-12-20'}})
    }
    return (
        <div className="example-cont">
            <p className="example-clear" onClick={handleClear}><i className="fa-solid fa-trash"></i> Clear Resume</p>
            <p className="example-load" onClick={handleLoad}> Load example</p>
        </div>
    )   
}