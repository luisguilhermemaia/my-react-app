import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PictureUploader from './components/picture-uploader/PitctureUploader';
import {
  Form,
  ValidationError,
  FormBody,
  Field,
  Button,
  Text,
  Link
} from '../theme';

const initialValues = {
  email: '',
  password: '',
  fullName: '',
  dateOfBirth: '',
  avatar: ''
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string()
    .min(4)
    .max(8)
    .required('Required'),
  dateOfBirth: Yup.date().required('Required')
});

class Register extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    // Fetch to api, using async/await
    try {
      var response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
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
          const { values, isSubmitting, handleSubmit, handleChange } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <PictureUploader
                value={values.avatar}
                onChange={handleChange('avatar')}
              />
              <FormBody>
                <Field
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />
                <ValidationError name="fullName" />

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

                <Field
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  placeholder="Enter your birth date"
                />
                <ValidationError name="dateOfBirth" />

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormBody>
              <Text>
                Already a user?&emsp;
                <Link to="/">Sign in</Link>
              </Text>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default withRouter(Register);
