import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { childName, phoneNumber, age, email } = values;
  return (
    <>
      <Card style={{ marginTop: 0, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Child Name :</strong> {childName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {phoneNumber}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
