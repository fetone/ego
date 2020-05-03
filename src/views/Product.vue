<template>
    <div class="product">
      <AddProduct></AddProduct>
      <ProductList></ProductList>
    </div>
</template>

<script>
import ProductList from '../components/product/ProductList'
import AddProduct from '../components/product/AddProduct'
export default {
  name: 'Product',
  components: {
    ProductList,
    AddProduct
  }
}
</script>

<style scoped lang="scss">
  .product{
    width: 100%;
  }
</style>
