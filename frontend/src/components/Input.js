import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import BasicTable from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";

function Input() {
  const [data, setData] = useState([]);

  const [val, setVal] = useState({
    name: "",
    class: "",
    section: "",
  });

  const saveData = () => {
    setData([...data, val]);
    setVal({
      name: "",
      class: "",
      section: "",
    });
  };

  const filterItems = (id) => {
    setData(data.filter((prop, index) => index !== id));
  };

  const updateData = (data) => {
    setVal({
      name: data.name,
      class: data.class,
      section: data.section,
    });
  };

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Registration Yourself</h2>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Name"
            value={val.name}
            onChange={(e) => {
              setVal((prevState) => {
                return {
                  name: e.target.value,
                  class: prevState.class,
                  section: prevState.section,
                };
              });
            }}
          />
        </Row>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Class"
            value={val.class}
            onChange={(e) => {
              setVal((prevState) => {
                return {
                  name: prevState.name,
                  class: e.target.value,
                  section: prevState.section,
                };
              });
            }}
          />
        </Row>
        <Row className="my-2 w-75 mx-auto">
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Section"
            value={val.section}
            onChange={(e) => {
              setVal((prevState) => {
                return {
                  name: prevState.name,
                  class: prevState.class,
                  section: e.target.value,
                };
              });
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
      <BasicTable
        state={data}
        deleteItem={filterItems}
        updateItem={updateData}
      />
    </>
  );
}

export default Input;
