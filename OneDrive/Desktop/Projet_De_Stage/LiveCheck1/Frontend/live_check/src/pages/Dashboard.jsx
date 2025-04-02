import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteServer } from "../Store/serversSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const servers = useSelector((state) => state.servers.servers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localAdmin = localStorage.getItem("admin");

  const handleAddServer = () => {
    navigate("/addServer");
  };

  const handleEditServer = (serverId) => {
    navigate(`/editServer/${serverId}`);
  };

  const handleDeleteServer = (serverId) => {
    dispatch(deleteServer(serverId));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Gestion des Serveurs
      </h1>

      {localAdmin && (
        <button
          onClick={handleAddServer}
          className="mb-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition cursor-pointer "
        >
          + Ajouter un Serveur
        </button>
      )}

      {servers?.length > 0 ? (
        <table className="w-full mt-4 table-auto shadow-lg border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-3">Nom</th>
              <th className="border px-4 py-3">Rôle</th>
              <th className="border px-4 py-3">Statut DV</th>
              <th className="border px-4 py-3">Statut DP</th>
              {localAdmin && <th className="border px-4 py-3">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {servers.map((server, index) => (
              <tr
                key={server.server_id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border px-4 py-3">{server.name}</td>
                <td className="border px-4 py-3">{server.role}</td>
                <td className="border px-4 py-3">
                  {server.dv_status || "N/A"}
                </td>
                <td className="border px-4 py-3">
                  {server.dp_status || "N/A"}
                </td>
                {localAdmin && (
                  <td className="border px-4 py-3 flex justify-center space-x-2">
                    <button
                      onClick={() => handleEditServer(server.server_id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition cursor-pointer "
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteServer(server.server_id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer "
                    >
                      Supprimer
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600 mt-4">
          Aucun serveur disponible.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
