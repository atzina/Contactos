import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete, onUpdate }) {
  return (
    <div className='conteiner-contacts'>
      <ul>
        {contacts.map((contact) => (
          <li className='list' key={contact.id}>
            {contact.id} . {contact.name} - {contact.email} &nbsp; 
            <button onClick={() => onDelete(contact.id)}>Eliminar</button>
            <button onClick={() => onUpdate(contact)}>Actualizar</button>
          </li>
            

        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired, // Valida que 'contacts' sea un array requerido
    onDelete: PropTypes.func.isRequired, // Valida que 'onDelete' sea una función requerida
    onUpdate: PropTypes.func.isRequired,
  };

export default ContactList;
