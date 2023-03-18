import { Users } from "../models/Association.js";
import { userLoginSchema, userRegistrationSchema } from "../utils/joyVerification.js";

const isEmailExist = async (req, res, next) => {
  const user = await Users.findAll({
    where: {
      email: req.body.email
    },
    attributes: ['id']
  });

  if (user.length > 0)
    return res.status(400).json({ msg: "Tidak dapat menggunakan email" })

  next();
}

const registerVerify = async (req, res, next) => {
  userRegistrationSchema.validateAsync(req.body)
    .then(() => next())
    .catch(error => {
      return res.status(400).json({ msg: error.details[0].message })
    })
}

const loginVerify = async (req, res, next) => {
  userLoginSchema.validateAsync(req.body)
    .then(() => next())
    .catch(err => res.status(400).json({ msg: err.details[0].message }));
}

const isUserAdmin = (req, res, next) => {
  const userId = res.locals.userId;
  Users.findOne({
    where: {
      id: userId
    }
  }).then((user) => {
    if (user.isAdmin) {
      return next()
    }

    return res.status(403).json({
      msg: "Anda tidak punya hak akses!"
    })
  }).catch(err => {
    return res.status(400).json({
      msg: "ERROR",
      payload: err
    })
  })
}

export { isEmailExist, registerVerify, loginVerify, isUserAdmin };