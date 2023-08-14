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
        <section className="education">
            <h1 className="education-h1">Education</h1>
            <div className="education-inner-cont">
                {Object.keys(educations).map((el, ind, arr) => {
                        return (
                            <div onClick={() => {ShowForm(el)}} key={el} className={"education-divs" + (ind===arr.length - 1?' last-div':'')}>
                                {educations[el].name}
                            </div>
                        )
                    })}
                <div className="button-cont">
                    <button onClick={handleClick}><i id="button-i">+</i><p>Education</p></button>
                </div>
                {formIdForRender !== null ? (
                    <EducationForm
                        educations={educations}
                        setEducations={setEducations}
                        id={formIdForRender}
                        setForm={setForm}
                    />
                ) : null}
            </div>
        </section>
    )
}