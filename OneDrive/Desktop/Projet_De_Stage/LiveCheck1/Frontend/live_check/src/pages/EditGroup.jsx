import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../compenents/CustomInput";
import { useNavigate, useParams } from "react-router-dom";
import { updateGroupe } from "../Store/GroupsSlice";

function EditGroup() {
  const params = useParams();
  const groups = useSelector((state) => state.groups.groups);

  const nomGroupeRef = useRef();
  const trigrammeRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { idGroup } = params;
  const groupe = groups.find((group) => group.group_id === +idGroup);

  const handleEditGroupe = (e) => {
    e.preventDefault();
    const newGroupe = {
      group_id: groupe.group_id,
      name: nomGroupeRef.current.value,
      trigramme: trigrammeRef.current.value,
    };

    dispatch(updateGroupe({ id: groupe.group_id, newGroup: newGroupe }));
    navigate("/groupe");
  };

  const inputFields = [
    {
      id: "input-1",
      text: "Veuillez saisir le nom du groupe",
      ref: nomGroupeRef,
      isRequired: true,
      defaultValue: groupe.name,
    },
    {
      id: "input-2",
      text: "Veuillez saisir le trigramme",
      ref: trigrammeRef,
      isRequired: true,
      defaultValue: groupe.trigramme,
    },
  ];

  return (
    <div className="flex justify-center w-[90%] m-auto">
      <form
        onSubmit={handleEditGroupe}
        className="w-[60%] my-5 ring-2 ring-gray-300 rounded-xl flex flex-col justify-center items-center"
      >
        <h1 className="text-center p-4 text-2xl font-bold">Modifier groupe</h1>
        <div>
          <input type="hidden" name="group_id" id="group_id" />
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
          Modifier Groupe
        </button>
      </form>
    </div>
  );
}

export default EditGroup;
