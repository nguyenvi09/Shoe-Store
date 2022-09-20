import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './register.scss';
import { signup } from '../../services/userServices';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
      gender: true,
      confirmedPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required')
        .min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address',
        ),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Must be a valid phone number',
        ),
    }),
    onSubmit: (values) => {
      signup(values);
    },
  });
  return (
    <div className="container">
      <h1 className="reg__title">Register</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__left">
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            placeholder="email(*)"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="message-error"> {formik.errors.email} </p>
          )}
          <input
            id="password"
            name="password"
            type="text"
            className="input"
            placeholder="password(*)"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <p className="message-error"> {formik.errors.password} </p>
          )}
          <input
            id="confirmedPassword"
            name="confirmedPassword"
            type="text"
            className="input"
            placeholder="password confirm(*)"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmedPassword && (
            <p className="message-error"> {formik.errors.confirmedPassword} </p>
          )}
        </div>
        <div className="form__right">
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            placeholder="name(*)"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <p className="message-error"> {formik.errors.name} </p>
          )}
          <input
            id="phone"
            name="phone"
            type="text"
            className="input"
            placeholder="phone(*)"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <p className="message-error"> {formik.errors.phone} </p>
          )}
          <div className="form__radio">
            <label htmlFor="gender">Gender: </label>
            <div className="form__radio-item">
              <input
                value={(formik.values.gender = true)}
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                id="male"
                checked
              />
              <label className="radio__label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form__radio-item">
              <input
                value={(formik.values.gender = false)}
                onChange={formik.handleChange}
                type="radio"
                name="gender"
                id="female"
              />
              <label className="radio__label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <button type="submit" className="form__btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
