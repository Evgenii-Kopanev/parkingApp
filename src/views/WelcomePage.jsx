import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(null);
  const { userList, setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const checkUser = () => {
    let flag = false;
    userList.map((user) => {
      if (user.userName === userName && user.password === password) {
        flag = true;
        return;
      }
    });
    if (flag) {
      const current = userList.find(
        (user) => user.userName === userName && user.password === password
      );
      setCurrentUser(current);
      navigate("/chooseParking");
    } else {
      alert("user doesnt exists");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="userName"
        onInput={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onInput={(e) => setPassword(Number(e.target.value))}
      />
      <div>
        <button onClick={() => checkUser()}>sign in</button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          sign up
        </button>
      </div>
    </div>
  );
}
