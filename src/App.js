import { Container } from "@mui/material";
import "./App.css";
import NavBar from "./NavBar";
import CustomPaginationActionsTable from "./Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/table" element={<CustomPaginationActionsTable />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
