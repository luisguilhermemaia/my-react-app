import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string()
    .min(4)
    .max(8)
    .required('Required'),
});
class Login extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      this.props.history.push('/posts');
    }, 500);
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
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
  }
}

export default withRouter(Login);
