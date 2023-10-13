import Blog from "../Models/BlogModel.js";

// add blogs

export const addBlog = async (req, res) => {
  try {
    const { title, image, description, categories } = req.body.detail;

    // console.log(title, image, description, categories);

    if (!title || !image || !description || !categories) {
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const newBlog = new Blog({
      title,
      image,
      description,
      categories,
    });

    await newBlog.save();
    return res.status(201).json({
      success: true,
      message: "new blog added success",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// all blogs

export const allBlogs = async (req, res) => {
  try {
    // const { page, limit = 3 } = req.body;

    // const skipVal = parseInt((page - 1) * limit);
    // const limitVal = limit;
    // const all = await Blog.find({}).skip(skipVal).limit(limitVal).lean();

    // if (all?.length) {
    //   return res.status(200).json({
    //     success: true,
    //     allBlogs: all,
    //   });
    // }

    const all = await Blog.find({});

    if (all?.length) {
      return res.status(200).json({
        success: true,
        allBlogs: all,
      });
    }

    return res.status(404).json({
      success: false,
      message: "no blogs found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editBlog = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchBlog = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id)
      return res.status(404).json({
        success: false,
        message: "id is required",
      });

    const searchBlog = await Blog.find({ _id: id });

    if (searchBlog?.length) {
      return res.status(200).json({
        success: true,
        message: "blog Fetched",
        searchBlog: searchBlog,
      });
    } else {
      res.status(404).json({ success: false, message: "No Blog Found" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
