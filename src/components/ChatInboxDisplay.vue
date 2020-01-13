<template>
  <v-container
    class="fill-height chat-inbox-display"
    fluid
  >
    <v-row no-gutters justify="space-between">
      <v-col>
        <v-img
          class="img-profile"
          width="80"
          aspect-ratio="1"
          :src="userProfile.pictureUrl"
        />
      </v-col>
      <v-col>
        <div class="d-flex flex-column justify-space-between">
          <div class="name">
            {{userProfile.displayName}}
          </div>
          <div class="last-message">
            last message
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="last-talk">
          11.28 น.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChatInboxDisplay',
  props: {
    userProfile: Object
  }
};
</script>

<style scoped>
.chat-inbox-display {
  border-bottom: 1px solid rgba(255, 255, 255, 0.164);
  
}
.img-profile {
  border-radius: 100vw;
}
.name, .last-message {
  padding-left: 3vw;
}
.last-message, .last-talk {
  opacity: 0.4;
  font-size: 90%;
  text-align: start;
}
</style>