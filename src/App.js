import { Container } from "@mui/material";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
