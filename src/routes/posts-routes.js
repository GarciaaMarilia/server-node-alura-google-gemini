import multer from "multer";
import express from "express";

import {
 sendPost,
 listPosts,
 uploadImage,
} from "../controllers/posts-controller.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
 app.use(express.json());

 app.get("/posts", listPosts);
 app.post("/posts", sendPost);
 app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
