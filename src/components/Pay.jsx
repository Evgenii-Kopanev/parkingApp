import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Pay(props) {
  const { userList, setCurrentUser, currentUser, setUserList } =
    useContext(AppContext);
  const navigate = useNavigate();
  let price;
  if (currentUser.city == "TA") {
    price = 150;
  } else if (currentUser.city == "NA") {
    price = 100;
  } else {
    price = 50;
  }

  const pay = () => {
    let currentUserClone = structuredClone(currentUser);
    currentUserClone.activeParking = false;
    currentUserClone.history.push({
      car: currentUserClone.carType,
      number: currentUserClone.carNumber,
      price: price,
    });
    setCurrentUser(currentUserClone);
    //---------
    let userListClone = structuredClone(userList);

    const foundUser = userListClone.find(
      (user) =>
        user.userName === currentUserClone.userName &&
        user.password === currentUserClone.password
    );

    foundUser.activeParking = false;
    foundUser.history.push({
      car: currentUserClone.carType,
      number: currentUserClone.carNumber,
      price: price,
    });

    setUserList(userListClone);

    navigate("/History");
  };

  return (
    <div>
      <h4>cost:{price}</h4>
      <button onClick={() => pay()}>pay</button>
      <button onClick={() => props.setShowPay(false)}>close</button>
    </div>
  );
}
