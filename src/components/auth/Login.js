import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { UserContext } from '../../contexts/UserContext'
import UserService from '../../services/UserService'

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email address.').required(),
    password: Yup.string().required(),
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userContext, setUserContext] = useContext(UserContext)

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        const response = await UserService.login(values)
        console.log(JSON.stringify(response, null, 2))
        resetForm()
        setSubmitting(false)

        if (!response.statusText === 'OK') {
          if (response.status === 400) {
          } else if (response.status === 401) {
          } else {
          }
        } else {
          const data = response
          setUserContext((oldValues) => {
            return { ...oldValues, token: response.data.token }
          })
        }
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
        <Form onSubmit={handleSubmit}>
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
              Sign In
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  )
}

export default Login
