<template>
  <div class="container-fluid smallProfile-wrapper">
    <div class="row">
      <div class="col-8 name">
        <p>Andrew Vuth</p>
        <p>@andrew_vuth16</p>
      </div>
      <div class="col-4 text-center">
        <div class="profile-cta">
          <img :src="src + user.profileImage" alt="profile_iamge" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 follow">
        <p><span>108</span> Followers</p>
        <p><span>108</span> Followings</p>
      </div>
    </div>
    <div class="row bio">
      <div class="col-2">Bio:</div>
      <div class="col-10">
        <p>
          Nothing much, i just love desining and coding
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="btn ghost-btn float-right">Edit profile</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        src: "http://localhost:5000/",
      };
    },
    computed: {
      ...mapState(["user"]),
      firstName() {
        return this.user.name.split(" ")[0];
      },
    },
  };
</script>

<style scoped>
  .profile-cta img {
    width: 55px;
    border-radius: 10px;
  }
  .smallProfile-wrapper {
    background: var(--surface-l1);
    padding: 1.2em;
    border-radius: 10px;
  }
  .row {
    margin-bottom: 0.5em;
  }
  .name p {
    margin: 0;
    font-size: 18px;
  }
  .name p:nth-child(2) {
    font-size: 12px;
    opacity: 50%;
  }
  .follow {
    font-size: 14px;
    display: flex;
    gap: 2em;
  }
  .follow span {
    font-weight: 600;
  }
  .follow:nth-child(1) {
    padding-right: 0;
  }
  .follow:nth-child(2) {
    padding: 0;
  }
  .bio {
    font-size: 14px;
  }
  .bio p {
    opacity: 50%;
  }
  .btn {
    font-size: 12px;
    margin-left: auto;
  }
</style>
