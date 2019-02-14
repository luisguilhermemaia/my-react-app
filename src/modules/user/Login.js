import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: 'Sincere@april.biz',
  password: '123456',
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
  handleSubmit = async (values, { setSubmitting }) => {
    //Fetch to a fake api, using async await
    try {
      var response = await fetch('https://jsonplaceholder.typicode.com/users');
      var users = await response.json();
      var parsedFormValues = JSON.stringify(values);
      var existingUser = users.filter(user => user.email = parsedFormValues.email);
      if (existingUser) {
        setSubmitting(false);
        this.props.history.push('/posts');
      }
    } catch (error) {
      console.warn(error);
    }
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
