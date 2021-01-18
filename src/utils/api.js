import axios from "axios"

export const makeGetRequest = (url, params) => axios.get(url, { params })
