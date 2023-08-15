import '../styles/Education.css'

export default function ExperienceForm({experiences, setExperiences, id, setForm}) {
    const deleteId = (key) => {
        const newEd = {...experiences}
        delete newEd[key]
        setForm(null)
        setExperiences(newEd)
    }
    return (
        <section className='education-form'>
            <form action="" onSubmit={(e) => {e.preventDefault(); setForm(null)}}>
                <label>
                    <p>Company Name</p>
                    <input 
                        type="text" 
                        placeholder='Name of company' 
                        required 
                        value={experiences[id].name} 
                        onChange={(e) => setExperiences({...experiences, [id]:{...experiences[id], name:e.target.value}})}
                    />
                </label>
                <label>
                    <p>Position/Role</p>
                    <input 
                        type="text" 
                        placeholder='Enter position/role' 
                        value={experiences[id].position} 
                        onChange={(e) => setExperiences({...experiences, [id]:{...experiences[id], position:e.target.value}})}
                    />
                </label>
                <label>
                    <p>Start Date</p>
                    <input 
                        type="date"  
                        value={experiences[id].startDate} 
                        onChange={(e) => setExperiences({...experiences, [id]:{...experiences[id], startDate:e.target.value}})}
                    />
                </label>
                <label>
                    <p>End Date</p>
                    <input 
                        type="date" 
                        value={experiences[id].endDate} 
                        onChange={(e) => setExperiences({...experiences, [id]:{...experiences[id], endDate:e.target.value}})}
                    />
                </label>
                <label>
                    <p>Job description</p>
                    <textarea 
                        cols="60" 
                        rows="10"
                        type="text"  
                        value={experiences[id].desc} 
                        onChange={(e) => setExperiences({...experiences, [id]:{...experiences[id], startDate:e.target.value}})}>
                    </textarea>
                </label>
                <div className='buttons-save-del-cont'>
                    <button type='button' onClick={() => deleteId(id)} id='delete'>Delete</button>
                    <button type="submit" id='save'>Save</button>
                </div>
            </form>
        </section>
    )    
}