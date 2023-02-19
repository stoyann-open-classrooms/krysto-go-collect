import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

import ScrollToTop from "./components/ScrollToTop.";
import "./index.css";
import Login from "./pages/Login";
import Private from "./pages/private/Private";
import PrivateCollectsToDo from "./pages/private/PrivateCollectsToDo";





function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="container">
          <Header/>
        <Routes>
         <Route path="/" element={<Login/>}/>
      
         <Route path="/private" element={<Private />}>
          <Route path="/private/collects-todo" element={<PrivateCollectsToDo/>}/>
         
          </Route>

        </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
