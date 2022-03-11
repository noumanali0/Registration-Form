import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import BasicTable from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";

function Input() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [classs, setClass] = useState("");
  const [section, setSec] = useState("");

  const saveData = () => {
    const usr = {
      name,
      classs,
      section,
    };
    setData([...data, usr]);
  };

  const filterItems = (id) => {
    setData(data.filter((prop, index) => index !== id));
  };

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Registration Yourself</h2>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Row>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Class"
            onChange={(e) => {
              setClass(e.target.value);
            }}
          />
        </Row>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Section"
            onChange={(e) => {
              setSec(e.target.value);
            }}
          />
        </Row>

        <Row className="justify-content-md-center">
          <Col className="text-center">
            <Button
              variant="outlined"
              color="success"
              className="my-2"
              onClick={saveData}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
      <BasicTable state={data} deleteItem={filterItems} />
    </>
  );
}

export default Input;
