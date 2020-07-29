<template>
  <v-container>
    <v-layout
      transition="fadeIn"
      enter-active-class="fadeInLeftBig"
      leave-active-class="fadeOutRighttBig"
      row
      wrap
      v-for="meetDetail in meetDetails"
      :key="meetDetail.id"
      class="mb-12"
    >
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-container class="purpledeep" fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-list-item-avatar size="150" tile>
                  <v-img :src="meetDetail.url"></v-img>
                </v-list-item-avatar>
              </v-flex>

              <v-flex xl7 md8 sm9 class="display-2,">
                <v-card-title primary-title>
                  <h3 class="white--text" mb12>{{meetDetail.title}}</h3>
                  <br />
                </v-card-title>
                <v-card-title primary-title>
                  <p class="green--text" xs6 offset-sm8>{{meetDetail.date}}</p>
                  <br />
                </v-card-title>
                <v-card-actions raised class="col-md-6">
                  <v-btn
                    class="ma-2"
                    outlined
                    color="green"
                    :to="'/meetups/'+meetDetail.id"
                    display-end
                  >
                    <v-icon left light>mdi-arrow-right-bold</v-icon>Enter Meetup
                  </v-btn>
                  {{meetDetail.id}}
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Meetups",
  computed: {
    meetDetails() {
      return this.$store.getters.getAll;
    }
  }
};
</script>

<style lang="css" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);
.enter-active-class {
  animation: fadeInLeftBig 1.5s;
}
</style>