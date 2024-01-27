import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carType, setCarType] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState(false);
  const [carNumberError, setCarNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const { setUserList } = useContext(AppContext);

  const validations = () => {
    let flag = true;
    let regexSmallLetters = /^[a-z]+$/.test(userName);
    if (!regexSmallLetters) {
      setUserNameError(true);
      flag = false;
    } else {
      setUserNameError(false);
      flag = true;
    }

    if (carNumber.length == 8) {
      setCarNumberError(false);
      flag = true;
    } else {
      setCarNumberError(true);
      flag = false;
    }

    if (password.length < 4 || password.length > 8) {
      setPasswordError(true);
      flag = false;
    } else {
      setPasswordError(false);
      flag = true;
    }

    if (flag) {
      let newUser = {
        userName: userName,
        carType: carType,
        carNumber: carNumber,
        password: password,
      };
      setUserList((prevState) => [...prevState, newUser]);
      navigate("/");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="user name"
        onInput={(e) => setUserName(e.target.value)}
      />
      {userNameError ? <h4>wrong userName</h4> : <></>}
      <input
        type="text"
        placeholder="car number"
        onInput={(e) => setCarNumber(e.target.value)}
      />
      {carNumberError ? <h4>wrong car number</h4> : <></>}
      <input
        type="text"
        placeholder="car type"
        onInput={(e) => setCarType(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onInput={(e) => setPassword(e.target.value)}
      />
      {passwordError ? <h4>wrong password</h4> : <></>}

      <button onClick={() => validations()}>REGISTER</button>
    </div>
  );
}
