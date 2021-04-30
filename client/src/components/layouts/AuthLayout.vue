<template>
  <div class="container-fluid auth-wrapper">
    <h2>{{ nice }} AuthLayout</h2>
    <slot />
  </div>
</template>
<script>
  export default {
    props: {
      nice: {
        type: String,
        require: true,
        default: "Beautiful",
      },
    },
    name: "AuthLayout",
  };
</script>
<style>
  .auth-wrapper {
  }
</style>
