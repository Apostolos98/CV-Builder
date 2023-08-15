import ExperienceForm from './ExperienceForm';
import { useState } from "react";
import '../styles/Education.css';

export default function Experience({experiences, setExperiences, formIdForRenderExp, setFormExp}) {
    const [id, setId] = useState('aa')
    const handleClick = () => {
        setExperiences(
             {...experiences, [id]: {
                name: '',
                position: '',
                endDate:'',
                startDate: '',
                desc:''
            }}
        )        
        setId(id + 'a')
    }

    const ShowForm = (el) => {
        if (formIdForRenderExp === null) {
            setFormExp(el)
        }
        else if (formIdForRenderExp !== null && el !== formIdForRenderExp) {
            setFormExp(el)
        }
        else setFormExp(null)
    }

    const handleFormVisibility = (el) => {
        if (formIdForRenderExp === null || el !== formIdForRenderExp) {
          setFormExp(el);
        } else {
          setFormExp(null);
        }
      };
    
      // Call handleFormVisibility function wherever needed
      Object.keys(experiences).forEach((el) => {
        if (experiences[el].name === '' && (formIdForRenderExp === null || formIdForRenderExp !== el)) {
          handleFormVisibility(el);
        }
      });

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
                {formIdForRenderExp !== null ? (
                    <ExperienceForm
                        experiences={experiences}
                        setExperiences={setExperiences}
                        id={formIdForRenderExp}
                        setFormExp={setFormExp}
                    />
                ) : null}
            </div>
        </section>
    )
}