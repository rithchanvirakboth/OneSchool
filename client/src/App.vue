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
    --surface-l1: #20252a;
    --surface-l2: #252c32;
    --surface-l3: #2a333b;
    --surface-l4: #323d48;
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
    outline: none;
  }

  .form-group input::placeholder {
    opacity: 0.7;
  }
  .form-group select {
    /* padding: 0.5em; */
  }
  .form-group-two {
    display: flex;
    flex-grow: 1;
    gap: 1em;
  }
  .form-group-two .form-group {
    flex-grow: 1;
  }

  /* Btn Global Style */
  .one-school-btn {
    color: #ffff;
    background: var(--one-school-primary);
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

  /* Upload btn and fake btn */
  .form-group .uploadBtn {
    position: absolute;
    opacity: 0;
    width: 70px;
  }
  .form-group .uploadBtn::-webkit-file-upload-button {
    cursor: pointer;
    border: 0;
    background: #6f6f6f6a;
    position: absolute;
    left: 0;
  }
  .form-group .fakeUpload {
    font-size: 12px;
    padding: 1em;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: 0;
    background: #627d98;
    color: #fff;
  }
  .form-group textarea {
    padding: 0.5em 1em;
    resize: none;
    width: 100%;
    height: 100px;
  }
  @media screen and (min-width: 867px) {
    /* custom scrollbar */
    ::-webkit-scrollbar {
      width: 18px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--one-school-secondary);
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }
  /* Stub image */
  .profile_image {
  }
</style>
