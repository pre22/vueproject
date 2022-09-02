<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |  
    <router-link :to="{ name: 'About' }">About</router-link> | 
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>  
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view /> 
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {

    const router = useRouter()

    function redirect() {
      router.push({ name: 'About' })
    }

    function back() {
      router.go(-1)
    }

    function forward() {
      router.go(1)
    }
    return {
      redirect,
      back,
      forward
    }
  },
  methods: {
    backs() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>