<template>
  <router-view />
</template>

<script>
  import setAuthToken from "./utils/setAuthToken";
  export default {
    name: "App",
    created() {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
    },
  };
</script>

<style>
  :root {
    --background-color: #17181a;
    --one-school-primary: #03dac5;
    --one-school-secondary: #627d98;
    --one-school-danger: #cf6679;
    --surface-l1: #1c1f23;
    --surface-l2: #20252a;
    --surface-l3: #252c32;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background-color);
  }
  #app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffff;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
  /* Form style */
  .form-group input {
    padding: 0.5em;
    color: #fff;
    outline: none;
  }

  .form-group input::placeholder {
    opacity: 50%;
  }
  .form-group select {
    padding: 0.5em;
  }

  /* Btn Global Style */
  .one-school-btn {
    color: #ffff;
    background: var(--one-school-secondary);
    transition: 0.2s ease-in;
  }
  .one-school-btn:hover {
    background: #03dac5b5;
  }
  .ghost-btn {
    color: #ffff;
    background: var(--surface-l2);
  }
  .ghost-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  /* Stub image */
  .profile_image {
  }
</style>
