import Input from "./Input"
import { useState } from "react"
import Form from "./Form"

export default function EducationForm( {submitEduForm} ) {
    const [eduData, setEduData] = useState({
        school:"",
        degree:"",
        startDate:"",
        endDate:""
    })

    function handleSchool(e) {
        setEduData({
        ...eduData, 
        school: e.target.value
    })
    }

    function handleDegree(e) {
        setEduData({
        ...eduData, 
        degree: e.target.value
    })
    }

    function handleStartDate(e) {
        setEduData({
        ...eduData, 
        startDate: e.target.value
    })
    }

    function handleEndDate(e) {
        setEduData({
        ...eduData, 
        endDate: e.target.value
    })
    }
    return (
        <Form
        id="edu"
        onSubmit={submitEduForm}
        title="Education"
        >
            <Input
                title="School"
                type="text"
                value={eduData.school}
                name="school"
                handleChange={handleSchool}
            />

            <Input
                title="Degree"
                type="text"
                value={eduData.degree}
                name="degree"
                handleChange={handleDegree}
            />

            <Input
                title="Start-date"
                type="date"
                value={eduData.startDate}
                name="startDate"
                handleChange={handleStartDate}
            />  

<Input
                title="End-date"
                type="date"
                value={eduData.endDate}
                name="endDate"
                handleChange={handleEndDate}
            />  
            
        </Form>
    )
}