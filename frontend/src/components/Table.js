import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Row } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

function BasicTable(props) {
  return (
    <Row className="my-5 w-75 mx-auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.state.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.class}</TableCell>
                <TableCell align="right">{row.section}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    className="mx-2"
                    onClick={() => {
                      props.deleteItem(index);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="mx-2"
                    onClick={() => {
                      props.updateItem(row);
                    }}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Row>
  );
}

export default BasicTable;
