import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'react-toastify/dist/ReactToastify.css';
import Reg from "./components/SignupForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <Navbar />

      {/* <Signup/> */}
    <SignupForm/>


    </>
  );
}

export default App;
