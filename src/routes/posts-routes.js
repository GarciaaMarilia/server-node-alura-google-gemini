import multer from "multer";
import express from "express";

import {
 sendPost,
 listPosts,
 uploadImage,
 putPost,
} from "../controllers/posts-controller.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
 app.use(express.json());

 app.get("/posts", listPosts);
 app.post("/posts", sendPost);
 app.post("/upload", upload.single("image"), uploadImage);
 app.put("/upload/:id", putPost);
};

export default routes;
