import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { Link } from "react-router-dom";

export default function Login() {
  const [emailValue, setEmailValue] = useState('john@frusciante.com');
  const [passwordValue, setPasswordValue] = useState('123456');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('IS WORKING ?');
    console.log('emailValue ===', emailValue);
    console.log('passwordValue ===', passwordValue);
    if (!emailValue || !passwordValue) {
      console.warn('email or password not entered');
      return;
    }
    loginWithFirebase();
    console.log('form success');
  }
  function loginWithFirebase() {
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user ===', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode ===', errorCode);
        console.log('errorMessage ===', errorMessage);
      });
  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 w-120">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex flex-col">
              <input
                onChange={(event) => setEmailValue(event.target.value)}
                value={emailValue}
                type='text'
                placeholder='Email address'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <input
                onChange={(event) => setPasswordValue(event.target.value)}
                value={passwordValue}
                type='password'
                placeholder='Password'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
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
