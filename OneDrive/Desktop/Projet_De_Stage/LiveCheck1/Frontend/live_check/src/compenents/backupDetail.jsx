import React from "react";
import userData from "../static/db.json";

const BackupDetails = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Backup Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left border">ID</th>
              <th className="py-3 px-6 text-left border">Server</th>
              <th className="py-3 px-6 text-left border">check time</th>
              <th className="py-3 px-6 text-left border">Success</th>
              <th className="py-3 px-6 text-left border">In progress</th>
              <th className="py-3 px-6 text-left border">Failed</th>
              <th className="py-3 px-6 text-left border">Queud</th>
            </tr>
          </thead>
          <tbody>
            {userData.backup_details.map((backup_detail) => (
              <tr key={backup_detail.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 border">{backup_detail.id}</td>
                <td className="py-3 px-6 border">
                  Serveur {backup_detail.server_id}
                </td>
                <td className="py-3 px-6 border">{backup_detail.check_time}</td>
                <td className="py-3 px-6 border">{backup_detail.success}</td>
                <td className="py-3 px-6 border">
                  {backup_detail.in_progress}
                </td>
                <td className="py-3 px-6 border">{backup_detail.failed}</td>
                <td className="py-3 px-6 border">{backup_detail.queud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BackupDetails;
