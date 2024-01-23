import { useState } from 'react'
import './App.css'
import GeneralForm from './components/General'

function App() {
  const [generalData, setGeneralData] = useState({
    name:"",
    phone:"",
    email:""
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

  return (
    <>
    <GeneralForm submitGeneralForm={submitGeneralForm}/>
    </>
  )
    
}

export default App
