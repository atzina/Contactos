import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete, onUpdate }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
          <button onClick={() => onDelete(contact.id)}>Eliminar</button>
          <button onClick={() => onUpdate(contact)}>Actualizar</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired, // Valida que 'contacts' sea un array requerido
    onDelete: PropTypes.func.isRequired, // Valida que 'onDelete' sea una función requerida
    onUpdate: PropTypes.func.isRequired,
  };

export default ContactList;
