import Input from "./Input"
import { useState } from "react"
import Form from "./Form"

export default function GeneralForm( {submitGeneralForm, isShown} ) {
   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [email, setEmail] = useState('')
   
   function handleName(e) {
    setName(e.target.value)
   }

   function handlePhone(e) {
    setPhone(e.target.value)
   }

   function handleEmail(e) {
    setEmail(e.target.value)
   }

    return (
        <Form
        id="general"
        title="Personal Details"
        onSubmit={submitGeneralForm}
        isShown={isShown}
        >
            <Input   
                title="Name"
                type="text"
                value={name}
                name="name"
                handleChange={handleName}
                />
                <Input
                title="Phone Number"
                type="tel"
                value={phone}
                name="phone"
                handleChange={handlePhone}

                />
                <Input
                title="Email"
                type="email"
                value={email}
                name="email"
                handleChange={handleEmail}

                />
        </Form>
        
    )
}

