import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import NavBar from "../components/NavBar";
import Pay from "../components/Pay";

export default function AllParking() {
  const { currentUser } = useContext(AppContext);
  const [showPay, setShowPay] = useState(false);
  const pay = () => {
    setShowPay(true);
  };

  return (
    <div>
      <NavBar />
      <div onClick={() => pay()}>
        <h4>{currentUser.carType}</h4>
        <h4>{currentUser.carNumber}</h4>
        <h4>{currentUser.city}</h4>
      </div>
      {showPay ? <Pay setShowPay={setShowPay} /> : <></>}
    </div>
  );
}
