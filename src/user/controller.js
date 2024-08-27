import User from "./model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Called user/login! ${email}`);
    const user = await User.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = generateToken(user._id.toString());
        res.status(200).json(token);
      } else {
        res.status(401).json({ status: 401, message: "Invalid Credentials" });
      }
    } else {
      res.status(401).json({ status: 401, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log("🔥 ERROR (user/login): ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req, res) => {
  console.log("Called user/register!", req.body);
  const { email, name, password } = req.body;
  try {
    if (email && name && password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const newUser = new User({
        email: email,
        name: name,
        password: hashedPass,
      });
      const user = await newUser.save();
      const token = generateToken(user._id.toString());
      res.status(200).send(token);
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    console.log("🔥 ERROR (user/register): ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyInfo = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("Called user/getmyInfo!", req.body);
    const user = await User.findById(userId);
    res.status(200).json({ name: user.name, email: user.email, id: userId });
  } catch (err) {
    console.log("🔥 ERROR (user/getMyInfo): ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
