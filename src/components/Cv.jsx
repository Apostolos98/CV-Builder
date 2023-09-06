import '../styles/Cv.css'

export default function Cv({educations, name, email, number, loc, experiences}) {
    return (
      <div className='col-2'>
        <div className='cv'>
        <div className="cv-cont">
          <div className='cv-info'>
            <p className='first'>{name}</p>
            <div className="cv-p-cont">
              {email!==''?<p><i className="fa-solid fa-envelope"></i>{email}</p>:null}
              {number!==''?<p><i className="fa-solid fa-phone"></i>+{number}</p>:null}
              {loc!==''?<p><i className="fa-solid fa-location-dot"></i>{loc}</p>:null}
            </div>
          </div>
          <div className="cv-edu">
              {Object.keys(educations).length !== 0 && <p className='edu-p'>Education</p>}
              {Object.keys(educations).map((el) => {
              return (
                <div className='edu-info' key={el + 'edu'}>
                  <div className='edu-date'>
                    {educations[el].date}
                  </div>
                  <div className='edu-uni-degree'>
                    <p>{educations[el].name}</p>
                    <p>{educations[el].degree}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="cv-edu">
              {Object.keys(experiences).length !== 0 && <p className='edu-p'>Experience</p>}
              {Object.keys(experiences).map((el) => {
              return (
                <div className='edu-info' key={el + 'exp'}>
                  <div className='edu-date'>
                    {experiences[el].startDate}-{experiences[el].endDate}
                  </div>
                  <div className='edu-uni-degree'>
                    <p>{experiences[el].name}</p>
                    <p>{experiences[el].position}</p>
                    <p>{experiences[el].desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      </div>
    )
}