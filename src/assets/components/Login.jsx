import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),
  });

  const [loginError, setLoginError] = useState(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      loginWithFirebase(values.email, values.password);
    },
  });

  function loginWithFirebase(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User authenticated:', user);
        navigate('/shop-page');
      })
      .catch((error) => {
        const errorMessage = "Email or password is incorrect";
        console.log('Authentication error:', errorMessage);
        setLoginError(errorMessage);
      });
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 w-120">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
          Login
        </h2>
        {loginError && <div className="text-red-500">{loginError}</div>}
        <form onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex flex-col">
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Email address'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register-page"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
