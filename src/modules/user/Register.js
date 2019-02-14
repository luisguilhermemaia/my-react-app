import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import PictureUploader from './components/picture-uploader/PitctureUploader';

const initialValues = {
  email: '',
  password: '',
  fullName: '',
  dateOfBirth: '',
  avatar: ''
};

const validationSchema = Yup.object().shape({
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
});
class Register extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    //Fetch to a fake api, using async await
    try {
      var response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log(await response.json());

      setSubmitting(false);
      this.props.history.push('/posts');
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
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
                <ErrorMessage name="fullName" />
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
  }
};

export default withRouter(Register);
