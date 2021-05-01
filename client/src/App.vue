<template>
  <router-view />
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
  :root {
    --background-color: #1f1a24;
    --one-school-primary: #bb86fc;
    --one-school-secondary: #03dac5;
    --one-school-danger: #cf6679;
    --opacity-level: 16%;
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

  /* Btn Global Style */
  .one-school-btn {
    color: #ffff;
    background: var(--one-school-secondary);
    transition: 0.2s ease-in;
  }
  .one-school-btn:hover {
    background: #03dac5b5;
  }
</style>
