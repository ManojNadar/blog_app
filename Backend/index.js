import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { currentuser, login, register } from "./Controllers/UserController.js";
import {
  addBlog,
  allBlogs,
  deleteBlog,
  editBlog,
  singleBlog,
  updateBlog,
} from "./Controllers/BlogController.js";
import { admin, every } from "./Middlewares/AllMiddleWare.js";
import { addComment } from "./Controllers/CommentController.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//user  Routes

app.post("/register", register);
app.post("/login", login);
app.post("/currentuser", currentuser);

// blog routes
app.post("/addblog", admin, addBlog);
app.get("/allblogs", allBlogs);
app.post("/singleblog", singleBlog);
app.post("/editblog", admin, editBlog);
app.post("/updateblog", admin, updateBlog);
app.post("/deleteblog", admin, deleteBlog);

// comments

app.post("/addcomment", every, addComment);

const PORT = 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    "error on DB";
  });

app.listen(PORT, () => {
  console.log(`sever running on Port ${PORT}`);
});
