import data from "./MOCK_DATA.json";
import React, { useState } from "react";
import toLowerCase from "lodash/toLower";
import Search from "./Search";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState(data);

  const handleFilter = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setUserData(data);
    } else {
      const newList = data.filter(
        (user) =>
          toLowerCase(user.first_name + " " + user.last_name).includes(
            toLowerCase(e.target.value)
          ) ||
          toLowerCase(user.last_name).includes(toLowerCase(e.target.value)) ||
          toLowerCase(user.gender).includes(toLowerCase(e.target.value)) ||
          toLowerCase(user.email).includes(toLowerCase(e.target.value))
      );
      setUserData(newList);
    }
  };

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
