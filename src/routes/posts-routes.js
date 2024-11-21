import express from "express";

import { sendPost, listPosts } from "../controllers/posts-controller.js";

const routes = (app) => {
 app.use(express.json());

 app.get("/posts", listPosts);
 app.post("/posts", sendPost);
};

export default routes;
