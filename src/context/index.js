import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const token = "45f7dc98-cff5-4e07-9715-b1a25ac7f62d";
const url = "http://18.216.47.120:8085/syncpass/authorization";
const generateTokenURL = "http://18.216.47.120:8085/syncpass/generate_token";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [showPass, setShowPass] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const body_data = {
    form_id: "login",
    login_type: "email",
    username: userName,
    password: pwd,
  };

  const fetchLogin = async () => {
    setLoading(true);
    const tokenResponse = await axios(generateTokenURL, {
      headers: {
        acctoken: `${token}`,
        channel: "b2b_web",
        device_type: "web",
        device_name: "Firexox",
      },
    });
    const newAccToken = tokenResponse.data.acctoken;

    try {
      const response = await axios.post(url, body_data, {
        headers: {
          acctoken: `${newAccToken}`,
          channel: "b2b_web",
          device_type: "web",
          device_name: "Firexox",
        },
      });
      setPwd("");
      setUserName("");
      setIsLogin(true);
      setLoading(false);
      console.log(response);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("İstifadəçi adı və yaxud parol səhdir.");
      } else if (error.response?.status === 401) {
        setErrMsg("Belə bir istifadəçi yoxdur.");
      } else {
        setErrMsg("Giriş uğurlu olmadı");
      }
      setLoading(false);
    }
  };

  const state = {
    showPass,
    setShowPass,
    isLogin,
    setIsLogin,
    userName,
    setUserName,
    pwd,
    setPwd,
    errMsg,
    setErrMsg,
    fetchLogin,
    isLoading,
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
