<template>
  <div class="dropdown-wrapper">
    <div class="dropdown">
      <router-link class="item" to="/profile"
        ><i class="fa fa-user"></i>See your profile</router-link
      >
      <div class="item" @click="openEdit">
        <i class="fas fa-pen"></i>
        Edit your profile
      </div>
      <div class="item" @click="logout">
        <i class="fas fa-sign-out-alt"></i>Logout
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {},

    methods: {
      openEdit() {
        this.$store.commit("setOpenMenu", false);
        this.$store.commit("setIsEdit", true);
      },
      logout() {
        this.$store.dispatch("logout");
      },
    },
  };
</script>

<style scoped>
  .dropdown {
    position: absolute;
    z-index: 100;
    right: 5%;
    top: 88%;
    background: var(--surface-l3);
    font-size: 14px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .dropdown .item {
    padding: 1.3em;
  }
  .dropdown .item:hover {
    cursor: pointer;
    background: var(--surface-l2);
  }
  .dropdown .item i {
    width: 10px;
    margin-right: 1em;
    color: var(--one-school-primary);
  }
  .dropdown .item:first-child {
    border-radius: 5px 5px 0 0;
  }
  .dropdown .item:last-child {
    border-radius: 0 0 5px 5px;
  }
  @media screen and (max-width: 867px) {
    .dropdown {
      right: 2%;
    }
  }
</style>
