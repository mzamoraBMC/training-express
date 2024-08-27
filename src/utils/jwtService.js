import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "SECRET_JWT";

export const generateToken = (id) => {
  return jwt.sign({ id: id }, secret, { expiresIn: "3h" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
