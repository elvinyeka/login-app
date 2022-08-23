import React, { useState } from "react";

const FormField = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <h2 className="login-form__title">Şəxsi kabinetə giriş </h2>
      <div className="login-form__mode">
        <a className="active" href="#!">
          OTP giriş
        </a>
        <a href="#!">ASAN imza</a>
        <a href="#!">Elektron imza</a>
      </div>
      <form>
        <input
          className="login-form__input"
          type="text"
          placeholder="İstifadəçi adı və ya e-mail"
        />
        <div className="login-form__input--pass">
          {showPass ? (
            <input
              className="login-form__input"
              type="text"
              placeholder="Şifrə"
            />
          ) : (
            <input
              className="login-form__input"
              type="password"
              placeholder="Şifrə"
            />
          )}
          <button className="pass-btn" onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  stroke="#5d6a83"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                  stroke="#5d6a83"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.6819 3.96914 7.65661 6.06 6.06L17.94 17.94Z"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L23 23"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="login-form__buttons">
          <label htmlFor="remember">
            <input type="checkbox" />
            Yadda saxla
          </label>
          <a href="#!">Şifrəni unutmusunuz?</a>
        </div>
        <button className="login-form__submit" type="submit">
          Giriş
        </button>
      </form>
    </>
  );
};

export default FormField;
