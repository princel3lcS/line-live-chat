<template>
  <div class="home">
    <ChatInboxDisplay v-for="(user, index) in users" :key="index" :userProfile="user.userProfile" />
  </div>
</template>

<script>
// @ is an alias to /src
import ChatInboxDisplay from '@/components/ChatInboxDisplay.vue'
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
    ChatInboxDisplay
  }
}
</script>
