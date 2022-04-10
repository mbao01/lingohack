<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.svg" style="width: 160px" />
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Sen, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: auto;
  padding: 0 60px 60px;
}

#nav {
  padding: 0 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vs-select__options,
.vs-tooltip {
  font-family: Sen, Helvetica, Arial, sans-serif !important;
}
</style>
