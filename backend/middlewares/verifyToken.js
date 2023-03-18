import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header.split(' ')[0];

  if (!token) return res.status(401).json({ msg: "Tidak terautentikasi" })
  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ payload: err });
    res.locals.userId = decoded.userId;
    next();
  })
}