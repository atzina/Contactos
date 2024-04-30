import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList.jsx";
import mockContacts from "./Components/MockApi.jsx";
import ContactForm from "./Components/Formulario";

function App() {
  const [contactsData, setContactsData] = useState(mockContacts);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleDelete = (contactId) => {
    setContactToDelete(contactId);
  };

  const confirmDelete = () => {
    const updatedContacts = contactsData.filter(
      (contact) => contact.id !== contactToDelete
    );
    setContactsData(updatedContacts);
    setContactToDelete(null);
  };
  const cancelDelete = () => {
    setContactToDelete(null);
  };

  const addContact = (newContact) => {
    const contactWithId = {
      id: Math.random(),
      ...newContact,
    };
    setContactsData([...contactsData, contactWithId]);
  };

  const updateContact = (updatedContact) => {
    // Encuentra el índice del contacto que se va a actualizar
    const contactIndex = contactsData.findIndex((contact) => contact.id === updatedContact.id);
    
    if (contactIndex !== -1) {
      // Actualiza el contacto en la lista de contactos
      const updatedContacts = [...contactsData];
      updatedContacts[contactIndex] = updatedContact;
      setContactsData(updatedContacts);
    }
    
    // Cierra el formulario de edición
    setContactToEdit(null);
  };

  return (
    <>
      <div className="fondo">
        <div className="contenedor-principal">
          <div className="title" >
            <h1>Lista de Contactos</h1>
          </div>
          <div className="div-form">
            <ContactForm onSubmit={addContact} onUpdate={updateContact} contactToEdit={contactToEdit}/>
          </div>
          <div>
            <ContactList contacts={contactsData} onDelete={handleDelete} onUpdate={(contact) => setContactToEdit(contact)} />

            {contactToDelete && (
              <div className="confirmation-dialog">
                <p>¿Seguro/a que quieres eliminar este contacto?</p>
                <button onClick={confirmDelete}>Sí</button>
                <button onClick={cancelDelete}>No</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
