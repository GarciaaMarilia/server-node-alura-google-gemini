import cors from "cors";
import multer from "multer";
import express from "express";

import {
 sendPost,
 listPosts,
 uploadImage,
 putPost,
} from "../controllers/posts-controller.js";

const corsOptions = {
 origin: "http://localhost:8000",
 optionsSuccessStatus: 200,
};

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
 app.use(express.json());
 app.use(cors(corsOptions));

 app.get("/posts", listPosts);
 app.post("/posts", sendPost);
 app.post("/upload", upload.single("image"), uploadImage);
 app.put("/upload/:id", putPost);
};

export default routes;
