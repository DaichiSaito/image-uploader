<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>

    <div class="right menu">
      <div v-if="isLoggedIn">
        Galleries
        upload
        logout
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' // helper function to connect actions to modules

export default {
  name: 'AppHeader',
  computed: mapGetters([ 'isLoggedIn']),
  methods: mapActions(['login'])
}
</script>

<style>

</style>
