<template>
  <auth-layout>
    Login Route with username {{ $store.state.user.name }}
  </auth-layout>
</template>
<script>
  import authLayout from "../layouts/AuthLayout";

  export default {
    components: {
      authLayout,
    },
  };
</script>
<style></style>
