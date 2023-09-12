import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './Components/ContactList.jsx'
import mockContacts from './Components/MockApi.jsx'

function App() {
  const [contactsData, setContactsData] = useState(mockContacts);

  const handleDelete = (contactId) => {
    const upDateContacts = contactsData.filter((contact) => contact.id !== contactId);
    setContactsData(upDateContacts);
  }

  return (
    <>
      <div>
     
      
      <ContactList contacts={contactsData} onDelete ={handleDelete} />
      
      </div>
     
    </>
  )
}

export default App
