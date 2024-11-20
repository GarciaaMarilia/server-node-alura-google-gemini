import getAllPosts from "../models/posts-model.js";

export async function listPosts(req, res) {
 const posts = await getAllPosts();
 res.status(200).json(posts);
}
