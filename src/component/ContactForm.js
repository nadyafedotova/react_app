import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'

const initialValues = { name:'', email:'', phone:'' }

const validateName = val => (!val ? 'Name is required' : '')

const validateEmail = val =>
    !val
        ? 'Email is required'
        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)
            ? ''
            : 'Invalid email address';

const validatePhone = val =>
    !val
        ? 'Phone number is required'
        : /^\d{12}$/i.test(val)
            ? ''
            : 'Invalid phone number format';

const onSubmit = vals => alert(JSON.stringify(vals, null, 2));

export default function ContactForm () {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
                <Form>
                    <div className="formInput">
                        <label htmlFor="name">Name: </label>
                        <div className="fieldInput">
                            <Field name="name" validate={validateName}/>
                        </div>
                        <div className="error">
                            <ErrorMessage name="name" component="div"/>
                        </div>
                    </div>

                    <div className="formInput">
                        <label htmlFor="email">Email: </label>
                        <div className="fieldInput">
                            <Field name="email" validate={validateEmail}/>
                        </div>
                        <div className="error">
                            <ErrorMessage name="email" component="div"/>
                        </div>
                    </div>

                    <div className="formInput">
                        <label htmlFor="phone">Phone: </label>
                        <div className="fieldInput">
                            <Field name="phone" validate={validatePhone}/>
                        </div>
                        <div className="error">
                            <ErrorMessage name="phone" component="div"/>
                        </div>
                    </div>

                    <div className="fieldSubmit">
                        <button className="buttonInput" type="submit">Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}