import '../styles/Cv.css'

export default function Cv({educations, name, email, number, loc}) {
    return (
    <div className='cv'>
        <div className="cv-cont">
          <div className='cv-info'>
            <p className='first'>{name}</p>
            <div className="cv-p-cont">
              <p><i className="fa-solid fa-envelope"></i>{email}</p>
              <p><i className="fa-solid fa-phone"></i>+{number}</p>
              <p><i className="fa-solid fa-location-dot"></i>{loc}</p>
            </div>
          </div>
          <div className="cv-edu">
              <p className='edu-p'>Education</p>
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
        </div>
      </div>
    )
}