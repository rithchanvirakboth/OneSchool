<template>
  <auth-layout>
    <div class="form-wrapper mx-lg-5">
      <form @submit.prevent="onSubmit">
        <h3>
          Start Connecting
        </h3>
        <div class="form-group mt-lg-4 mt-sm-1">
          <label for="email">Email</label>
          <input
            name="email"
            type="text"
            class="form-control"
            placeholder="Your email goes here"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="Don't forget your password"
            v-model="password"
          />
        </div>
        <div class="d-flex justify-content-end">
          <input type="submit" value="Connect" class="btn one-school-btn  " />
        </div>
      </form>

      <router-link to="/register" class="auth-option float-right mt-4">
        <p>Don't have an account?</p>
      </router-link>
    </div>
  </auth-layout>
</template>
<script>
  import AuthLayout from "../layouts/AuthLayout";
  import { mapState } from "vuex";
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    components: {
      AuthLayout,
    },
    created() {
      // if (this.$store.state.isAuthenticated) {
      //   this.$router.push("/homepage");
      // }
    },
    computed: {
      ...mapState(["isAuthenticated"]),
    },
    methods: {
      async onSubmit() {
        const { email, password } = this;
        this.$store.dispatch("login", { email, password });
      },
    },
  };
</script>
<style scoped></style>
