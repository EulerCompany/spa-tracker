<template>
  <User/>
</template> 

<script>
import User from './views/User.vue'


export default {
  name: 'App',
  components: {
    User
  }
}
</script>

<style>

body {
    font-family: 'Poppins', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
