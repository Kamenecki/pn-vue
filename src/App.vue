<template>
  <login-site></login-site>
</template>

<script>
import event from '@/components/view/event.vue'

export default {
  name: 'App',
  components: {
    'login-site': event
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
