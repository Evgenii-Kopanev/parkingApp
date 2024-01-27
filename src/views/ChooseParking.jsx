import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function ChooseParking() {
  const { currentUser, setCurrentUser, userList, setUserList } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const startParking = () => {
    if (city == "") {
      alert("ERROR = please choose a city");
    } else {
      let currentUserClone = structuredClone(currentUser);
      currentUserClone.activeParking = true;
      currentUserClone.city = city;
      setCurrentUser(currentUserClone);
      //---------
      let userListClone = structuredClone(userList);

      const foundUser = userListClone.find(
        (user) =>
          user.userName === currentUserClone.userName &&
          user.password === currentUserClone.password
      );

      foundUser.activeParking = true;
      foundUser.city = city;

      setUserList(userListClone);
      //-------------------------
      navigate("/AllParking");
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <select
          name=""
          id=""
          defaultValue={"0"}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="0">select your option</option>
          <option value="TA">Tel aviv</option>
          <option value="NA">Natania</option>
          <option value="RE">Rehovot</option>
        </select>
        <h4>{currentUser.carNumber}</h4>
        <button onClick={() => startParking()}>START PARKING</button>
      </div>
    </div>
  );
}
