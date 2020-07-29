<template>
  <v-container>
    <v-layout transition="fadeIn" enter-active-class="fadeInLeftBig" row wrap class="mb-12">
      <v-flex xs12>
        <v-card class="purpledeep">
          <v-card-title mb2 class="green--text">
            <div>
              <h2>{{meetDetails.title}}</h2>
            </div>
          </v-card-title>
          <v-img :src="meetDetails.url" height="400px"></v-img>
          <v-card-text class="title">
            <div class="headline green--text">
              {{meetDetails.date}} -
              <h3>{{meetDetails.location}}</h3>
            </div>
            <div class="white--text">{{meetDetails.description}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text to="/home" class="white--text">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetDetails() {
      return this.$store.getters.meetDetail(this.id);
    }
  }
};
</script>
<style lang="text/css" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);
.enter-active-class {
  animation: fadeInLeftBig 1s;
}
