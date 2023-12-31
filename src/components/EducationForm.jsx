import '../styles/Education.css'

export default function EducationForm({educations, setEducations, id, setFormEdu}) {
    const deleteId = (key) => {
        const newEd = {...educations}
        delete newEd[key]
        setFormEdu(null)
        setEducations(newEd)
    }
    return (
        <section className='education-form'>
            <form action="" onSubmit={(e) => {e.preventDefault(); setFormEdu(null)}}>
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
                    <p>Graduation Date</p>
                    <input 
                        type="date" 
                        placeholder='Graduation Date' 
                        value={educations[id].date} 
                        onChange={(e) => setEducations({...educations, [id]:{...educations[id], date:e.target.value}})}
                    />
                </label>
                <div className='buttons-save-del-cont'>
                    <button type='button' onClick={() => deleteId(id)} id='delete'>Delete</button>
                    <button type="submit" id='save'>Save</button>
                </div>
            </form>
        </section>
    )    
}