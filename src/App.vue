<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'

export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.rsm-wrap {
  max-width: 900px;
  padding: 0 30px;
  margin: 0 auto;
}
.rsm-wrap-mg {
  margin-top: 45px;
}
.relative {
  position: relative;
}
.bold {
  font-weight: 500;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.flex-wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.flex {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
}
*:before, *:after, * {
  box-sizing: border-box;
}
.space-between {
  justify-content: space-between;
}
@media (max-width: 850px) {
  .rsm-wrap-mg {
    margin-top: 2.5em
  }
}

</style>
