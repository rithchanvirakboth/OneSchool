<template>
  <div>
    <HomepageNav />
    <div class="container-fluid homepage-wrapper mt-4">
      <div class="row">
        <div class="col-md-3 d-none d-md-block">
          <router-link to="/profile">
            <HomepageProfile />
          </router-link>
        </div>
        <div class="col-md-6">
          <slot />
        </div>
        <div class="col-md-3 d-none d-md-block hi"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomepageNav from "../partials/HomepageNav";
  import HomepageProfile from "../Homepage/HomepageProfile";
  export default {
    components: { HomepageNav, HomepageProfile },
  };
</script>

<style scoped>
  .homepage-wrapper {
    padding: 0 4em;
  }

  .hi {
    background: var(--surface-l1);
  }

  @media screen and (max-width: 786px) {
    .homepage-wrapper {
      padding: 0;
    }
  }
</style>
