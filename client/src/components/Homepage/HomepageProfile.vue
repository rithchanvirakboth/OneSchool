<template>
  <div class="container-fluid smallProfile-wrapper" @click="goToProfile">
    <div class="row">
      <div class="col-8 name">
        <p>{{ user.name }}</p>
        <p>@{{ user.username }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="profile-cta">
          <img :src="src + user.profileImage" alt="profile_image" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 follow">
        <p>
          <span>{{ followers }}</span> Followers
        </p>
        <p>
          <span>{{ followings }}</span> Followings
        </p>
      </div>
    </div>
    <div class="row bio">
      <div class="col-2">Bio:</div>
      <div class="col-10">
        <p>
          {{ user.bio }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="btn ghost-btn float-right" @click="openEdit">
          Edit profile
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        src: this.$store.state.user.profileImage.includes("uploads\\")
          ? "http://localhost:5000/"
          : "",
      };
    },

    computed: {
      ...mapState(["user", "isEdit"]),
      firstName() {
        return this.user.name.split(" ")[0];
      },
      followers() {
        return this.user.followers.length;
      },
      followings() {
        return this.user.followings.length;
      },
    },
    mounted() {
      console.log(this.user);
      document.title = "Homepage";
    },
    methods: {
      openEdit() {
        this.$store.commit("setIsEdit", true);
      },
      goToProfile(e) {
        if (!e.target.classList.contains("btn")) {
          this.$router.push("/profile");
        } else {
          return;
        }
      },
    },
  };
</script>

<style scoped>
  .profile-cta img {
    border-radius: 10px;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  .smallProfile-wrapper {
    background: var(--surface-l1);
    padding: 1.2em;
    border-radius: 10px;
    cursor: pointer;
  }
  .row {
    margin-bottom: 0.2em;
  }
  .name p {
    margin: 0;
    font-size: 20px;
  }
  .name p:nth-child(2) {
    font-size: 12px;
    opacity: 50%;
  }
  .follow {
    font-size: 15px;
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
    font-size: 13px;
  }
  .bio p {
    opacity: 50%;
  }
  .btn {
    font-size: 12px;
    margin-left: auto;
  }
</style>
