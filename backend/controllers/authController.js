import { Facility, Users } from "../models/Association.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const saltRound = 10;
const genSalt = await bcrypt.genSalt(saltRound);

const register = async (req, res) => {
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.send(401).json({
      msg: "Password tidak cocok dengan konfirmasi password!",
    })
  }

  delete req.body.confirmPassword;

  try {
    const hashPassword = await bcrypt.hash(req.body.password, genSalt);
    const user = await Users.create({
      ...req.body,
      password: hashPassword
    })

    return res.status(201).json({
      msg: "User berhasil dibuat!",
      payload: user
    })
  } catch (error) {
    return res.status(400).json({
      msg: "Terjadi kesalahan!",
      payload: error
    })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({
      where: {
        email
      },
      include: [Facility]
    });

    console.log(user)

    if (!user) return res.status(401).json({ msg: "Email atau Password salah!" })
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ msg: "Email atau Password salah!" })

    const accessToken = jwt.sign({
      userId: user.id,
      fullname: user.fullname,
      isAdmin: user.isAdmin,
      isPengelola: user.facilities.length > 0 ? true : false
    }, process.env.ACCESS_SECRET_KEY, { expiresIn: '3h' })

    return res.status(200).json({
      msg: "Berhasil login!",
      token: accessToken
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Terjadi Error",
      payload: error
    })
  }
}

const logout = (req, res) => {
  res.status(200).json({
    msg: "Berhasil Logout"
  })
}

const getDecodedToken = (req, res) => {
  const { token } = req.body;
  // console.log(token);
  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ payload: err });
    const userId = decoded.userId;
    const fullname = decoded.fullname;
    const isAdmin = decoded.isAdmin;
    const isPengelola = decoded.isPengelola;
    return res.status(200).json({
      msg: "Authorized",
      payload: {
        userId,
        fullname,
        isAdmin,
        isPengelola
      }
    })
  })
}

export { register, login, logout, getDecodedToken };