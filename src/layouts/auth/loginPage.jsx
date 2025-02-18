import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { signIn } from "../../Firebase/auth";
import logo from "../../assets/img/layout/logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email != '' && password != '') {
      signIn(email, password).then((success) =>
        success && navigate('/admin/default')
      );
    } else {
      alert("Please enter all the details");
    }
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-400'>IncubateQR</span>
          </h2>
          <h5 className="mt-2 text-center text-base font-bold leading-9 tracking-tight text-gray-700">Your Versatile Inventory Management Platform!</h5>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                className="block w-full bg-white rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className='mt-4'>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <button className="font-semibold text-indigo-600 hover:text-indigo-500 " >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className='mt-6'>
            <button
              type="submit"
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Dont have an account ?{'  '}
            <Link to={'/auth/signup'} >
              <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
