import { verifyToken } from "../utils/jwtService.js";

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ status: 401, message: "Access denied" });
  } else {
    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(401).json({ status: 401, message: "Invalid Token" });
    }
    req.body.userId = decoded.id;
    next();
  }
};
