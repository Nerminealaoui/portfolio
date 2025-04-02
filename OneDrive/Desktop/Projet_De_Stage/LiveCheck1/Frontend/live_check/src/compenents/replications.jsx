import React from "react";
import userData from "../static/db.json";

const ReplicationTable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Liste des Réplications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left border">ID</th>
              <th className="py-3 px-6 text-left border">Serveur</th>
              <th className="py-3 px-6 text-left border">Backlog</th>
              <th className="py-3 px-6 text-left border">
                Dernière Sauvegarde
              </th>
              <th className="py-3 px-6 text-left border">Statut</th>
            </tr>
          </thead>
          <tbody>
            {userData.replications.map((replication) => (
              <tr
                key={replication.replication_id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-3 px-6 border">
                  {replication.replication_id}
                </td>
                <td className="py-3 px-6 border">
                  Serveur {replication.server_id}
                </td>
                <td className="py-3 px-6 border">{replication.backlog}</td>
                <td className="py-3 px-6 border">
                  {replication.oldest_backup}
                </td>
                <td className="py-3 px-6 border">
                  {replication.status ? (
                    <span className="text-green-600 font-semibold">
                      ✅ Actif
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      ❌ Inactif
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReplicationTable;
