import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "dimpram10@gmail.com", // generated ethereal user
    pass: "iddusryizmqnjhva", // generated ethereal password
  },
})

export default mailTransporter;