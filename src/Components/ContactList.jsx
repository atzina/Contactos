import React from 'react';
import contacts from './MockApi.jsx';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
          <button onClick={() => onDelete(contact.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired, // Valida que 'contacts' sea un array requerido
    onDelete: PropTypes.func.isRequired, // Valida que 'onDelete' sea una función requerida
  };

export default ContactList;
