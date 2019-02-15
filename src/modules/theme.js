import React from 'react';
import styled from 'styled-components';
import { Field as FormikField, ErrorMessage } from 'formik';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px;
  height: 100vh;
  margin-top: 0;
`;

export const FileUploader = styled.div`
  margin: 0 auto;
  padding: 24px;
  height: 100vh;
  margin-top: 0;
`;

export const FormHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  align-items: center;
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const FormBody = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Form = styled.form`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.24);
`;

export const Field = styled(FormikField)`
  width: 100%;
  height: 35px;
  border: none;
  background-color: #fff;
  padding: 1.25rem;
  margin-top: 1rem;
  box-sizing: border-box;
  border-radius: 3px;
`;

export const ValidationError = (props) => {
  return (
    <ErrorMessageContainer >
      <ErrorMessage {...props} />
    </ErrorMessageContainer>
  )
}

const ErrorMessageContainer = styled.div`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.2rem;
`;

export const Label = styled.label`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 10rem;
  border-radius: 50%;
  /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.24); */
  transition: .4s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    transition: .4s;
    transform: scale(1.09);
  }
`;

export const UploadedImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  transition: .4s;
  &:hover {
    cursor: pointer
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    transition: .4s;
    transform: scale(1.09);
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 0.75rem;
  display: block;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
  border: none;
  margin-top: 1rem;
  &:focus {
    background: rgb(62, 113, 189);
  }
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.24);
`;

export const Input = styled.input`
  display: ${props => props.displaynone ? 'none' : ''};
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #FFFFFF;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #FFFFFF;
  font-size: 0.7rem;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#FFFFFF'};
  font-size: 0.7rem;
  padding-bottom: 1rem;
`;
