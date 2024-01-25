import "../styles/cv.css"

export default function CvDisplay( {generalData, eduData, workData, showGeneralForm, showEduForm, showWorkForm} ) {
    return (

        <div>
            <h1 className="page-header full-bleed">CV Maker</h1>
            <section className="personal-details">
            <div className="header-and-button full-bleed">
            <h1>Personal Details</h1>
            <button className="toggle-general-form" onClick={showGeneralForm}>Add/Edit</button>
            </div>
            {generalData.name !== "" && <h2>{generalData.name}</h2>}
            {generalData.phone !== "" && <p className="phone-email">Phone: {generalData.phone} | Email: {generalData.email}</p>}

            </section>
            <section className="education">
                <div className="header-and-button full-bleed">
                <h1>Education</h1>
                <button className="toggle-edu-form" onClick={showEduForm}>Add/Edit</button>
                </div>
                {eduData.school !== '' && <h2>{eduData.school}, {eduData.degree}</h2>}
                {eduData.startDate !== '' && <p className="date-of-study">{eduData.startDate} - {eduData.endDate}</p>}
            </section>
            
            <section className="work">
                <div className="header-and-button full-bleed">
                    <h1>Work</h1>
                    <button className="toggle-edu-form" onClick={showWorkForm}>Add/Edit</button>
                </div>
                {workData.company !== '' && <h2>{workData.company}</h2>}
                {workData.position !== '' && <h3>{workData.position}</h3>}
                {workData.jobDescription !== '' && <p>{workData.jobDescription}</p>}
                {workData.startDate !== '' && <p className="date-of-study">{workData.startDate} - {workData.endDate}</p>}
            </section>
        </div>
    )
}