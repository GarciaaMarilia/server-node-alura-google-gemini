import express from "express";

import { listPosts } from "../controllers/posts-controller.js";

const routes = (app) => {
 app.use(express.json());

 app.get("/posts", listPosts);
};

export default routes;
