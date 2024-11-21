import connectMongoDB from "../config/dbConfig.js";

const connexion = await connectMongoDB(process.env.STRING_CONNEXION);

export async function getAllPosts() {
 const db = connexion.db("nodejs-gemini");
 const collection = db.collection("posts");

 return collection.find().toArray();
}

export async function createPost(data) {
 const db = connexion.db("nodejs-gemini");
 const collection = db.collection("posts");

 return collection.insertOne(data);
}
