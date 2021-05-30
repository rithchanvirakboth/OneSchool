<template>
  <div class="postForm-wrapper">
    <form @submit.prevent="onPost">
      <div class="form-group">
        <textarea
          name="post-text"
          cols="30"
          rows="10"
          class="from-control"
          placeholder="Share your thoughts, needs, inspiration here...."
        ></textarea>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 d-flex align-items-center">
            Attached:
            <!-- <input type="text" disabled v-model="imageText" class="imageText" /> -->
            <span class="imageText">{{ imageText }}</span>
            <button class="clearBtn" @click="clearImage" v-if="hasImage">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div class="col-sm-8 d-flex justify-content-end">
            <div class="cta-btn">
              <div class="upload-btn-container">
                <input
                  type="file"
                  name="profileImage"
                  class="uploadBtn"
                  accept="image/*"
                  @change="onFileSelected"
                  ref=""
                />
                <img src="../../assets/image-gallery.png" alt="image" />
                <input type="button" value="Upload" class="fakeUpload" />
              </div>
              <input class="btn post-btn" type="submit" value="Post" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageText: "",
        hasImage: false,
      };
    },
    methods: {
      onFileSelected(e) {
        this.hasImage = true;
        this.imageText = e.target.files[0].name;
      },
      clearImage() {
        this.hasImage = false;
        this.imageText = "";
      },
    },
  };
</script>

<style scoped>
  .postForm-wrapper {
    background: var(--surface-l2);
    border-radius: 5px;
    padding: 1em 1.5em 0.5em 1.5em;
  }
  .form-group {
    margin-bottom: 0.5em;
  }
  .postForm-wrapper textarea {
    background: transparent;
    border: 0;
    outline: 0;
    color: #ffff;
    font-size: 14px;
    border-bottom: 1px solid;
    padding: 0;
    height: 70px;
  }
  .postForm-wrapper .form-group:nth-child(2) {
    font-size: 13px;
  }
  .post-btn {
    color: #fff;
    font-size: 14px;
    padding: 0.5em 1.2em;
    background: var(--surface-l3);
  }
  .post-btn:hover {
    background: #627d988d;
  }
  .clearBtn {
    background: transparent;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    margin-left: 0.5em;
    color: #fff;
  }
  .clearBtn i {
    color: var(--one-school-primary);
  }
  .cta-btn {
    display: flex;
    align-items: center;
  }
  .form-group .fakeUpload {
    background: transparent;
  }
  .imageText {
    color: rgba(255, 255, 255, 0.503);
    width: 100px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0.5em;
  }
</style>
