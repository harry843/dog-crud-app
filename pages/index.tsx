import { Inter } from "next/font/google";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Table from "../src/Table.jsx";
import LoadingSpinner from "../src/LoadingSpinner";
import { AddDogForm } from "../src/AddDogForm";
import { compileFunction } from "vm";
import { Dogs } from "@/types/index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dogs, setDogs] = useState<Dogs>([]);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);
  //const [formDeleting, setFormDeleting] = useState(false);

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setFormSubmitting(true);
    const responseBody = { name, breed, age };
    const res = await fetch(`/api/dogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(responseBody),
    });
    const data = await res.json();
    setFormSubmitting(false);
  };

  const onDeleteHandler = async (dogId: string) => {
    setFormSubmitting(true);
    const res = await fetch(`/api/dogs/${dogId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setFormSubmitting(false);
    console.log("Dog deleted with ID: ", dogId);
  };

  const callApi = useCallback(async () => {
    try {
      const res = await fetch("/api/dogs", { method: "GET" });
      const data = await res.json();
      setDogs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    callApi();
  }, [callApi, formSubmitting]);
  const headers = dogs.length > 0 ? Object.keys(dogs[0]).slice(1, -1) : [];
  const dogsExist = dogs.length > 0;

  return (
    <div className="flex flex-col w-screen md:flex-row h-screen p-8 gap-x-5">
      {loading && <LoadingSpinner />}
      {dogsExist && (
        <>
          <AddDogForm
            name={name}
            breed={breed}
            age={age}
            setName={setName}
            setBreed={setBreed}
            setAge={setAge}
            onSubmitHandler={onSubmitHandler}
          />
          <Table
            headers={headers}
            dogs={dogs}
            onDeleteHandler={onDeleteHandler}
          />
        </>
      )}
    </div>
  );
}
