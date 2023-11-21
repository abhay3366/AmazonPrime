// import Header from './Header'
// import Browse from './Browse'

// const Login = () => {
//   return (
//     <div>
//         <Header/>
//         <Browse/>

//     </div>
//   )
// }

// export default Login

import { Stack, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import Browse from "./Browse";

const Login = () => {
  const [login, setLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  // const emailRef=useRef();
  // toggling of login and signup
  const handleSignup = () => {
    setLogin(!login);
  };
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    // console.log(emailRef.current.value,passwordRef.current.value);
    // console.log("d",formRef.current)

     // ! Signed up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });

      //! Signed in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Header />
      <div className="relative">
        <img src="/image/MLP.jpg" alt="" className="w-screen" />
        <div className="absolute top-11 left-2/4 max-w-lg mx-auto bg-white p-8 my-10 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Example Form</h2>

          <form onSubmit={handleSubmit} ref={formRef}>
            {login == false && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                placeholder="example@example.com"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                password
              </label>
              <input
                id="password"
                ref={passwordRef}
                type="password"
                placeholder="password"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <Stack>
            <Text>For New user ?</Text>
            <Link onClick={handleSignup}>
              {login == false ? "SignIn" : "Signup"}{" "}
            </Link>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Login;
