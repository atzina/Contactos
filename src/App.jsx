import { useState } from 'react'
import './App.css'
import ContactList from './Components/ContactList.jsx'
import mockContacts from './Components/MockApi.jsx'
import ContactForm from './Components/Formulario'

function App() {
  const [contactsData, setContactsData] = useState(mockContacts);
  const [contactToDelete, setContactDelete] = useState(null);

  const handleDelete = (contactId) => {

    setContactDelete(contactId)
    
  }

  const confirmDelete = () => {
    const upDateContacts = contactsData.filter((contact) => contact.id !== contactToDelete);
    setContactsData(upDateContacts);
    setContactDelete(null);
  }
  const cancelDelete = () => {
    setContactToDelete(null);
  };


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

      {contactToDelete && (
          <div className="confirmation-dialog">
            <p>¿Seguro que quieres eliminar este contacto?</p>
            <button onClick={confirmDelete}>Sí</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        )}
      
      </div>
     
    </>
  )
}

export default App
