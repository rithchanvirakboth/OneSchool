<template>
  <auth-layout>
    <div class="form-wrapper mx-lg-5">
      <form @submit.prevent="onSubmit">
        <h3>
          Create Connection
        </h3>
        <div class="form-group mt-4">
          <label for="username">Name</label>
          <input
            v-model="name"
            name="name"
            type="text"
            class="form-control"
            placeholder="Input name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            name="email"
            type="text"
            class="form-control"
            placeholder="Input email address"
          />
        </div>
        <div class="form-group-select">
          <div class="form-group">
            <label for="major">What Major are you?</label>
            <select v-model="major" name="major" class="form-control ">
              <option value="computer science">Computer Science</option>
              <option value="maths">Maths</option>
              <option value="physics">Physics</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>
          <div class="form-group">
            <label for="reason">Why are you here?</label>
            <select v-model="reason" name="reason" class="form-control">
              <option value="to learn">To Learn</option>
              <option value="to explore">To Explore</option>
              <option value="to find solution">To find solution</option>
              <option value="other">Others....</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            name="password"
            type="password"
            class="form-control"
            placeholder="Don't forget your password"
          />
        </div>
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input
            v-model="password2"
            name="password2"
            type="password"
            class="form-control"
            placeholder="Don't forget your password"
          />
        </div>
        <div class="d-flex justify-content-end">
          <input type="submit" value="Create" class="btn one-school-btn  " />
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

    data() {
      return {
        name: "",
        email: "",
        major: "computer science",
        reason: "to find solution",
        password: "",
        password2: "",
      };
    },
    components: {
      authLayout,
    },
    created() {
      // if (this.$store.state.isAuthenticated) {
      //   this.$router.push("/homepage");
      // }
    },
    methods: {
      async onSubmit() {
        const { name, email, major, reason, password } = this;
        this.$store.dispatch("register", {
          name,
          email,
          major,
          reason,
          password,
        });
      },
    },
  };
</script>
<style scoped>
  .form-group-select {
    display: flex;
    flex-grow: 1;
    gap: 1em;
  }
  .form-group-select .form-group {
    flex-grow: 1;
  }
</style>
