// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Dog } from "../../../db/dbconfig";
import { Dogs } from "@/types/index.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case "GET":
      try {
        const dogs: any = await Dog.find({});
        res.json(dogs);
      } catch (err) {
        console.log(err);
      }
      break;
    case "POST":
      const dog = new Dog({
        name: body.name,
        breed: body.breed,
        age: body.age,
      });
      try {
        console.log(body);
        dog.save();

        res.json({ message: `${body.name} was added to the collection!` });
      } catch (err) {
        console.log(err);
      }
  }
}
