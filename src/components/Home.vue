<template>
  <v-container>
    vhvjbjkhkvgcgcgccgcjcgjc
    <v-carousel>
      <v-carousel-item
        v-for="meetup in meetups"
        :key="meetup.id"
        :src="require('@/assets/home.jpg')"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-card-text>slide{{i+1}}</v-card-text>
  </v-container>
</template>
<script>
import { mapGetters } from "Vuex";

export default {
  name: "Home",
  computed: mapGetters(["allMeetups"]),

  methods: {
    onLoadMeetups() {
      this.$router.push("/meetup/" + id);
    }
  },
  components: {
    Home
  }
};
</script>