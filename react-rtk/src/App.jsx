// import Counter from "./components/Counter";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home";
import Video from "./page/Video";
import { Route, BrowserRouter as Router, Routes } from "react-router";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
