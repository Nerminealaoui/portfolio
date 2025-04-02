import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGroupe } from "../Store/GroupsSlice";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const groups = useSelector((state) => state.groups.groups);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddServer = () => {
    navigate("/addGroupe");
  };

  const handleEditGroup = (groupeId) => {
    navigate(`/editGroup/${groupeId}`);
  };

  const handleDeleteGroupe = (groupeId) => {
    dispatch(deleteGroupe(groupeId));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Gestion des Groupes
      </h1>

      <button
        onClick={handleAddServer}
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition cursor-pointer "
      >
        + Ajouter un groupe
      </button>

      {groups?.length > 0 ? (
        <table className="w-full mt-4 table-auto shadow-lg border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border px-4 py-3">Nom</th>
              <th className="border px-4 py-3">trigramme</th>
              <th className="border px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => (
              <tr
                key={group.group_id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
                }`}
              >
                <td className="border border-white px-4 py-3">{group.name}</td>
                <td className="border border-white px-4 py-3">
                  {group.trigramme}
                </td>
                <td className="border border-white px-4 py-3 flex justify-center space-x-2">
                  <button
                    onClick={() => handleEditGroup(group.group_id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition cursor-pointer "
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDeleteGroupe(group.group_id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition cursor-pointer "
                  >
                    Supprimer
                  </button>
                </td>
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

export default Groups;
