import React, { useState } from "react";
import EditButton from "./img/EditButton";
import DeleteButton from "./img/DeleteButton";
import classNames from "classnames";

export const EditandDeleteButtonwithTooltip = ({ editing, onDeleteHandler, dog, setEditing }) => {
  const [editHovered, setEditHovered] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  console.log(editHovered);
  return (
    <div className="relative flex items-center space-x-3">
      <button
        className={classNames("text-base", {
          "fill-green-500": editing,
          "hover:fill-indigo-500": !editing,
        })}
        onClick={() => {
          setEditing(!editing);
        }}
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
      >
        <EditButton />
      </button>
      {editHovered && (
        <div className="absolute flex bg-gray-100 -translate-x-2/3 rounded-md border -top-2 -translate-y-full p-0.5 px-1 text-xs">
          Edit
        </div>
      )}
      <button
        className="hover:fill-red-500 text-lg"
        onClick={() => {
          if (window.confirm("Are you sure you wish to delete this record?"))
            onDeleteHandler(dog._id);
        }}
        onMouseEnter={() => setDeleteHovered(true)}
        onMouseLeave={() => setDeleteHovered(false)}
      >
        <DeleteButton />
      </button>
      {deleteHovered && (
        <div className="absolute flex bg-gray-100 translate-x-1/4 rounded-md border -top-2 -translate-y-full p-0.5 px-1 text-xs">
          Delete
        </div>
      )}
    </div>
  );
};
