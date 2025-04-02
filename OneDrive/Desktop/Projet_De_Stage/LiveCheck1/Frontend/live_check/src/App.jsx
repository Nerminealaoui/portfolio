import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import Navbar from "./compenents/navbar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/userDasboard";
import Store from "./Store/store";
import Details from "./pages/Details";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import Verification from "./utils/Verification";
import AdminRoute from "./utils/AdminRoute";
import AddServer from "./pages/AddServer";
import EditServer from "./pages/EditServer";
import Groups from "./pages/groups";
import AddGroupe from "./pages/AddGroupe";
import EditGroup from "./pages/EditGroup";
import ReplicationTable from "./compenents/replications";
import BackupDetails from "./compenents/backupDetail";
import NavNav from "./compenents/NavNav";

function App() {
  const user = useSelector((state) => state.user.user);
  const localUser = localStorage.getItem("user");

  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <main className="flex flex-row w-[100%] min-h-screen m-0 p-0 bg-gray-200">
      {currentRoute !== "/" && currentRoute !== "/verification" && <NavNav />}
      <div className="w-[80%] flex-1 rounded-t-4xl mx-3 mt-3 bg-white">
        {(user || localUser) && <Navbar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AdminRoute />}>
            <Route path="/servers" element={<Dashboard />} />
            <Route path="/groupe" element={<Groups />} />
            <Route path="/replications" element={<ReplicationTable />} />
            <Route path="/backup" element={<BackupDetails />} />
            <Route path="/Details/:group_id" element={<Details />} />
            <Route path="/addServer" element={<AddServer />} />
            <Route path="/addGroupe" element={<AddGroupe />} />
            <Route path="/editServer/:idServer" element={<EditServer />} />
            <Route path="/editGroup/:idGroup" element={<EditGroup />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/groups" element={<UserDashboard />} />
            <Route path="/groups/:group_id" element={<Details />} />
            <Route path="/server" element={<Dashboard />} />
          </Route>
          <Route path="verification" element={<Verification />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
