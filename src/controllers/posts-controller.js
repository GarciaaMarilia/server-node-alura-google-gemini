import fs from "fs";

import getDescriptionWithGemini from "../services/gemini-service.js";
import { getAllPosts, createPost, updatePost } from "../models/posts-model.js";

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

export async function putPost(req, res) {
 const id = req.params.id;
 const urlImage = `http://localhost:3000/${id}.png`;

 try {
  const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
  const description = await getDescriptionWithGemini(imgBuffer);

  const post = {
   imgUrl: urlImage,
   description: description,
   alt: req.body.alt,
  };

  const updatedPost = await updatePost(id, post);

  res.status(200).json(updatedPost);
 } catch (err) {
  console.error(err);
  res.status(500).json({ Erro: "Falha na requisição" });
 }
}
