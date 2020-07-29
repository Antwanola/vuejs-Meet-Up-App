<template>
  <v-app app>
    <v-navigation-drawer app class="purpledeep d-md-none" height="auto" v-model="nav">
      <v-list-item-group rounded>
        <v-subheader>REPORTS</v-subheader>
        <v-list-items v-model="menus">
          <v-list-item v-for="menu in menus" :key="menu.title" router-link :to="menu.link">
            <v-list-item-icon>
              <v-icon v-text="menu.icon" class="green--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="menu.title" class="green--text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-items>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-app-bar app class="purpledeep">
      <v-app-bar-nav-icon class="green--text d-md-none" @click.stop="nav=!nav"></v-app-bar-nav-icon>
      <v-toolbar-title class="green--text display-2">
        <router-link to="/home" tag="span" style="cursor: pointer">Meetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-sm-none d-md-flex">
        <v-btn
          app
          text
          class="purpledeep green--text"
          v-for="menu in menus"
          :key="menu.title"
          router-link
          :to="menu.link"
        >
          <v-icon left>{{menu.icon}}</v-icon>
          {{menu.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import alert from "./components/Shared/alert";

export default {
  name: "App",
  // components: {
  //   alert
  // },

  data: () => ({
    nav: false
  }),
  computed: {
    menus() {
      var menus = [
        { icon: "mdi-account-check", title: "Signup", link: "/signup" },
        { icon: "mdi-account-circle", title: "Sign-In", link: "/Signing" }
      ];
      if (this.userIsAuthenticated) {
        menus = [
          {
            icon: "mdi-account-multiple",
            title: "View Meetup",
            link: "/meetups"
          },
          { icon: "mdi-door", title: "Organize Meetup", link: "/meetup/new" },
          { icon: "mdi-face", title: "profile", link: "/profile" }
        ];
      }
      return menus;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>
