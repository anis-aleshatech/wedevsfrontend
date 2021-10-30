<template>
   <header>
        <div class="brand-logo">
            <a href="#"><img src="../assets/logo.png" alt="Brand Logo"></a>
        </div>

        <input type="checkbox" id="toggle-btn">
        <label for="toggle-btn" class="show-menu-btn"><i class="fas fa-bars"></i></label>

        <nav>
            <ul class="navigation"> 
                <li><router-link to="/"><i class="fas fa-house"></i>Home</router-link></li>
                <li><router-link to="/product"><i class="fas fa-image"></i> Product</router-link></li> 
                <li><a href="#"><i class="fa fa-cart"></i>Cart</a></li> 
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name:'NavBar'

}
</script>

<style scoped>
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial;
}
header {
    height: 100%;
    width: 100%;
    float: left; 
    background: #2c2c2c;
    padding: 0 20px;
    color: #fff;
}
.brand-logo {
    max-width: 75px;
    float: left;
    padding: 14px 0px;
}
.brand-logo img {
    max-width: 100%;
}
.navigation {
    margin: 0px;
    float: right;
}
.navigation li {
    list-style: none;
    float: left;
}
.navigation li a {
    color: #fff;
    padding: 28px 15px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    text-decoration: none;
}
.navigation li a i {
    width: 100%;
    font-size: 20px;
    margin-bottom: 7px;
}
.show-menu-btn,
.hide-menu-btn {
    transition: 0.4s;
    font-size: 30px;
    cursor: pointer;
    display: none;
}
.show-menu-btn {
    margin: 0px;
    float: right;
}
.show-menu-btn i {
    line-height: 100px;
}
.navigation a:hover,
.show-menu-btn:hover,
.hide-menu-btn:hover {
    color: #00ff0a;
}
#toggle-btn {
    position: absolute;
    visibility: hidden;
    z-index: -1111;
}

/*-- Responsive CSS --*/
@media screen and (max-width:767px) {
.show-menu-btn,
.hide-menu-btn {
    display: block;
}
.navigation {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #49d24f;
    top: -100%;
    left: 0;
    padding: 50px 0px;
    transition: 1s;
}
.navigation li {
    width: 100%;
}
.navigation li a {
    padding: 15px 15px;
    text-align: left;
}
.navigation li a i {
    width: auto;
    font-size: 20px;
}
.hide-menu-btn {
    position: absolute;
    top: 15px;
    right: 20px;
}
#toggle-btn:checked ~ nav .navigation {
    top: 0px;
}
}
</style>