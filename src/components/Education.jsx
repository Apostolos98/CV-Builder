import EducationForm from "./EducationForm";
import { useState } from "react";
import '../styles/Education.css'

export default function Education({educations, setEducations, formIdForRenderEdu, setFormEdu}) {
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
        if (formIdForRenderEdu === null) {
            setFormEdu(el)
        }
        else if (formIdForRenderEdu !== null && el !== formIdForRenderEdu) {
            setFormEdu(el)
        }
        else setFormEdu(null)
    }

    Object.keys(educations).map((el) => {
        if (educations[el].name === '' && (formIdForRenderEdu === null || formIdForRenderEdu !== el)) {
            setFormEdu(el)
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
                {formIdForRenderEdu !== null ? (
                    <EducationForm
                        educations={educations}
                        setEducations={setEducations}
                        id={formIdForRenderEdu}
                        setFormEdu={setFormEdu}
                    />
                ) : null}
            </div>
        </section>
    )
}