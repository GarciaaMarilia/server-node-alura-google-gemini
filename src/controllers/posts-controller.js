import { getAllPosts, createPost } from "../models/posts-model.js";
import fs from "fs";

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
  res.status(500).json({ Erro: "Falha na requisição" });
 }
}

export async function uploadImage(req, res) {
 const newPost = {
  descricao: "",
  imgUrl: req.file.originalname,
  alt: "",
 };
 try {
  const createdPost = await createPost(newPost);
  const updatedImage = `uploads/${createdPost.insertedId}.png`;
  fs.renameSync(req.file.path, updatedImage);
  res.status(200).json(createdPost);
 } catch (err) {
  console.error(err.message);
  res.status(500).json({ Erro: "Falha na requisição" });
 }
}
