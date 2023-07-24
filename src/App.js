import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home.js";
import Jobs from "./routes/Jobs/Jobs";
import JobsDetail from "./routes/JobsDetail/JobsDetail";
import Resume from "./routes/Resume/Resume";
import Link from "./routes/LinkTutorial/Link";
import ContactPage from "./routes/ContactPage/ContactPage";
import Candidates from "./routes/Candidates/Candidates";
import Companies from "./routes/Companies/Companies";
import Blog from "./routes/Blog/Blog";
import Faq from './routes/FAQ/Faq'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates/>} />
        <Route path="/companies" element={<Companies/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
