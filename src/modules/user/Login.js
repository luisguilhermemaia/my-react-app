import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import { Formik } from 'formik';
import {
  Form,
  FormHeader,
  FormBody,
  Field,
  Button,
  ValidationError,
  Text,
  Title,
  Title2,
  Link
} from '../theme';
import lock from '../../lock.svg';

const initialValues = {
  email: 'Sincere@april.biz',
  password: '123456'
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string()
    .min(4)
    .max(8)
    .required('Required')
});

class Login extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    // Fetch to api, using async/await
    try {
      var response = await fetch('https://jsonplaceholder.typicode.com/users');
      var users = await response.json();
      var parsedFormValues = JSON.stringify(values);

      // 'Simple' if to validate if the user exists
      var existingUser = users.filter(
        user => (user.email === parsedFormValues.email)
      );

      if (existingUser) {
        setSubmitting(false);
        this.props.history.push('/posts');
      }
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
          const { isSubmitting, handleSubmit } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <FormHeader>
                <div>
                  <Title>Login in to our site</Title>
                  <Title2>Enter username or password to log on</Title2>
                </div>
                <img src={lock} alt="lock" />
              </FormHeader>
              <FormBody>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                />
                <ValidationError name="email" />

                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <ValidationError name="password" />

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormBody>
              <Text>
                Don't have account?&emsp;
                <Link to="/register">Sign up here.</Link>
              </Text>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default withRouter(Login);
