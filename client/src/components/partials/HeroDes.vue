<template>
  <div>
    <div class="hero-title">
      <h1>
        Start a Connection and
      </h1>
      <h1>
        Learn More
      </h1>
    </div>
    <div class="hero-des mt-4">
      <h5>
        A platform where students from all across the world are coming together
        as a big learning community
      </h5>
      <p>
        Join us with 350, 000+ students who are eager to learn
      </p>
    </div>
    <div class="img-fluid hero-img mt-3 ">
      <img src="../../assets/Hero_banner.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "HerDes",
  };
</script>

<style scope>
  .hero-title h1 {
    font-weight: 900;
    font-size: 6vmin;
  }
  .hero-des h5 {
    font-size: 3vmin;
  }
  .hero-des p {
    opacity: 50%;
    font-size: 2.25vmin;
  }
  .hero-img img {
    width: 70%;
  }
</style>
