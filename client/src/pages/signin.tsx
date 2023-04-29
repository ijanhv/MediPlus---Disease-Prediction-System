import React, { useState } from "react";
import Image from "next/image";
// import { FaGoogle } from 'react-icons/fa'
import RegisterForm from "../components/authForms/RegisterForm";

const AuthForm = () => {

  const [authForm, setAuthForm] = useState<"login" | "register">("register");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-violet-700 md:w-1/2 flex justify-center items-center">
        {/* <Image
          src="/background-image.png"
          alt="background image"
          width={600}
          height={800}
        /> */}
      </div>

      <div className="md:w-1/2 ">
        {/* check path and render regiter and login */}

        <RegisterForm />

      </div>
    </div>
  );
};

export default AuthForm;