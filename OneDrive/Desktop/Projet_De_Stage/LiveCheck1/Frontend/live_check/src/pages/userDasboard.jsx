import React, { useState } from "react";
import userData from "../../src/static/db.json";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [groups, setGroups] = useState(userData.groups);
  return (
    <div className="p-7">
      <h1 className="text-3xl font-bold mb-6">Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group.trigramme}
              className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-end">
                <div className="text-2xl flex gap-3 items-start w-[100%] font-medium">
                  {group.name.toUpperCase()}
                  <span className="font-medium text-sky-500">
                    {`(${group.trigramme})`}
                  </span>
                </div>
                <div>
                  <span>Success :</span> 302 | <span>Failed :</span> 0 |{" "}
                  <span>Progress :</span> 18 (At 21h:00){" "}
                </div>
                <div className="flex">
                  <Link
                    to={`/groups/${group.group_id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun client trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
