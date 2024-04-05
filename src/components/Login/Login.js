import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const { user, login } = useContext(UserContext);
    const nav = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    const submitForm = (userDetails, { setSubmitting }) => {
        //axios req using email,pswd
        // token 
        console.log(userDetails);
        userDetails.token = "1234";
        login(userDetails);
        setSubmitting(false);
        nav('/account')
    }

    return (
        <div>{!user ?
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={submitForm}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            SignUp
                        </button>
                    </Form>
                )}
            </Formik> : <Account />}
        </div>
    )
}

export default Signup