import type { NextApiRequest, NextApiResponse } from "next";
import { Dog } from "../../../db/dbconfig";

//Define function to handle API requests at the Row level (using row id)
export default async function idHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method, query } = req;
  switch (method) {
    case "GET":
      try {
        const dog_by_id = await Dog.findById(query.dogId, {});
        res.json({
          message: `${dog_by_id.name}, a ${dog_by_id.breed} aged ${dog_by_id.age} was retrieved from the collection, with id: ${query.dogId}`
        });
        console.log(dog_by_id);
      } catch (err) {
        console.log(err);
      }
      break;
    case "PUT":
      const dogUpdate = await Dog.findByIdAndUpdate(body.dogId, body, {});
      console.log(body, dogUpdate);
      try {
        console.log(body);
        dogUpdate.save();

        res.json({
          message: `${body.dogId} was edited and saved to the collection!`,
        });
      } catch (err) {
        console.log(err);
      }
      break;
    case "DELETE":
      console.log(query);
      try {
        await Dog.findByIdAndDelete(query.dogId);
        res.json({ message: `Deleted dog ${query.dogId} from collection.` });
        console.log(`Deleted dog ${query.dogId} from collection.`);
      } catch (err) {
        console.log(err);
      }
  }
}
