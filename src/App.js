import logo from "./logo.svg";
import "./App.css";
import ListRepository from "./pages/ListRepository";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-repository" element={<ListRepository />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
