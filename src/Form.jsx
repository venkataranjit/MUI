import * as React from "react";
import { Box, TextField, Button, Container, Typography, TableContainer, Table, TableBody, TableCell, TableHead, Paper, TableRow } from "@mui/material";

function Form() {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [input2, setInput2] = React.useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    setInput2(input);
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mb: 0, mt: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <Typography level="h4">Display Text On Submit</Typography>
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
          <Button size="lg" variant="contained" type="submit" >
            Button
          </Button>
        </Box>
<br />
        <TableContainer component={Paper}>
          <Table maxWidth="sm" aria-label="simple table">
            <TableHead size="small">
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'error.contrastText' }}>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{input2.name}</TableCell>
                <TableCell>{input2.email}</TableCell>
                <TableCell>{input2.password}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Form;
