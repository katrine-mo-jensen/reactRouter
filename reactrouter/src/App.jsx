import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/About";
import {ContactPage} from "./pages/Contact"
import {Employees} from "./pages/Employees"
import { NotFoundPage } from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}/>
          <Route index element={<HomePage />}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
