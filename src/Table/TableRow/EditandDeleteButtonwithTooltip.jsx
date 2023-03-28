import React, { useState } from "react";
import EditButton from "../../img/EditButton";
import DeleteButton from "../../img/DeleteButton";
import classNames from "classnames";

//Define component to display Edit and Delete Button upon hover-over table row
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
        //Set to editing mode on click
        onClick={() => {
          setEditing(!editing);
        }}
        //Change state on hover-over of table row
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
      >
        <EditButton />
      </button>
      {/* Conditional rendering of edit and delete buttons on hover-over */}
      {editHovered && (
        <div className="absolute flex bg-gray-100 -translate-x-2/3 rounded-md border -top-2 -translate-y-full p-0.5 px-1 text-xs">
          Edit
        </div>
      )}
      <button
        className="hover:fill-red-500 text-lg"
        //Warning message to confirm delete
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
