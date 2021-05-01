<template>
  <auth-layout>
    <div class="form-wrapper mx-lg-5">
      <form @submit="onSubmit">
        <h3>
          Create Connection
        </h3>
        <div class="form-group mt-4">
          <label for="formGroupExampleInput">Email</label>
          <input
            name="username"
            type="text"
            class="form-control"
            placeholder="Your email goes here"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Password</label>
          <input
            name="password"
            type="text"
            class="form-control"
            placeholder="Don't forget your password"
          />
        </div>
        <div class="d-flex justify-content-end">
          <input type="button" value="Create" class="btn one-school-btn  " />
        </div>
      </form>

      <router-link to="/" class="auth-option float-right mt-4">
        <p>Have an account? Login</p>
      </router-link>
    </div>
  </auth-layout>
</template>
<script>
  import authLayout from "../layouts/AuthLayout";

  export default {
    name: "Register",

    data() {},
    components: {
      authLayout,
    },
  };
</script>
<style></style>
