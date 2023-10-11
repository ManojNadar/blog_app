import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
  },
  posted: {
    type: Date,
  },
  comments: {
    type: [Object],
  },
});

export default mongoose.model("Blogs", blogSchema);
