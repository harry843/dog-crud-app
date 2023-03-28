import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
} from "react";

//Bring in variables created from other components as Props
interface Props {
  name: string;
  breed: string;
  age: number | undefined;
  setName: Dispatch<SetStateAction<string>>;
  setBreed: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<number | undefined>>;
  onSubmitHandler: (event: FormEvent) => Promise<void>;
  submitMessage: string | undefined;
  setSubmitMessage:  Dispatch<SetStateAction<string | undefined>>;
}

export const AddDogForm = ({
  name,
  breed,
  age,
  setName,
  setBreed,
  setAge,
  onSubmitHandler,
  submitMessage,
  setSubmitMessage,
}: Props) => {

  //Pop-up message to confirm if form submission was successful
  useEffect(() => {
    if (submitMessage) {
      setTimeout(() => {
        setSubmitMessage(undefined);
      }, 2750);
    }
  }, [submitMessage, setSubmitMessage]);

  //HTML to be rendered (user input form)
  return (
    <section className="space-y-4 divide-y flex-shrink-0">
      <h1 className="text-lg font-medium">Add your Dog to the collection!</h1>
      <form className="py-2" onSubmit={onSubmitHandler}>
        <label>
          Name:
          <input
            id="name"
            placeholder="Enter dog name"
            //Data Validation Properties
            type="text"
            value={name}
            pattern="[a-zA-Z][a-zA-Z -]+"
            required
            onInvalid={() => "You must enter a name."}
            onChange={(event) => setName(event.target.value)}
            title="Please enter only Alphabet characters."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>

        <label>
          Breed:
          <input
            id="breed"
            placeholder="Enter dog breed"
            //Data Validation Properties
            type="text"
            value={breed}
            pattern="[a-zA-Z][a-zA-Z -]+"
            required
            onInvalid={() => "You must enter a breed."}
            onChange={(event) => setBreed(event.target.value)}
            title="Please enter only Alphabet characters."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>

        <label>
          Age:
          <input
            id="age"
            placeholder="Enter dog age"
            //Data Validation Properties
            type="number"
            value={age}
            step="1"
            min="1"
            required
            onInvalid={() => "You must enter an age."}
            onChange={(event) => setAge(Number(event.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </label>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {/* //conditional render of success message if true*/}
        {submitMessage && (
          <div className="absolute translate-x-28 -translate-y-10 px-1 rounded-lg text-center bg-green-500 text-green-700 bg-opacity-10">
            &#x2713; successfully updated
          </div>
        )}
      </form>
    </section>
  );
};
//
