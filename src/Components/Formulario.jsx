
import { Formik, Form, Field } from 'formik';

function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <Field type="text" name="name" placeholder="Nombre" />
        <Field type="email" name="email" placeholder="Correo electrónico" />
        <button type="submit">Guardar</button>
      </Form>
    </Formik>
  );
}
