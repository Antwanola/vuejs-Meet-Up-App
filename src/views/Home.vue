<template>
  <v-container>
    <v-carousel style=" cursor: pointer;">
      <v-carousel-item
        v-for="(meetDetail, i) in meetDetails"
        :key="i"
        @click="onLoadMeet(meetDetail.id)"
      >
        <v-img :src="meetDetail.url" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-4 green--text">{{ meetDetail.title }}</div>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import createMeet from "../components/Meetup/createMeet";
export default {
  name: "Home",
  computed: {
    meetDetails() {
      return this.$store.getters.getAll;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },

  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  },
  methods: {
    onLoadMeet(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>
