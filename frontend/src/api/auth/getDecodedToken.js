import api from "../api"

const getDecodedToken = async (token) => {
  try {
    const response = await api.post("/token", { token })
    if (!response) return console.log("Gagal")
    // console.log(response);
    return response.data.payload;
  } catch (error) {
    console.log(error)
  }
}

export default getDecodedToken;