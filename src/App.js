import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import View from "./components/view";
import Edit from "./components/edit";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view/:id" element={<View />}></Route>
          <Route exact path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
