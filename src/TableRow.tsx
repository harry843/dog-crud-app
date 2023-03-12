import { Dog } from "@/types";
import classNames from "classnames";
import { useEffect, useState } from "react";

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
      const responseBody = { name, breed, age };
      const res = await fetch(`http://localhost:5678/dogs/${dogId}`, {
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

  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    undefined
  );
  const [editError, setEditError] = useState<boolean>(false);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(undefined);
      }, 2000);
    }
  }, [successMessage]);

  return (
    <tr
      className="hover:bg-gray-100"
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
        <div className="absolute translate-y-1/2 px-4 rounded-full text-center bg-green-500 text-green-500 bg-opacity-10">
          &#x2713; successfully updated
        </div>
      )}

      {editError && <div> An Error occurred.</div>}

      {hovered && (
        <td className="absolute flex font-semibold translate-y-1/2 gap-x-4 px-4">
          <button
            className="hover:text-red-500"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this record?")
              )
                onDeleteHandler(dog._id);
            }}
          >
            &#10005;
          </button>

          <button
            className={classNames("text-base", {
              "text-green-500": editing,
              "hover:text-indigo-500": !editing,
            })}
            onClick={() => {
              setEditing(!editing);
            }}
          >
            Edit
          </button>

          {changesMade && editing && (
            <button
              className="px-2 rounded-2xl bg-indigo-600 bg-opacity-10 text-indigo-600"
              onClick={() => handleEditSubmit(dog._id)}
            >
              Submit
            </button>
          )}
        </td>
      )}
    </tr>
  );
};
