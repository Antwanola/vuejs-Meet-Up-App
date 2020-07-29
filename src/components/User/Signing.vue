<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card raised>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIn">
                <v-layout row>
                  <v-flex sm12>
                    <h4 class="display-1 purpledeep--text">Sign In</h4>
                  </v-flex>
                </v-layout>
                <br />
                <v-layout row>
                  <v-flex sm12>
                    <v-text-field
                      outlined
                      label="E-mail"
                      prepend-inner-icon="mdi-email"
                      type="email"
                      required
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <br />
                <v-layout row>
                  <v-flex sm12>
                    <v-text-field
                      outlined
                      label="Password"
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      required
                      v-model="password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex sm12>
                    <v-btn type="submit" class="purpledeep greenlight--text">Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row v-if="error">
      <v-flex sm12>
        <alert :text="error.message" />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import alert from "../Shared/alert";
export default {
  components: {
    alert
  },
  data: () => ({
    email: "",
    password: ""
  }),
  computed: {
    User() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    User(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/home");
      }
    }
  },

  methods: {
    onSignIn() {
      const User = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signInUser", User);
    }
  }
};
</script>
