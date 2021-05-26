<template>
  <nav class="navbar mb-5 mt-2">
    <router-link to="/">
      <img src="../../assets/OneSchool_Logo.png" alt="one_school_logo" />
    </router-link>

    <router-link class="Link" :to="pathTo">
      <div class="styledBtn">
        {{ pathText }}
      </div>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "AuthNav",
    data() {
      return {
        pathText: this.$route.matched[0].path === "/" ? "register" : "Login",
        pathTo: this.$route.matched[0].path === "/" ? "/register" : "/",
      };
    },
  };
</script>

<style scoped>
  .Link {
    text-transform: capitalize;
  }
  .navbar img {
    width: 10vmin;
  }
  .styledBtn {
    position: relative;
    font-size: 2.5vmin;
  }
  .styledBtn::after {
    content: "";
    background: var(--one-school-primary);
    height: 0.2em;
    position: absolute;
    left: -10px;
    right: 70%;
    bottom: 0;
    transition: 0.2s ease;
  }
  .styledBtn:hover::after {
    transform: translateX(-5px);
  }
</style>
