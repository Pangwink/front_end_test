<template>
  <div id="app">
    <div >
    <header>
      <Navbar/>   
          <a href="./Resume.pdf" target="_blank">About My CV</a>
    </header>  
     </div>
     <body>
        <Sidebar>
            <ul class="sidebar-panel-nav">
              <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>  
            <router-view ></router-view>    
            </ul>
        </Sidebar>  
    </body>
    <Footer/>  
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }   
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
  background-image: url('./assets/food.png')
}
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
ul.sidebar-panel-nav {
  list-style-type: none;
  overflow-y: auto;
   background-color: #130f40;
   /*position: fixed;*/
   left: 0;
   top: 0;
   height: 100vh;
   z-index: 999;
   padding: 3rem 20px 2rem 20px;
   width: 300px;
   padding-bottom: 2px;
 }

ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
ul.sidebar-panel-nav> li > a.active,
ul.sidebar-panel-nav> li > a:hover {
  background-color: rgb(238, 163, 66);
}
a:link {
	color: #f5f0f0  ;
	text-decoration: underline; 
}
a:visited {
	color: 	#f7f0f0  ;
	text-decoration: underline;
}
a:hover, a:active, a:focus { 
	text-decoration: none;
}
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
#app {
font-family: "Avenir", Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
}

</style>