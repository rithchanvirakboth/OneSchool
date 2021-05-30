<template>
  <div class="container-fluid profile-edit-wrapper" @click="clickOutside">
    <div class="form-wrapper edit-container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
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
        <div class="form-group">
          <label for="image">Profile Image</label>
          <div class="image-upload">
            <div class="image-text">
              <input
                name="imageText"
                type="text"
                class="form-control"
                placeholder="Image URL or Upload local image"
                v-model="imageText"
              />
            </div>
            <div class="upload-btn-container">
              <input
                type="file"
                name="profileImage"
                class="uploadBtn"
                accept="image/*"
                @change="onFileSelected"
              />
              <input
                type="button"
                value="Upload"
                class="fakeUpload one-school-btn"
              />
            </div>
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
            placeholder="Describe yourself here"
          ></textarea>
        </div>

        <div class="d-flex justify-content-end">
          <button
            style="background: transparent; border: 0; color: #fff; cursor: pointer; font-size:14px;"
            @click="cancel"
          >
            Cancel
          </button>
          <input
            type="submit"
            value="Save Change"
            class="btn one-school-btn ml-3"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
        profileImage: null,
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
      onFileSelected(e) {
        const file = e.target.files[0];
        this.profileImage = file;
        this.imageText = file.name;
      },
      async onSubmit() {
        const formData = new FormData();
        const { name, username, major, interests, bio } = this;

        if (name) formData.append("name", name);
        if (username) formData.append("username", username);
        if (major) formData.append("major", major);
        if (interests) formData.append("interests", interests);
        if (bio) formData.append("bio", bio);

        formData.append(
          "profileImage",
          this.profileImage ? this.profileImage : this.imageText
        );

        this.$store.dispatch("editProfile", formData);
        // Close the edit tabs
        this.cancel();
        // Reload page to brings back data
        location.reload();
      },
    },
  };
</script>

<style scoped>
  .profile-edit-wrapper {
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: #00000058;
    padding: 2em;
    padding-bottom: 10em;
  }
  .edit-container {
    transition: 0.3s ease-in;
    width: 550px;
    max-width: 100%;
  }
  .form-group {
    font-size: 14px;
  }
  .form-group input,
  .form-group textarea {
    font-size: 14px;
  }
  .image-upload {
    display: flex;
    align-items: center;
  }
  .form-group .fakeUpload {
    font-size: 10.5px;
  }
  .image-upload .image-text {
    flex: 1;
  }
  .image-text input {
    border-radius: 5px 0 0 5px;
  }
  .btn {
    font-size: 14px;
  }
</style>
