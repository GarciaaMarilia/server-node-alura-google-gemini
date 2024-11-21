import { getAllPosts, createPost } from "../models/posts-model.js";

export async function listPosts(req, res) {
 const posts = await getAllPosts();
 res.status(200).json(posts);
}

export async function sendPost(req, res) {
 const newPost = req.body;
 try {
  const createdPost = await createPost(newPost);
  res.status(200).json(createdPost);
 } catch (err) {
  console.error(err);
  res.status(500);
 }
}
