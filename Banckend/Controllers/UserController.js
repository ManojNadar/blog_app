import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // const { name, email, password, number, role } = req.body;

    console.log(name, email, password, number, role);

    if (!name || !email || !password || !role)
      return res.status(404).json({
        success: false,
        message: "all fields are mandatory",
      });

    const isEmailExist = await User.find({ email });

    if (isEmailExist?.length) {
      return res.status(404).json({
        success: false,
        message: "Email already registered Please try another email",
      });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const userDetail = new User({
      name,
      email,
      password: hashPass,
      role,
    });

    await userDetail.save();

    return res.status(200).json({
      success: true,
      message: "Registered Success",
      data: userDetail,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        const userObj = {
          name: user.name,
          email: user.email,
          _id: user._id,
          role: user.role,
        };
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        return res.json({
          success: true,
          message: "Logged In Success",
          userData: userObj,
          token: token,
        });
      }
    }
    return res.json({
      success: false,
      message: "invalid Credential",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Currentuser
export const currentuser = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token)
      return res
        .status(404)
        .json({ success: false, message: "token is required" });

    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodeToken) {
      return res
        .status(404)
        .json({ success: false, message: "not a valid token" });
    }

    const userId = decodeToken?.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not Found" });
    }

    const userObj = {
      name: user.name,
      email: user.email,
      _id: user._id,
      role: user.role,
    };

    res.status(200).json({ success: true, user: userObj });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
