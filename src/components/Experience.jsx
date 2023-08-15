import ExperienceForm from './ExperienceForm';
import { useState } from "react";
import '../styles/Education.css';

export default function Experience({experiences, setExperiences}) {
    const [formIdForRender, setForm] = useState(null)
    const [id, setId] = useState('a')
    const handleClick = () => {
        setExperiences(
             {...experiences, [id]: {
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

    Object.keys(experiences).map((el) => {
        if (experiences[el].name === '' && (formIdForRender === null || formIdForRender !== el)) {
            setForm(el)
        }
    })

    return (
        <section className="education">
            <h1 className="education-h1">Experience</h1>
            <div className="education-inner-cont">
                {Object.keys(experiences).map((el, ind, arr) => {
                        return (
                            <div onClick={() => {ShowForm(el)}} key={el} className={"education-divs" + (ind===arr.length - 1?' last-div':'')}>
                                {experiences[el].name}
                            </div>
                        )
                    })}
                <div className="button-cont">
                    <button onClick={handleClick}><i id="button-i">+</i><p>Experience</p></button>
                </div>
                {formIdForRender !== null ? (
                    <ExperienceForm
                        experiences={experiences}
                        setExperiences={setExperiences}
                        id={formIdForRender}
                        setForm={setForm}
                    />
                ) : null}
            </div>
        </section>
    )
}