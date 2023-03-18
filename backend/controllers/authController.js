import { Users } from "../models/Association.js";
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
      }
    });

    if (!user) return res.status(404).json({ msg: "Email atau Password salah!" })

    const passwordMatch = bcrypt.compare(req.body.password, password);
    if (!passwordMatch) return res.status(404).json({ msg: "Email atau Password salah!" })

    const accessToken = jwt.sign({
      userId: user.id,
      fullname: user.fullname
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

export { register, login };