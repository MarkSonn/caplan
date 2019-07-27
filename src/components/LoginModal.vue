<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat>
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            :href="source"
            icon
            large
            target="_blank">
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            icon
            large
            href="https://codepen.io/johnjleider/pen/pMvGQO"
            target="_blank">
            <v-icon>mdi-codepen</v-icon>
          </v-btn>
        </template>
        <span>Codepen</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Login"
          name="login"
          prepend-icon="person"
          type="text"
        />
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginModal',
  data: () => ({
    email: '',
    message: '',
    name: ''
  }),
  methods: {
    onSubmit: function () {
      console.log(this.name, this.email, this.message)
    }
  }
}
</script>
