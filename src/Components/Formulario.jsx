
import { Formik, Form, Field } from 'formik';

function ContactForm({ onSubmit, onUpdate, contactToEdit }) {
  return (
    <>
        <h3>{contactToEdit ? 'Editar contacto' : 'Inserta un contacto nuevo'}</h3>
      <Formik
        initialValues={{ name: contactToEdit?.name || '', email: contactToEdit?.email || '' }}
        onSubmit={(values, { resetForm }) => {
          if (contactToEdit) {
            // Si hay un contacto para editar, actualiza en lugar de agregar uno nuevo
            onUpdate({ ...contactToEdit, ...values });
          } else {
            // Si no hay un contacto para editar, agrega uno nuevo
            onSubmit(values);
          }
          resetForm();
        }}
      >
        <Form>
          <Field type="text" name="name" placeholder="Nombre" />
          <Field type="email" name="email" placeholder="Correo electrónico" />
          <button type="submit">{contactToEdit ? 'Actualizar' : 'Guardar'}</button>
        </Form>
      </Formik>

    </>
  );
}

export default ContactForm
