import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../compenents/CustomInput";
import { useNavigate } from "react-router-dom";
import { addNewServer } from "../Store/serversSlice";

function AddServer() {
  const groups = useSelector((state) => state.groups.groups);

  const groupeRef = useRef();
  const nomServerRef = useRef();
  const roleServerRef = useRef();
  const dv_statueRef = useRef();
  const dp_statusRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddServeur = (e) => {
    e.preventDefault();

    const uniqueKey = `server-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    const newServer = {
      server_id: uniqueKey,
      group_id: groupeRef.current.value,
      name: nomServerRef.current.value,
      role: roleServerRef.current.value,
      dv_status: dv_statueRef.current.value || "N/A",
      dp_status: dp_statusRef.current.value || "N/A",
    };

    if (groupeRef?.current?.value !== "Nope") {
      dispatch(addNewServer(newServer));
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
    },
    {
      id: "input-2",
      text: "Veuillez saisir le rôle",
      ref: roleServerRef,
      isRequired: true,
    },
    {
      id: "input-3",
      text: "Veuillez saisir dv_status",
      ref: dv_statueRef,
      isRequired: false,
    },
    {
      id: "input-4",
      text: "Veuillez saisir dp_status",
      ref: dp_statusRef,
      isRequired: false,
    },
  ];

  return (
    <div className="flex justify-center w-[90%] m-auto">
      <form
        onSubmit={handleAddServeur}
        className="w-[60%] my-5 ring-2 ring-gray-300 rounded-xl flex flex-col justify-center items-center "
      >
        <h1 className="text-center p-4 text-2xl font-bold">
          Ajouter Un nouveau serveur
        </h1>
        <div>
          <input type="hidden" name="server_id" id="server_id" />
        </div>
        <div className="flex align-middle flex-col gap-4 p-2 w-[95%] m-auto">
          <label htmlFor="group_id" className="text-md font-medium ps-2">
            Sélectionner un groupe
          </label>
          <select
            required={true}
            ref={groupeRef}
            name="group_id"
            id="group_id"
            className="ring-1 ring-gray-400 rounded-sm outline-none p-2 w-[100%]"
          >
            <option value={"Nope"}>Select group</option>
            {groups.map((group) => (
              <option key={group.group_id} value={group.group_id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        {inputFields.map((inputField) => {
          const { id, text, ref, isRequired } = inputField;
          return (
            <CustomInput
              key={id}
              text={text}
              ref={ref}
              isRequired={isRequired}
            />
          );
        })}
        <button
          type="submit"
          className="w-[50%] bg-blue-600 text-white p-4 rounded-xl m-4 cursor-pointer hover:bg-blue-700"
        >
          Ajouter Serveur
        </button>
      </form>
    </div>
  );
}

export default AddServer;
