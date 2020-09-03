<template>
  <nav>
    <div class="menu-item"><a href="./menu.jpg">Menu</a></div>
    <div class="menu-item"><a href="https://www.verywellfit.com/hamburger-nutrition-facts-calories-and-healthier-swaps-4111280">Nutrition facts</a></div>
    <div class="menu-item"><a href="https://www.facebook.com/paeng.ka.7/">About the chef</a></div>
  </nav>
</template>


<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>