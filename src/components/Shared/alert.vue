<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-alert
          dismissible
          color="red"
          border="left"
          elevation="4"
          colored-border
          icon="mdi-account-alert"
        >
          <strong>{{text}}</strong>.
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["text"]
};
</script>