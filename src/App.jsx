import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './Components/ContactList.jsx'
import mockContacts from './Components/MockApi.jsx'
import ContactForm from './Components/Formulario'

function App() {
  const [contactsData, setContactsData] = useState(mockContacts);

  const handleDelete = (contactId) => {
    const upDateContacts = contactsData.filter((contact) => contact.id !== contactId);
    setContactsData(upDateContacts);
  }

  const addContact = (newContact) => {
    const contactWithId = {
      id: Math.random(),
      ...newContact,
    }
    setContactsData([...contactsData, contactWithId]);
  };
  
  return (
    <>
      <div>
     
      
      <ContactList contacts={contactsData} onDelete ={handleDelete} />

      <ContactForm onSubmit={addContact}/>
      
      </div>
     
    </>
  )
}

export default App
