export default function CvDisplay( {generalData, eduData, showGeneralForm, showEduForm} ) {
    return (
        <div>
            <section className="personal-details">
            <div className="header-and-button">
            <h1>Personal Details</h1>
            <button className="toggle-general-form" onClick={showGeneralForm}>Add</button>
            </div>
            <h2>{generalData.name}</h2>
            {generalData.phone !== "" && <p className="phone-email">Phone: {generalData.phone} | Email: {generalData.email}</p>}
            </section>
            <section className="education">
            <div className="header-and-button">
            <h1>Education</h1>
            <button className="toggle-edu-form" onClick={showEduForm}>Add</button>
            </div>
            {eduData.school !== '' && <h2>{eduData.school}, {eduData.degree}</h2>}
            {eduData.startDate !== '' && <p className="date-of-study">{eduData.startDate} - {eduData.endDate}</p>}
            </section>
        </div>
    )
}