<template>
  <div class="container-fluid profile-edit-wrapper" @click="clickOutside">
    <div class="form-wrapper edit-container">
      <form @submit.prevent="onSubmit">
        <h3>
          Edit Profile
        </h3>
        <div class="form-group-two mt-lg-4 mt-sm-1">
          <div class="form-group">
            <label for="name">Display Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Your name goes here"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              name="username"
              type="text"
              class="form-control"
              placeholder="Your username"
              v-model="username"
            />
          </div>
        </div>
        <div class="form-group image-upload">
          <label for="image">Profile Image</label>
          <input
            name="imageText"
            type="text"
            class="form-control"
            placeholder="Image URL or Upload local image"
            v-model="imageText"
          />
          <div class="upload-btn-container">
            <input type="file" name="image" class="uploadBtn" />
            <input
              type="button"
              value="Upload"
              class="fakeUpload one-school-btn"
            />
          </div>
        </div>

        <div class="form-group-two">
          <div class="form-group">
            <label for="major">Major</label>
            <input
              name="major"
              type="text"
              class="form-control"
              placeholder="Your Major"
              v-model="major"
            />
          </div>
          <div class="form-group">
            <label for="interests">Interests</label>
            <input
              name="interests"
              type="text"
              class="form-control"
              placeholder="Your interests"
              v-model="interests"
            />
          </div>
        </div>
        <div class="form-group mb-5">
          <div class="row">
            <div class="col-6">
              <label for="bio">Bio</label>
            </div>
            <div class="col-6 text-right" style="opacity: 0.5">
              {{ char }} characters remaining
            </div>
          </div>
          <textarea
            v-model="bio"
            class="form-control"
            name="bio"
            maxlength="80"
          ></textarea>
        </div>

        <div class="d-flex justify-content-end">
          <button
            style="background: transparent; border: 0; color: #fff; cursor: pointer"
            @click="cancel"
          >
            Cancel
          </button>
          <input type="submit" value="Update" class="btn one-school-btn ml-3" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  //   import { mapState } from "vuex";

  export default {
    data() {
      const user = this.$store.state.user;
      return {
        name: user.name,
        username: user.username,
        major: user.major,
        interests: user.interests,
        bio: user.bio,
        imageText: "",
      };
    },
    mounted() {
      console.log(this.$store.state.user);
    },
    computed: {
      char() {
        return 80 - this.bio.length;
      },
    },
    methods: {
      cancel() {
        this.$store.commit("setIsEdit", false);
      },
      clickOutside(e) {
        if (e.target.classList.contains("profile-edit-wrapper")) {
          this.cancel();
        }
      },
    },
  };
</script>

<style scope>
  .profile-edit-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: #6f6f6f6a;
    padding: 2em;
    padding-bottom: 8em;
  }
  .edit-container {
    transition: 0.3s ease-in;
  }
  .image-upload {
    position: relative;
  }
  .upload-btn-container {
    position: absolute;
    top: 50%;
    right: 10px;
    width: fit-content;
  }
  .form-group .uploadBtn {
    position: absolute;
    opacity: 0;
  }
  .form-group .uploadBtn::-webkit-file-upload-button {
    cursor: pointer;
    border: 0;
    background: #6f6f6f6a;
    position: absolute;
    left: 0;
    width: 80px;
  }
  .form-group .fakeUpload {
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    background: #627d98;
    color: #fff;
  }
  .form-group textarea {
    padding: 0.5em 1em;
    resize: none;
    width: 100%;
    height: 100px;
  }
</style>
