import React from 'react';
import styled from 'styled-components';
import { Field as FormikField, ErrorMessage } from 'formik';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px;
  height: 100vh;
  margin-top: 40px;
`;

export const NavContainer = styled.nav`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.24);
  background-color: #e9eaec;
  border-bottom: 1px solid lighten($text, 60%);
  left: 0;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: .4s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    transition: .4s;
    transform: scale(1.09);
  }
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

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled.li`
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 6px 20px -10px #6d7689;
  padding: 20px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
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
    cursor: pointer;
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

export const Link = styled(ReactRouterLink)`
  color: blue;
  font-weight: bold;
`;

export const Title = styled.h1`
  color: ${props => props.color || '#FFFFFF'};
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const Title2 = styled.h2`
  color: ${props => props.color || '#FFFFFF'};
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 0.7rem;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#FFFFFF'};
  font-size: 0.8rem;
  padding-bottom: 1rem;
`;
