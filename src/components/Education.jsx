import EducationForm from "./EducationForm";
import { useState } from "react";

export default function Education({educations, setEducations}) {
    const [formIdForRender, setForm] = useState(null)
    const [id, setId] = useState('a')
    const handleClick = () => {
        setEducations(
             {...educations, [id]: {
                name: '',
                degree: '',
                date: '',
            }}
        )        
        setId(id + 'a')
    }

    const ShowForm = (el) => {
        if (formIdForRender === null) {
            setForm(el)
        }
        else if (formIdForRender !== null && el !== formIdForRender) {
            setForm(el)
        }
        else setForm(null)
    }

    Object.keys(educations).map((el) => {
        if (educations[el].name === '' && (formIdForRender === null || formIdForRender !== el)) {
            setForm(el)
        }
    })

    return (
        <section>
            {Object.keys(educations).map((el) => {
                 return (
                    <div onClick={() => {ShowForm(el)}} key={el}>
                        {educations[el].name}
                    </div>
                 )
            })}
            <button onClick={handleClick}>+ Education</button>
            {formIdForRender !== null ? (
                <EducationForm
                    educations={educations}
                    setEducations={setEducations}
                    id={formIdForRender}
                    setForm={setForm}
                />
            ) : null}
        </section>
    )
}