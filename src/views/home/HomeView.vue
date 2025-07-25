<template>
  <div class="flex items-center gap-5">
    <pre>{{products}}</pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/productsStore.js'

const productsStore = useProductsStore()
const products = ref([])

const updateData = async () => {
  products.value = await productsStore.getProducts()
}

onMounted(() => {
  updateData()
})
</script>
