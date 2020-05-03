<template>
    <div class="product">
      <ProductList></ProductList>
    </div>
</template>

<script>
import ProductList from '../components/product/ProductList'
export default {
  name: 'Product',
  components: {
    ProductList
  }
}
</script>

<style scoped lang="scss">
  .product{
    width: 100%;
  }
</style>
