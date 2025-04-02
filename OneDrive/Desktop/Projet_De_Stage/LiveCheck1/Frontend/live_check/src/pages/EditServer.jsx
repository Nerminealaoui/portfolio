import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "../compenents/CustomInput";
import { updateServer } from "../Store/serversSlice";

function EditServer() {
  const params = useParams();
  const groups = useSelector((state) => state.groups.groups);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { idServer } = params;
  const servers = useSelector((state) => state.servers.servers);
  const server = servers.filter((server) => server.server_id === +idServer)[0];

  const groupeRef = useRef();
  const nomServerRef = useRef();
  const roleServerRef = useRef();
  const dv_statueRef = useRef();
  const dp_statusRef = useRef();

  const handleUpdateServeur = (e) => {
    e.preventDefault();
    const updatedServer = {
      server_id: server.server_id,
      group_id: groupeRef.current.value,
      name: nomServerRef.current.value,
      role: roleServerRef.current.value,
      dv_status: dv_statueRef.current.value || "N/A",
      dp_status: dp_statusRef.current.value || "N/A",
    };

    if (groupeRef?.current?.value !== "Nope") {
      dispatch(
        updateServer({ id: server.server_id, newServer: updatedServer })
      );
      navigate("/dashboard");
    } else {
      alert("Veuiller sélectionner un groupe");
    }
  };

  const inputFields = [
    {
      id: "input-1",
      text: "Veuillez saisir le nom du serveur",
      ref: nomServerRef,
      isRequired: true,
      defaultValue: server.name,
    },
    {
      id: "input-2",
      text: "Veuillez saisir le rôle",
      ref: roleServerRef,
      isRequired: true,
      defaultValue: server.role,
    },
    {
      id: "input-3",
      text: "Veuillez saisir dv_status",
      ref: dv_statueRef,
      isRequired: false,
      defaultValue: server.dv_status === "N/A" ? "" : server.dv_status,
    },
    {
      id: "input-4",
      text: "Veuillez saisir dp_status",
      ref: dp_statusRef,
      isRequired: false,
      defaultValue: server.dp_status === "N/A" ? "" : server.dp_status,
    },
  ];

  return (
    <div className="flex justify-center w-[90%] m-auto">
      <form
        onSubmit={handleUpdateServeur}
        className="w-[60%] my-5 ring-2 ring-gray-300 rounded-xl flex flex-col justify-center items-center "
      >
        <h1 className="text-center p-4 text-2xl font-bold">
          Modifier serveur "{server.name}"
        </h1>
        <div>
          <input type="hidden" name="server_id" id="server_id" value={5} />
        </div>
        <div className="flex align-middle flex-col gap-4 p-2 w-[95%] m-auto">
          <label htmlFor="group_id" className="text-md font-medium ps-2">
            Sélectionner un groupe
          </label>
          <select
            defaultValue={server.group_id}
            required={true}
            ref={groupeRef}
            name="group_id"
            id="group_id"
            className="ring-1 ring-gray-400 rounded-sm outline-none p-2 w-[100%]"
          >
            <option defaultValue={"Nope"}>Select group</option>
            {groups.map((group) => (
              <option key={group.group_id} value={group.group_id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        {inputFields.map((inputField) => {
          const { id, text, ref, isRequired, defaultValue } = inputField;
          return (
            <CustomInput
              key={id}
              text={text}
              ref={ref}
              isRequired={isRequired}
              defaultValue={defaultValue}
            />
          );
        })}
        <button
          type="submit"
          className="w-[50%] bg-yellow-500 text-white p-4 m-4 rounded-xl hover:bg-yellow-600 transition cursor-pointer"
        >
          Modifier Serveur
        </button>
      </form>
    </div>
  );
}

export default EditServer;
