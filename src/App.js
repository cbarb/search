import data from "./MOCK_DATA.json";
import React, { useState } from "react";
import toLowerCase from "lodash/toLower";
import UserCard from "./UserCard";
import { Card } from "react-bootstrap";

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
    <div className="App">
      <h1 className="text-center">Search</h1>
      <input
        type="text"
        style={{ maxWidth: "456px" }}
        className="form-control mx-auto my-3"
        value={input}
        onChange={handleFilter}
      />
      {userData.slice(0, 10).map((user) => {
        return (
          <div
            id={user.id}
            key={user.id}
            style={{ maxWidth: "456px" }}
            className="mx-auto d-flex justify-content-between"
          >
            <UserCard
              fName={user.first_name}
              lName={user.last_name}
              eMail={user.email}
              id={user.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
