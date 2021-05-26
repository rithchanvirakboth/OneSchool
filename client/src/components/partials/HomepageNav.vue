<template>
  <div class="nav-wrapper">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-2 d-none d-md-block">
          <router-link to="/homepage">
            <img src="../../assets/OneSchool_Logo.png" alt="one_school_logo" />
          </router-link>
        </div>
        <div class="col-md-7 col-sm-2">
          <form class="form  d-none d-md-block">
            <div class="form-group">
              <select>
                <option value="people">People</option>
              </select>
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>

        <div class="col-md-3 col-sm-12 profile-section">
          <div class="loup d-md-none">
            <a href="/search">
              <img src="../../assets/search.png" alt="" />
            </a>
          </div>
          <router-link to="#">
            <div class="profile-cta">
              <p>{{ firstName }}</p>
              <img :src="src + user.profileImage" alt="profile_iamge" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "HomepageNav",
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
  .nav-wrapper {
    background-color: var(--surface-l1);
    padding: 0.8em 4em;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  }
  .nav-wrapper img {
    width: 10vmin;
  }
  .form-group {
    display: flex;
    margin: 0;
  }
  .form-group select {
    background: var(--one-school-primary);
    color: #fff;
    border-radius: 10px 0 0 10px;
    border: 0;
    outline: 0;
  }
  .form-group input {
    border-radius: 0 10px 10px 0;
    padding: 1em;
    outline: 0;
    border: 0;
    background-color: var(--surface-l2);
  }
  .form-group input:focus,
  .form-group input::placeholder {
    color: #fff;
  }
  .form-group input,
  .form-group select {
    font-size: 14px;
  }

  .profile-cta {
    background: var(--one-school-primary);

    border-radius: 10px;
    padding: 0.2em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8em;
    width: fit-content;
    margin-left: auto;
  }
  .profile-cta p {
    font-size: 12px;
    margin: 0;
    margin-left: 10px;
  }
  .profile-cta img {
    border-radius: 10px;
    width: 40px;
  }

  .loup img {
    width: 24px;
  }

  @media screen and (max-width: 786px) {
    .nav-wrapper {
      padding: 1em 0;
    }
    .profile-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
