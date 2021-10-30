<template>
  <div class="productItem">
    <div class="item">
      <div class="card">
        <a href="#">
          <img src="https://via.placeholder.com/300/0000FF/808080" alt="Avatar" style="width: 100%" />
        </a>
        <div class="details">
         <a href="#"><h2><b>John Doe</b></h2></a> 
          <p class="price">Price: <b>$300</b></p>
          <div class="addoCart">
              <button type="submit">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
};
</script>

<style scoped>
.productItem{
    width: 300px;
    margin: 20px 0px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.details {
  margin-top: 10px;
  padding: 2px 16px;
}
.details .price{
  margin-top: 10px;
}
.details .addoCart button {
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  color: #fff;
  background-color: #000000;  
    font-size: 20px;
}
.details .addoCart button:hover {
 
  color: #fff;
  background-color: #2c2c2c; 
  transition: 0.4s; 
}
a{
  text-decoration: none;
}
</style>