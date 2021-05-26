<template>
  <div class="container-fluid auth-wrapper">
    <auth-nav />
    <div class="row mb-3 d-flex ">
      <div class="col-sm-12 col-lg-6">
        <hero-des />
      </div>
      <div class="col-sm-12 col-lg-6 mt-sm-1 ">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
  import AuthNav from "../partials/AuthNav";
  import HeroDes from "../partials/HeroDes";

  export default {
    components: { AuthNav, HeroDes },
    props: {},
    name: "AuthLayout",
  };
</script>
<style scoped>
  .auth-wrapper {
    padding: 0 5em;
  }
  /* Form Style */
  .form-wrapper {
    background: var(--one-school-primary);
    padding: 3em;
    padding-bottom: 5em;
    border-radius: 10px;
    /* width: 600px;
    max-width: 100%; */
  }
  .form-wrapper h3 {
    font-weight: 600;
  }

  @media screen and (max-width: 786px) {
    .hero-img {
      display: none;
    }
  }
  @media screen and (max-width: 599px) {
    .auth-wrapper {
      padding: 0 2em;
    }

    .form-wrapper {
      padding: 1.5em 1.5em 5em 1.5em;
    }
    .form-wrapper h3 {
      font-size: 16px;
    }
    .form-group label,
    .form-group input,
    .form-group select,
    .btn,
    .auth-option p {
      font-size: 12px;
    }
  }
</style>
