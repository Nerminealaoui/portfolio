import React from "react";

function CustomInput({ text = "", ref, isRequired, defaultValue }) {
  return (
    <div className="flex align-middle flex-col gap-4 p-2 m-auto w-[95%]">
      <label htmlFor="group_id" className="text-md font-medium ps-2">
        {text}
      </label>
      <input
        required={isRequired}
        type="text"
        ref={ref}
        defaultValue={defaultValue}
        className="ring-1 ring-gray-400 rounded-sm outline-none p-2 w-[100%]"
      />
    </div>
  );
}

export default CustomInput;
