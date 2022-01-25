import React from "react";
import { Card } from "react-bootstrap";

export default function UserCard({ fName, lName, eMail, id }) {
  return (
    <Card className="w-100 mt-3">
      <Card.Body className="p-3">
        <Card.Title className="mb-3">
          {fName} {lName}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text>{eMail}</Card.Text>
          <Card.Text>{id}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
