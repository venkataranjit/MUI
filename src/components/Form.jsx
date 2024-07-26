import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper,
  TableRow,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    gender: "",
  });
  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setInput((pv) => ({ ...pv, [e.target.name]: e.target.value }));
  };

  const checkHandler = () => {
    setInput((pv) => ({ ...pv, terms: !pv.terms }));
  };

  const radioHandler = (e) => {
    setInput((pv) => ({ ...pv, gender: e.target.value })); // [e.target.name] also used for gender
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing record
      setRecords((prevRecords) => {
        const updatedRecords = [...prevRecords];
        updatedRecords[editIndex] = input;
        return updatedRecords;
      });
      setEditIndex(null);
    } else {
      setRecords((prevRecords) => [...prevRecords, input]);
    }
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  const editHandler = (index) => {
    setInput(records[index]);
    setEditIndex(index);
  };

  const deleteHandler = (index) => {
    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { mb: 0, mt: 3, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              value={input.gender}
              name="gender"
              onChange={radioHandler}
              required
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <TextField
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={input.name}
              onChange={changeHandler}
            />
            <br />
            <TextField
              size="small"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              name="email"
              value={input.email}
              onChange={changeHandler}
            />
            <br />
            <TextField
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              value={input.password}
              onChange={changeHandler}
            />
            <br />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox onChange={checkHandler} checked={input.terms} />
                }
                name="terms"
                label="Terms & Conditions"
              />
            </FormGroup>
            <Button
              size="lg"
              disabled={
                !(
                  input.name.length > 0 &&
                  input.email.length > 0 &&
                  input.password.length > 0 &&
                  input.gender
                )
              }
              variant="contained"
              type="submit"
            >
              Button
            </Button>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead size="small">
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  <TableCell sx={{ color: "error.contrastText" }}>
                    Gender
                  </TableCell>
                  <TableCell sx={{ color: "error.contrastText" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "error.contrastText" }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "error.contrastText" }}>
                    Password
                  </TableCell>
                  <TableCell sx={{ color: "error.contrastText" }}>
                    Agreed?
                  </TableCell>
                  <TableCell sx={{ color: "error.contrastText", width: 60}}>
                    {""}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.password}</TableCell>
                    <TableCell>{item.terms ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <EditIcon onClick={() => editHandler(index)} sx={{ cursor: "pointer", marginRight: 1 }}/>
                      <DeleteIcon onClick={() => deleteHandler(index)} sx={{ cursor: "pointer"}}/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
