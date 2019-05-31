<template>
  <div id="app">
    <div style="display: flex; justify-content: left; width: 100%;">
      <div>
        <img src="./assets/logo.png" alt="Logo" height="45" width="150">
      </div>
      <div style="width: 100%;">  
        <div class="menu-wrap">
          <div class="link">
            <router-link to="/">Home</router-link>
          </div>
          <div class="link">
            <router-link to="inventory">Inventory</router-link>
          </div>
          <div class="link">
            <router-link to="accounts">Accounts</router-link>
          </div>
          <div class="link">
            <router-link to="staff">Staff</router-link>
          </div>
          <div class="link">
            <router-link to="contact">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  background-color: black;
  margin: 0px;
}

div.router-link-active:fist-child {
  background-color: red;
}

.link {
  border: solid 1px #FF9900;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 10px;
  background-color: #FF9900;
}

.router-link-active:first-parent {
  background-color: red;
}

.link a.router-link-exact-active {
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all;
  font-size: 30px;
}

.link a {
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all;
}

.link a:hover {
  color: white;
}

.menu-wrap {
  position: relative;
  width: 100%;
  height: 60px;
  display: block;
}

.link {
  position: relative;
  text-align: center;
  width: calc(20% - 13px);
  float: left;
  color: white !important;
}

.main-wrap {
  margin-left: 20px;
  margin-right: 20px;
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

</style>
