import { useState } from 'react'
import './App.css'
import GeneralForm from './components/General'
import EducationForm from './components/Education'
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

  const [isToggled, setisToggled] = useState({
    generalForm: false,
    eduForm: false
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

  return (
    <>
    <div>
    <GeneralForm submitGeneralForm={submitGeneralForm} isShown={isToggled.generalForm}/>
    <EducationForm submitEduForm={submitEduForm} isShown={isToggled.eduForm} />
    </div>
    <CvDisplay generalData={generalData} eduData={eduData} showGeneralForm={showGeneralForm} showEduForm={showEduForm}/>
    </>
  )
    
}

export default App
