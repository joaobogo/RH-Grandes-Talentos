import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home.js";
import Jobs from "./routes/Jobs/Jobs";
import JobsDetail from "./routes/JobsDetail/JobsDetail";
import Resume from "./routes/Resume/Resume";
import Link from "./routes/LinkTutorial/Link";
import ContactPage from "./routes/ContactPage/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="jobs/oportunidade/:id" element={<JobsDetail/>} />
        <Route path="jobs/oportunidade/:id/resume/:id" element={<Resume/>} />
        <Route path="/linktutorial" element={<Link/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
