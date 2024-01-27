import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/context";
import WelcomePage from "./views/welcomePage";
import Signup from "./views/Signup";
import ChooseParking from "./views/chooseParking";
import { useState } from "react";
import AllParking from "./views/AllParking";
import History from "./views/History";

const userListInitial = [
  {
    userName: "tal",
    password: 123,
    carNumber: 12345678,
    carType: "toyota",
    activeParking: false,
    city: null,
    history: [],
  },
  {
    userName: "gal",
    password: 456,
  },
  {
    userName: "dor",
    password: 789,
  },
];
function App() {
  const [userList, setUserList] = useState(userListInitial);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <h1>sv parking</h1>
      <AppContext.Provider
        value={{
          userList,
          setUserList,
          currentUser,
          setCurrentUser,
        }}
      >
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chooseParking" element={<ChooseParking />} />
          <Route path="/AllParking" element={<AllParking />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
