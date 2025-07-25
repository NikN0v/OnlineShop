import {defineStore} from "pinia";
import {$del, $get, $post} from "@/utils/commonFunctions.js";

const base = 'products'

export const useProductsStore = defineStore('productsStore', () => {
  const getProducts = () => $get(base)

  const setProducts = (data, headers) => $post(base, data, headers)

  const getProduct = (id) => $get(`${base}/${id}`)

  const deleteProduct = (id) => $del(`${base}/${id}`)

  return {getProducts, setProducts, deleteProduct, getProduct}
})
