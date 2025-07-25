import axios from "axios";

let BASE_API = import.meta.env.VITE_BASE_API

export const $get = (url) => axios.get(BASE_API + url)

export const $post = (url, data) => axios.post(BASE_API + url, data)

export const $del = (url) => axios.delete(BASE_API + url)
