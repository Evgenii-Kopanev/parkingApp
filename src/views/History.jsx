import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function History() {
  const { userList, setCurrentUser, currentUser, setUserList } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [sort, setSort] = useState(null);

  const restore = () => {
    let currentUserClone = structuredClone(currentUser);
    currentUserClone.activeParking = true;
    setCurrentUser(currentUserClone);
    //---------
    let userListClone = structuredClone(userList);

    const foundUser = userListClone.find(
      (user) =>
        user.userName === currentUserClone.userName &&
        user.password === currentUserClone.password
    );

    foundUser.activeParking = true;
    setUserList(userListClone);

    navigate("/AllParking");
  };

  if (sort == "2") {
    currentUser.history.sort((a, b) => {
      a.price - b.price;
    });
  }
  if (sort == "1") {
    currentUser.history.sort((a, b) => {
      b.price - a.price;
    });
  }

  return (
    <div>
      <NavBar />
      <select
        name=""
        id=""
        defaultValue={"0"}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="0">sort</option>
        <option value="1">high to low</option>
        <option value="2">low to high</option>
      </select>

      {currentUser.history.map((park) => {
        return (
          <div>
            <h4>car:{park.car}</h4>
            <h4>number:{park.number}</h4>
            <h4>cost:{park.price}</h4>
            <button onClick={() => restore()}>RESTORE</button>
          </div>
        );
      })}
    </div>
  );
}
