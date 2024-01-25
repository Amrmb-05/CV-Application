import Input from "./Input"
import { useState } from "react"
import Form from "./Form"

export default function WorkForm( {submitWorkForm, hideForm,isShown}) {
    const [workInput, setWorkInput] = useState({
        company: "",
        position:"",
        jobDescription:"",
        startDate:"",
        endDate:""
    })

    function handleCompany(e) {
        setWorkInput({
            ...workInput,
            company: e.target.value
        })
    }

    function handlePosition(e) {
        setWorkInput({
            ...workInput,
            position: e.target.value
        })
    }

    function handleJobDescription(e) {
        setWorkInput({
            ...workInput,
            jobDescription: e.target.value
        })
    }

    function handleStartDate(e) {
        setWorkInput({
            ...workInput,
            startDate: e.target.value
        })
    }

    function handleEndDate(e) {
        setWorkInput({
            ...workInput,
            endDate: e.target.value
        })
    }

    return (
        <Form
        id="work"
        onSubmit={submitWorkForm}
        title="Work Experience"
        isShown={isShown}
        handleCancel={hideForm}
        >
            <Input
                title="Company"
                type="text"
                value={workInput.company}
                name="company"
                handleChange={handleCompany}
            />

            <Input
                title="Position"
                type="text"
                value={workInput.position}
                name="position"
                handleChange={handlePosition}
            />

            <label htmlFor="jobDescription">
                Job Description
            </label>
            <textarea name="jobDescription"  id="jobDescription" cols="10" rows="4" form="work" onChange={handleJobDescription}></textarea>

            <Input
                title="Start Date"
                type="date"
                value={workInput.startDate}
                name="startDate"
                handleChange={handleStartDate}
            />

            <Input
                title="End Date"
                type="date"
                value={workInput.startDate}
                name="endDate"
                handleChange={handleEndDate}
            />

        </Form>
    )

}