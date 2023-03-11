import { connectToDatabase } from "../../../utils/mongodb";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
    console.log('end point hit')
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const { url } = req.body;

    const existingUrl = await db.collection("urls").findOne({ url });

    if (existingUrl) {
      return res.status(200).json({
        success: true,
        shortUrl: `${process.env.BASE_URL}/${existingUrl._id}`,
      });
}

const newUrl = { url, _id: nanoid(7) };

await db.collection("urls").insertOne(newUrl);

return res.status(200).json({
  success: true,
  shortUrl: `${process.env.BASE_URL}/${newUrl._id}`,
});
}

return res.status(400).json({ success: false });
}