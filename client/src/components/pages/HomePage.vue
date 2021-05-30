<template>
  <div v-if="!$store.state.loading">
    <HomepageLayout>
      <div class="posts-container">
        <PostForm />
      </div>
    </HomepageLayout>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
  import HomepageLayout from "../layouts/HomepageLayout";
  import PostForm from "../Homepage/PostForm";
  export default {
    name: "HomePage",
    components: { HomepageLayout, PostForm },
    created() {
      this.$store.dispatch("getUser");
    },
  };
</script>

<style scoped>
  .posts-container {
    background: var(--surface-l1);
    height: 100vh;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
  }
  @media screen and (max-width: 599px) {
    .posts-container {
      margin: 0;
    }
  }
</style>
