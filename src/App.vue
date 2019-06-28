<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.van-loading{
  position: fixed !important;
  top: 40%;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
