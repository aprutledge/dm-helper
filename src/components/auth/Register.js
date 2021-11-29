import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 500)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form>
          <Form.Group controlId='formFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name='firstName'
              placeholder='First Name'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Form.Group controlId='formLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name='lastName'
              placeholder='Last Name'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='email'
              placeholder='Email'
              type='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.email && errors.email ? 'error' : null}
            />
            {touched.email && errors.email ? (
              <div className='error-message'>{errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              placeholder='Password'
              type='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.password && errors.password ? 'error' : null}
            />
          </Form.Group>
          <Form.Group>
            <Button type='submit' disabled={isSubmitting}>
              Register
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  )
}

export default Register
