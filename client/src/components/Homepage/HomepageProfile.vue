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
      <div class="col-6 follow">
        <p><span>108</span> Followers</p>
      </div>
      <div class="col-6 follow">
        <p><span>108</span> Followings</p>
      </div>
    </div>
    <div class="row bio">
      <div class="col-2">Bio:</div>
      <div class="col-10">
        Nothing much, i just love desining and coding
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="btn ghost-btn float-right mt-2">Edit profile</div>
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
    width: 45px;
    border-radius: 10px;
  }
  .smallProfile-wrapper {
    background: var(--surface-l1);
    padding: 0.8em;
    border-radius: 10px;
  }
  .row {
    margin-bottom: 0.5em;
  }
  .name p {
    margin: 0;
    font-size: 16px;
  }
  .name p:nth-child(2) {
    font-size: 10px;
    opacity: 50%;
  }
  .follow {
    font-size: 10px;
  }
  .follow span {
    font-weight: 600;
  }
  .follow:nth-child(2) {
    padding: 0;
  }
  .bio {
    font-size: 10px;
  }
  .btn {
    font-size: 10px;
    margin-left: auto;
  }
</style>
