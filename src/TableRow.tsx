import { Dog } from "@/types";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { EditandDeleteButtonwithTooltip } from "./EditandDeleteButtonwithTooltip";

interface Props {
  headers: string[];
  dog: Dog;
  onDeleteHandler: (dogId: string) => Promise<void>;
}

export const TableRow = ({ headers, dog, onDeleteHandler }: Props) => {
  const [name, setName] = useState(dog.name);
  const [breed, setBreed] = useState(dog.breed);
  const [age, setAge] = useState(dog.age);

  const changesMade =
    name !== dog.name || breed !== dog.breed || age !== dog.age;

  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  const [editing, setEditing] = useState(false);
  const handleEditSubmit = async (dogId: string) => {
    try {
      const responseBody = { dogId, name, breed, age };
      const res = await fetch(`http://localhost:3000/api/dogs/${dogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(responseBody),
      });
      const data = await res.json();
      if (data) {
        setSuccessMessage(data.message);
      }
      console.log(data.message);
      setHovered(false);
      setEditing(false);
    } catch (err) {
      setEditError(true);
      console.error(err);
    }
  };

  function editRowColour(editing: boolean) {
    if (editing === true) {
      return "bg-indigo-100";
    } else {
      return "hover:bg-gray-100";
    }
  }

  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    undefined
  );
  const [editError, setEditError] = useState<boolean>(false);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(undefined);
      }, 2750);
    }
  }, [successMessage]);

  return (
    <tr
      className={classNames(editRowColour(editing))}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={!editing}
        />
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <input
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          disabled={!editing}
        />
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <input
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
          disabled={!editing}
        />
      </td>
      {successMessage && !hovered && (
        <td className="absolute translate-x-1/4 translate-y-1/2 px-4 rounded-lg text-center bg-green-500 text-green-700 bg-opacity-10">
          &#x2713; successfully updated
        </td>
      )}

      {editError && <td> An Error occurred.</td>}

      <td className="absolute flex font-semibold translate-y-1/2 items-center gap-x-4 px-4">
        {hovered && !editing && (
          <EditandDeleteButtonwithTooltip
            editing={editing}
            onDeleteHandler={onDeleteHandler}
            dog={dog}
            setEditing={setEditing}
          />
        )}
        {editing && (
          <div className="flex gap-x-2 justify-items-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 disabled:bg-gray-200 disabled:text-slate-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-xs px-2 py-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => handleEditSubmit(dog._id)}
              disabled={!changesMade}
            >
              Submit
            </button>

            <button
              className="text-slate-800 bg-gray-200 hover:bg-gray-300 rounded-lg text-xs px-2 py-0.5"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};
