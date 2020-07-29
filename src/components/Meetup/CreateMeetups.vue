<template>
  <v-container>
    <v-layout row xs6>
      <v-flex sm12 offset-sm3>
        <h2 class="display-3 purpledeep--text">Create New Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12>
        <v-form @submit.prevent="oncreateMeet">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" :id="title" required v-model="title"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="name" label="Name" :id="name" required v-model="name"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="surname" label="Surname" id="surname" required v-model="surname"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                required
                v-model="location"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-file-input
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="upload location image"
                prepend-icon="mdi-camera"
                label="Location image"
              ></v-file-input>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="url" height="150" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4 class="display-2">Time Picker</h4>
            </v-flex>
          </v-layout>
          <br />
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker
                v-model="time"
                :landscape="$vuetify.breakpoint.smAndUp"
                ampm-in-title
                color="purpledeep lighten-1 greenlight--text"
                header-color="purpledeep lighten-1 greenlight--text"
              ></v-time-picker>
              {{time}}
            </v-flex>
          </v-layout>
          <br />
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <h4 class="display-2">Date Picker</h4>
            </v-flex>
          </v-layout>
          <br />
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker
                v-model="date"
                header-color="greenlight lighten-1 purpledeep--text lighten-1"
                full-width
              ></v-date-picker>
              {{date}}
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                multi-line
                required
                v-model="description"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="purpledeep green--text" :disabled="IsValid" type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
    name: "",
    surname: "",
    description: "",
    location: "",
    url: "",
    date: "",
    time: ""
  }),
  computed: {
    IsValid() {
      return this.name && this.location !== "" ? false : true;
    }
  },
  methods: {
    oncreateMeet() {
      const meetUpData = {
        title: this.title,
        name: this.name,
        surname: this.surname,
        url: this.url,
        location: this.location,
        description: this.description,
        date: new Date(this.date),
        id: "Text",
        time: this.time
      };
      this.$store.dispatch("createMeet", meetUpData);
      this.$router.push("/meetups");
    }
  }
};
</script>

<style scoped>
.timer {
  color: #00ff85;
}
</style>