import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(values.phoneNumber)
    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.childName) ||
      validator.isEmpty(values.phoneNumber)
    ) {

      setError(true);
    }
    else if(values.phoneNumber.length < 10 ){

        alert("Please Enter 10 Digits Number");

    }
    else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 0 }}>
        <Card.Body>
          <Form onSubmit={submitFormData} className="flex">
          <div class="row">
              <div class="col-sm-6 mb-3">
            <Form.Group className="mb-0 ">
            {/*  <Form.Label>Child Name</Form.Label>*/}
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="childName"
                defaultValue={values.childName}
                type="text"
                placeholder="Child Name"
                onChange={handleFormData("childName")}
                className="form-control"
              />

              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            </div>
                <div class="col-sm-6 mb-3">
            <Form.Group className="mb-3">
              {/*    <Form.Label>Last Name</Form.Label>*/}
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="phoneNumber"
                defaultValue={values.phoneNumber}
                type="number"
                placeholder="Phone Number"
                onChange={handleFormData("phoneNumber")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            </div>

            <div class="form-field text-center">
            <Button variant="primary" className="th-btn" type="submit">
              Continue
            </Button>
            </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
