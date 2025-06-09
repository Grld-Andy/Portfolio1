import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
