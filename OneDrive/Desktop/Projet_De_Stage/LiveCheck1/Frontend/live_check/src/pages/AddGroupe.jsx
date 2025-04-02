import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../compenents/CustomInput";
import { useNavigate } from "react-router-dom";
import { addGroupe } from "../Store/GroupsSlice";

function AddGroupe() {
  const nomGroupeRef = useRef();
  const trigrammeRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddGroupe = (e) => {
    e.preventDefault();

    const uniqueKey = `server-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    const newGroupe = {
      group_id: uniqueKey,
      name: nomGroupeRef.current.value,
      trigramme: trigrammeRef.current.value,
    };

    dispatch(addGroupe(newGroupe));
    navigate("/groupe");
  };

  const inputFields = [
    {
      id: "input-1",
      text: "Veuillez saisir le nom du groupe",
      ref: nomGroupeRef,
      isRequired: true,
    },
    {
      id: "input-2",
      text: "Veuillez saisir le trigramme",
      ref: trigrammeRef,
      isRequired: true,
    },
  ];

  return (
    <div className="flex justify-center w-[90%] m-auto">
      <form
        onSubmit={handleAddGroupe}
        className="w-[60%] my-5 ring-2 ring-gray-300 rounded-xl flex flex-col justify-center items-center"
      >
        <h1 className="text-center p-4 text-2xl font-bold">
          Ajouter Un nouveau groupe
        </h1>
        <div>
          <input type="hidden" name="group_id" id="group_id" />
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
          Ajouter Groupe
        </button>
      </form>
    </div>
  );
}

export default AddGroupe;
