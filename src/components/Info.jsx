import '../styles/Info.css'

export default function PersonalDetails({name, setName, email, setEmail, number, setNumber, loc, setLoc}) {
    return (
        <section className='Info'>
            <h1>Personal Details</h1>
            <label>
                <p>Full name</p>
                <input type="text" placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                <p>Email</p>
                <input type="email" placeholder='email'value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Number</p>
                <input type="number" placeholder='Phone number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            </label>
            <label>
                <p>Location</p>
                <input type="text" placeholder='Location' value={loc} onChange={(e) => setLoc(e.target.value)}/>
            </label>
            
        </section>
    )    
}