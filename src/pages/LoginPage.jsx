import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  //   // To show main page after log in, we can use hook useNavigate
  //   const navigate = useNavigate();

  //   //values from form. Example use, now commented becouse I got no Api, so click will be navigate to mainpage.
  //   const handleLogin = () => {
  //     // const response = await FakeAPI.login(values)
  //     // if (response.succes) {

  //     // In this case user after log in can back to previous site, so again on login page. It's not good practice.
  //     // navigate("/");

  //     // So instead this I write replace:true and now user can't back on my login site
  //     navigate("/", { replace: true });

  //     //Instead of using navigate we can use build in redirect for example for loaders etc.

  //     // }
  //   };

  // second way to navigate, instead of using hook useNavigate is using state, for example isLoginSucces and Navigate. Adrian as out mentor said he's using useNavigate more often and reccomend it
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleLogin = () => {
    // const response = await FakeAPI.login(values);
    setIsLoginSuccess(true);
  };

  if (isLoginSuccess) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <h1>Login form</h1>
      {/* I can have module for LoginForm, but today I haven't got enough time, so I won't write it and will make just button*/}
      {/* <LoginForm onSubmit={handleSubmit} /> */}
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
