
import "./App.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Addemployee } from "./Employee/Addemployee";
import { Viewemployee } from './Employee/Viewemployee';



function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addemp" element={<Addemployee />} />
          <Route path="/viewemp" element={<Viewemployee />} />

        </Routes>
      </div>

    </>
  );
}

export default App;
