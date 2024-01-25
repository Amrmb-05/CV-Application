import Input from "./Input"
import { useState } from "react"
import Form from "./Form"

export default function EducationForm( {submitEduForm, hideForm,isShown} ) {
    const [eduInput, setEduInput] = useState({
        school:"",
        degree:"",
        startDate:"",
        endDate:""
    })

    function handleSchool(e) {
        setEduInput({
        ...eduInput, 
        school: e.target.value
    })
    }

    function handleDegree(e) {
        setEduInput({
        ...eduInput, 
        degree: e.target.value
    })
    }

    function handleStartDate(e) {
        setEduInput({
        ...eduInput, 
        startDate: e.target.value
    })
    }

    function handleEndDate(e) {
        setEduInput({
        ...eduInput, 
        endDate: e.target.value
    })
    }
    return (
        <Form
        id="edu"
        onSubmit={submitEduForm}
        title="Education"
        isShown={isShown}
        handleCancel={hideForm}
        >
            <Input
                title="School"
                type="text"
                value={eduInput.school}
                name="school"
                handleChange={handleSchool}
            />

            <Input
                title="Degree"
                type="text"
                value={eduInput.degree}
                name="degree"
                handleChange={handleDegree}
            />

            <Input
                title="Start-date"
                type="date"
                value={eduInput.startDate}
                name="startDate"
                handleChange={handleStartDate}
            />  

<Input
                title="End-date"
                type="date"
                value={eduInput.endDate}
                name="endDate"
                handleChange={handleEndDate}
            />  
            
        </Form>
    )
}