<template>
  <v-container
    class="fill-height chat-inbox-display"
    fluid
  >
    <v-row>
      <v-col>
        <v-img
          width="100"
          src="../assets/hqdefault.jpg"
        >
        </v-img> 
      </v-col>
      <v-col>
        <v-row>
          <v-col>{{name}}</v-col>
        </v-row>
        <v-row>
          <v-col>Last message</v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row >
          <v-col>yesterday</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChatInboxDisplay',
  props: {
    name: String
  }
};
</script>

<style scoped>
.chat-inbox-display {
  border: 2px solid red;
}
</style>