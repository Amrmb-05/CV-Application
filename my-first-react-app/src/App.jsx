import { useState } from 'react'
import './App.css'
import GeneralForm from './components/General'
import EducationForm from './components/Education'
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
  }

  return (
    <>
    <GeneralForm submitGeneralForm={submitGeneralForm}/>
    <EducationForm submitEduForm={submitEduForm}/>
    </>
  )
    
}

export default App
