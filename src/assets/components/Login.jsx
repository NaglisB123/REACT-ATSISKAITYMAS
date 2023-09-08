import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/firebase';


export default function Login() {
  const [emailValue, setEmailValue] = useState('john@frusciante.com');
  const [passwordValue, setPasswordValue] = useState('123456');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('ar veikia?');
    console.log('emailValue ===', emailValue);
    console.log('passwordValue ===', passwordValue);

    // nutraukti funkcijo vykdyma jei tuscias email arba password
    if (!emailValue || !passwordValue) {
      console.warn('EMAIL OR PASSWORD NOT ENTERED');
      return;
    }

    loginWithFireBase();
    console.log('forma ok');
  }

  function loginWithFireBase() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center">Login here</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <input
              onChange={(event) => setEmailValue(event.target.value)}
              value={emailValue}
              type="text"
              placeholder="Your email"
              className="appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              onChange={(event) => setPasswordValue(event.target.value)}
              value={passwordValue}
              type="password"
              placeholder="Your password"
              className="appearance-none rounded-full relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div>
          <p>Entered email: {emailValue}</p>
          <p>Entered password: {passwordValue}</p>
        </div>
      </div>
    </div>
  );
}
