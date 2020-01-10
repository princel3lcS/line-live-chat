<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { db } from '../config/db'


export default {
  name: 'home',
  data: () => ({
    users: []
  }),
  firebase:{
    users: db.ref('users')
  },
  components: {
    HelloWorld
  }
}
</script>
