import Joi from "joi";

const userRegistrationSchema = Joi.object({
  fullname: Joi.string()
    .required()
    .messages({
      "string.empty": "Nama tidak boleh kosong!",
      "any.required": "Nama tidak boleh kosong!",
      "string.max": "Nama tidak boleh lebih dari 30 karakter!"
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "Email tidak boleh kosong!",
      "string.email": "Harap masukan email yang benar!",
      "any.required": "Email tidak boleh kosong!",
      "string.max": "Email tidak boleh lebih dari 30 karakter!"
    }),
  nomorHP: Joi.string()
    .max(14)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "Nomor HP tidak boleh kosong!",
      "any.required": "Nomor HP tidak boleh kosong!",
      "string.max": "Nomor HP tidak boleh lebih dari 14 karakter!",
      "string.pattern.base": "Harap masukan nomor HP yang benar!"
    }),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .messages({
      "string.empty": "Password tidak boleh kosong!",
      "any.required": "Password tidak boleh kosong!",
      "string.min": "Password tidak boleh kurang dari 8 karakter!",
      "string.max": "Password tidak boleh lebih dari 30 karakter!"
    }),
  confirmPassword: Joi.ref('password')
});

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email()
    .max(30)
    .required()
    .messages({
      "string.empty": "Email tidak boleh kosong!",
      "string.email": "Harap masukan email yang benar!",
      "any.required": "Email tidak boleh kosong!",
      "string.max": "Email tidak boleh lebih dari 30 karakter!"
    }),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .messages({
      "string.empty": "Password tidak boleh kosong!",
      "any.required": "Password tidak boleh kosong!",
      "string.min": "Password tidak boleh kurang dari 8 karakter!",
      "string.max": "Password tidak boleh lebih dari 30 karakter!"
    })
});

const editUserSchema = Joi.object({
  fullname: Joi.string()
    .max(30)
    .required()
    .messages({
      "string.empty": "Nama tidak boleh kosong!",
      "any.required": "Nama tidak boleh kosong!",
      "string.max": "Nama tidak boleh lebih dari 30 karakter!"
    }),
  nomorHP: Joi.string()
    .max(14)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "Nomor HP tidak boleh kosong!",
      "any.required": "Nomor HP tidak boleh kosong!",
      "string.max": "Nomor HP tidak boleh lebih dari 14 karakter!",
      "string.pattern.base": "Harap masukan nomor HP yang benar!"
    })
})

const transactionSchema = Joi.object({
  atasNama: Joi.string()
    .required()
    .messages({
      "string.empty": "Atas nama tidak boleh kosong!",
      "any.required": "Atas nama tidak boleh kosong!"
    }),
  keteranganPenggunaan: Joi.string()
    .required()
    .messages({
      "string.empty": "Harap isikan keterangan penggunaan!",
      "any.required": "Harap isikan keterangan penggunaan!"
    }),
  tanggalPeminjaman: Joi.date().required()
    .messages({
      "any.required": "Harap isi tanggal peminjaman!"
    }),
  tanggalSelesai: Joi.date().required()
    .messages({
      "any.required": "Harap isi tanggal selesai!"
    }),
})


export { userRegistrationSchema, userLoginSchema, editUserSchema, transactionSchema };