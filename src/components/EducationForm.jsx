import '../styles/Education.css'

export default function EducationForm({educations, setEducations, id, setForm}) {
    const deleteId = (key) => {
        const newEd = {...educations}
        delete newEd[key]
        setForm(null)
        setEducations(newEd)
    }
    return (
        <section className='education'>
            <h1 className='education-h1'>Education</h1>
            <form action="" onSubmit={(e) => {e.preventDefault(); setForm(null)}}>
                <label>
                    <p>School/Univerity</p>
                    <input 
                        type="text" 
                        placeholder='Name of institution' 
                        required 
                        value={educations[id].name} 
                        onChange={(e) => setEducations({...educations, [id]:{...educations[id], name:e.target.value}})}
                    />
                </label>
                <label>
                    <p>Degree</p>
                    <input 
                        type="text" 
                        placeholder='Enter Degree/Field of study' 
                        value={educations[id].degree} 
                        onChange={(e) => setEducations({...educations, [id]:{...educations[id], degree:e.target.value}})}
                    />
                </label>
                <label>
                    <p>Date</p>
                    <input 
                        type="date" 
                        placeholder='Graduation Date' 
                        value={educations[id].date} 
                        onChange={(e) => setEducations({...educations, [id]:{...educations[id], date:e.target.value}})}
                    />
                </label>
                <button type='button' onClick={() => deleteId(id)}>Delete</button>
                <button type="submit">Save</button>
            </form>
        </section>
    )    
}