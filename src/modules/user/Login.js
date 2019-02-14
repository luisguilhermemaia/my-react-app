import React from 'react';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Required'),
      password: Yup.string()
        .min(4)
        .max(8)
        .required('Required'),
    })}
  >
    {props => {
      const {
        isSubmitting,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
         <label htmlFor="email">
            Email
          </label>
          <Field
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <div className="input-feedback">
            <ErrorMessage name="email" />
          </div>

          <label htmlFor="password">
            Password
          </label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="input-feedback">
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <div className="bottom-register">
            <p>
              Not yet a user?&emsp;
                <Link to="/register">
                  Register now!
                </Link>
            </p>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default Login;
