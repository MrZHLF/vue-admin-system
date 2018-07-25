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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  /* overflow:hidden; */
}
*{
  margin: 0;
  padding: 0;
}
body{
  overflow: hidden;
}
.ql-container {
    min-height: 400px;
}
.cantainer{
  padding: 30px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px #ddd solid;
  margin-top: 20px;
}
</style>
