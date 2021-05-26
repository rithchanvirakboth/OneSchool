<template>
  <div v-if="!$store.state.loading">
    <HomepageLayout>
      <div class="posts-wrapper"></div>
    </HomepageLayout>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
  import HomepageLayout from "../layouts/HomepageLayout";
  export default {
    name: "HomePage",
    components: { HomepageLayout },
    created() {
      this.$store.dispatch("getUser");
    },
  };
</script>

<style scoped>
  .posts-wrapper {
    background: var(--surface-l1);
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
  }
</style>
