import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

import ScrollToTop from "./components/ScrollToTop.";
import "./index.css";
import Login from "./pages/Login";
import Private from "./pages/private/Private";
import PrivateAddUserForm from "./pages/private/PrivateAddUserForm";
import PrivateCollectDetails from "./pages/private/PrivateCollectDetails";
import PrivateCollectHistoric from "./pages/private/PrivateCollectHistoric";
import PrivateCollectsAssign from "./pages/private/PrivateCollectsAssign";
import PrivateCollectsToDo from "./pages/private/PrivateCollectsToDo";
import PrivateHome from "./pages/private/PrivateHome";
import PrivateMessages from "./pages/private/PrivateMessages";
import PrivateUserDetails from "./pages/private/PrivateUserDetails";
import PrivateUserList from "./pages/private/PrivateUserList";
import PrivateUsersAdmin from "./pages/private/PrivateUsersAdmin";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/private" element={<Private />}>
              <Route path="/private/home" element={<PrivateHome />} />
              <Route
                path="/private/collects-assign"
                element={<PrivateCollectsAssign />}
              />
              <Route
                path="/private/collects-todo"
                element={<PrivateCollectsToDo />}
              />
              <Route
                path="/private/collect-details/:id"
                element={<PrivateCollectDetails />}
              />
              <Route
                path="/private/users-admin"
                element={<PrivateUsersAdmin />}
              />
              <Route
                path="/private/collect-historic"
                element={<PrivateCollectHistoric />}
              />
              <Route
                path="/private/add-new-user"
                element={<PrivateAddUserForm/>}
              />
              <Route
                path="/private/user-list"
                element={<PrivateUserList/>}
              />
                 <Route
                path="/private/user-details/:id"
                element={<PrivateUserDetails />}
              />
              <Route path="/private/messages" element={<PrivateMessages />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
