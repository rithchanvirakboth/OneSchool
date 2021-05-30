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
        <div class="form-group-two">
          <div class="form-group">
            <label for="major">What Major are you?</label>
            <select v-model="major" name="major" class="form-control ">
              <option value="Computer science">Computer Science</option>
              <option value="Maths">Maths</option>
              <option value="Physics">Physics</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div class="form-group">
            <label for="interests">Your interest?</label>
            <select v-model="interests" name="interests" class="form-control">
              <option value="Coding">Coding</option>
              <option value="Math Solving">Math Solving</option>
              <option value="Data Analyzing">Data Analyzing</option>
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
        major: "Computer science",
        interests: "Coding",
        password: "",
        password2: "",
      };
    },
    components: {
      authLayout,
    },
    mounted() {
      document.title = "Register";
    },

    methods: {
      async onSubmit() {
        const { name, email, major, interests, password } = this;
        this.$store.dispatch("register", {
          name,
          email,
          major,
          interests,
          password,
        });
      },
    },
  };
</script>
<style scoped></style>
