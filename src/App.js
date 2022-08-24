import React from "react";
import { useGlobalContext } from "./context";
import LoginOPT from "./pages/LoginOPT";
import Home from "./pages/Home";

const App = () => {
  const { isLogin } = useGlobalContext();
  return <main>{isLogin ? <Home /> : <LoginOPT />}</main>;
};

export default App;
