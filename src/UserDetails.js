import React from "react";
import { useParams } from "react-router-dom";
import data from "./MOCK_DATA.json";
import { Card } from "react-bootstrap";
import maleAvatar from "./img/Male-avatar.svg";
import femaleAvatar from "./img/Female-avatar.svg";

export default function UserDetails() {
  const { id } = useParams();
  const user = data.find((user) => user.id === Number(id));
  return (
    <div>
      {console.log(user.gender)}
      <h1 className="my-4">User Details</h1>
      <Card className="p-4">
        <div className="d-flex flex-column flex-md-row">
          <Card.Img
            style={{ width: "150px" }}
            variant="top"
            src="./"
            src={user.gender === "Female" ? femaleAvatar : maleAvatar}
          />
          <Card.Body>
            <Card.Title className="mb-3">
              {user.first_name} {user.last_name}
            </Card.Title>
            <div className="row">
              <Card.Text className="mb-0 col-12 col-md-4">
                {" "}
                <strong>Occupation:</strong> {user.occupation}
              </Card.Text>
              <Card.Text className="mb-0 col-12 col-md-4">
                {" "}
                <strong>Nationality:</strong> {user.country}
              </Card.Text>
              <Card.Text className="mb-0 col-12 col-md-4">
                {" "}
                <strong>e-Mail:</strong> {user.email}
              </Card.Text>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
