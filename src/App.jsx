import { useState } from 'react'
import './App.css'
import GeneralForm from './components/General'
import EducationForm from './components/Education'
import WorkForm from './components/Work.jsx'
import CvDisplay from './components/CvDisplay.jsx'
function App() {
  const [generalData, setGeneralData] = useState({
    name:"",
    phone:"",
    email:""
  })

  const [eduData, setEduData] = useState({
    school:"",
    degree:"",
    startDate:"",
    endDate:""
  })

  const [workData, setWorkData] = useState({
    company: "",
    position:"",
    jobDescription:"",
    startDate:"",
    endDate:""
})


  const [isToggled, setisToggled] = useState({
    generalForm: false,
    eduForm: false,
    workForm: false
  })

  function showGeneralForm() {
    setisToggled({
      ...isToggled,
      generalForm: true
    })
  }

  function hideGeneralForm() {
    setisToggled({
      ...isToggled,
      generalForm: false
    })
  }

  function showEduForm() {
    setisToggled({
      ...isToggled,
      eduForm: true
    })
  }

  function hideEduForm() {
    setisToggled({
      ...isToggled,
      eduForm: false
    })
  }

  function showWorkForm() {
    setisToggled({
      ...isToggled,
      workForm: true
    })
  }

  function hideWorkForm() {
    setisToggled({
      ...isToggled,
      workForm: false
    })
  }

  function submitGeneralForm(e) {
    e.preventDefault()
    const name = e.target.name.value
    const phone = e.target.phone.value
    const email = e.target.email.value

    const newData = {
      name: name,
      phone : phone,
      email: email
    }

    setGeneralData(newData)
    e.target.reset()

    hideGeneralForm()
  }

  function submitEduForm(e) {
    e.preventDefault()
    const school = e.target.school.value
    const degree = e.target.degree.value
    const startDate = e.target.startDate.value
    const endDate = e.target.endDate.value

     const newData = {
      school: school,
      degree : degree,
      startDate: startDate,
      endDate: endDate
    }
    setEduData(newData)
    e.target.reset()

    hideEduForm()
  }

  function submitWorkForm(e) {
    e.preventDefault()
    const company = e.target.company.value
    const position = e.target.position.value
    const jobDescription = e.target.jobDescription.value
    const startDate = e.target.startDate.value
    const endDate = e.target.endDate.value

    const newData = {
      company: company,
      position : position,
      jobDescription: jobDescription,
      startDate: startDate,
      endDate: endDate
    }

    setWorkData(newData)
    hideWorkForm()
  }
  return (
    <>
    <div>
    <GeneralForm submitGeneralForm={submitGeneralForm} isShown={isToggled.generalForm} hideForm={hideGeneralForm}/>
    <EducationForm submitEduForm={submitEduForm} isShown={isToggled.eduForm} hideForm={hideEduForm} />
    <WorkForm submitWorkForm={submitWorkForm} isShown={isToggled.workForm} hideForm={hideWorkForm}/>
    </div>
    <CvDisplay generalData={generalData} eduData={eduData} workData={workData} showGeneralForm={showGeneralForm} showEduForm={showEduForm} showWorkForm={showWorkForm}/>
    </>
  )
    
}

export default App
