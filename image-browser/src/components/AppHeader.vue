<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item" href="">Galleries</router-link>
        <router-link to="/upload" class="item" href="">Upload</router-link>
        <a class="item" href="" @click="logout">Logout</a>
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
  methods: mapActions(['login', 'logout'])
}
</script>

<style>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
