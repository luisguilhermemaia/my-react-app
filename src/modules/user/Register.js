import React from 'react';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import PictureUploader from './components/picture-uploader/PitctureUploader';

const Register = () => (
  <Formik
    initialValues={{ email: '', password: '', fullName: '', dateOfBirth: '', avatar: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      fullName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email()
        .required('Required'),
      password: Yup.string()
        .min(4)
        .max(8)
        .required('Required'),
      dateOfBirth: Yup.date()
        .required('Required'),
    })}
  >
    {props => {
      const {
        values,
        isSubmitting,
        handleSubmit,
        handleChange,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <PictureUploader
            value={values.avatar}
            onChange={handleChange('avatar')}
          />
          <label htmlFor="fullName">
            Full name
          </label>
          <Field
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
          />
          <div className="input-feedback">
            <ErrorMessage name="email" />
          </div>

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

          <label htmlFor="dateOfBirth">
            Birth date
          </label>
          <Field
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder="Enter your birth date"
          />
          <div className="input-feedback">
            <ErrorMessage name="dateOfBirth" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <div className="bottom-register">
            <p>
              Already a user?&emsp;
                <Link to="/login">
                Sign in
                </Link>
            </p>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default Register;
