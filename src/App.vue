<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon large @click.stop="drawer = !drawer" />
      <v-container fluid>
        <div class="eiei">
          <v-overflow-btn
            :items="filterChat"
            label="Filter Chat"
          ></v-overflow-btn>
        </div>
      </v-container>
      <v-btn icon>
        <v-icon large>settings_applications</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    filterChat: [
      { text: 'All' },
      { text: 'Inbox' },
      { text: 'Unread' }
    ]
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style>
.eiei {
  padding-top: 2.3vh;
  width: 10wh;
}
</style>