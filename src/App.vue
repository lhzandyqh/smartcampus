<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  /*background: url("assets/main_bg.png") no-repeat;*/
  /*background-size: 100%;*/
  /*background-color: #f7f3f4;*/
  width: 100%;
  height: 100%;
  background-color: #f5f7f6;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
html,body,#app{
  height: 100%;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
