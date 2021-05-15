<template>
  <div v-if="$store.state.isAuthenticated" class="container-fluid">
    <h2>Welcome to Homepage</h2>
    <h5>Coming soon......</h5>
  </div>

  <div v-else class="container-fluid">
    <h2>ERROR 401!</h2>
    <h5>No Authorization. You are not allowed here! <br />Please Login</h5>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
  };
</script>

<style></style>
