import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
  name: string;
  breed: string;
  age: number | undefined;
  setName: Dispatch<SetStateAction<string>>;
  setBreed: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<number | undefined>>;
  onSubmitHandler: (event: FormEvent) => Promise<void>;
}

export const AddDogForm = ({
  name,
  breed,
  age,
  setName,
  setBreed,
  setAge,
  onSubmitHandler,
}: Props) => {
  return (
    <section className="space-y-4 divide-y">
      <h1 className="text-lg font-medium">Add a Dog</h1>
      <form className="py-2" onSubmit={onSubmitHandler}>
        <label>
          Name:
          <input
            id="name"
            placeholder="Enter dog name"
            type="text"
            value={name}
            pattern="[a-zA-Z][a-zA-Z -]+"
            required
            onInvalid={() => "You must enter a name."}
            onChange={(event) => setName(event.target.value)}
            title="Please enter only Alphabet characters."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>

        <label>
          Breed:
          <input
            id="breed"
            placeholder="Enter dog breed"
            type="text"
            value={breed}
            pattern="[a-zA-Z][a-zA-Z -]+"
            required
            onInvalid={() => "You must enter a breed."}
            onChange={(event) => setBreed(event.target.value)}
            title="Please enter only Alphabet characters."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>

        <label>
          Age:
          <input
            id="age"
            placeholder="Enter dog age"
            type="number"
            value={age}
            required
            onInvalid={() => "You must enter an age."}
            onChange={(event) => setAge(Number(event.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
//
