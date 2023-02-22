import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ScrollToTop from "./components/ScrollToTop.";
import "./index.css";
import Login from "./pages/Login";
import Private from "./pages/private/Private";
import PrivateAddCollectPoint from "./pages/private/PrivateAddCollectPoint";
import PrivateAddUserForm from "./pages/private/PrivateAddUserForm";
import PrivateAllCollectsTodo from "./pages/private/PrivateAllCollectsTodo";
import PrivateCollectDetails from "./pages/private/PrivateCollectDetails";
import PrivateCollectHistoric from "./pages/private/PrivateCollectHistoric";
import PrivateCollectPointDetails from "./pages/private/PrivateCollectPointDetails";
import PrivateCollectPointList from "./pages/private/PrivateCollectPointList";
import PrivateCollectPoints from "./pages/private/PrivateCollectPoints";
import PrivateCollectsAssign from "./pages/private/PrivateCollectsAssign";
import PrivateCollectsToDo from "./pages/private/PrivateCollectsToDo";
import PrivateHome from "./pages/private/PrivateHome";
import PrivateMessageArchived from "./pages/private/PrivateMessageArchived";
import PrivateMessageDetails from "./pages/private/PrivateMessageDetails";
import PrivateMessages from "./pages/private/PrivateMessages";
import PrivateMyProfil from "./pages/private/PrivateMyProfil";
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
              <Route path="/private/my-profil" element={<PrivateMyProfil />} />
              <Route
                path="/private/collects-points"
                element={<PrivateCollectPoints />}
              />
              <Route
                path="/private/collects-assign"
                element={<PrivateCollectsAssign />}
              />
              <Route
                path="/private/collects-todo"
                element={<PrivateCollectsToDo />}
              />
              <Route
                path="/private/all-collects-todo"
                element={<PrivateAllCollectsTodo />}
              />
              <Route
                path="/private/collect-details/:id"
                element={<PrivateCollectDetails />}
              />
              <Route
                path="/private/collect-points-list"
                element={<PrivateCollectPointList />}
              />
              <Route
                path="/private/collect-points/:id"
                element={<PrivateCollectPointDetails />}
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
                path="/private/add-collectPoint"
                element={<PrivateAddCollectPoint/>}
              />
              <Route
                path="/private/user-list"
                element={<PrivateUserList/>}
              />
                 <Route
                path="/private/user-details/:id"
                element={<PrivateUserDetails />}
              />
                 <Route
                path="/private/message-details/:id"
                element={<PrivateMessageDetails />}
              />
              <Route path="/private/messages" element={<PrivateMessages />} />
              <Route path="/private/messages-archived" element={<PrivateMessageArchived />} />
            </Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
