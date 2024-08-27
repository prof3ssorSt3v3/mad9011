<template>
  <div class="image-switcher">
    <!-- Title and Description -->
    <div class="text-content">
      <h1>{{ currentImage.title }}</h1>
      <div class="divider"></div>
      <p>{{ currentImage.description }}</p>
    </div>

    <!-- Image Box -->
    <div class="image-box">
      <transition name="fade">
        <img :src="currentImage.src" :alt="currentImage.label" />
      </transition>
    </div>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <span @click="prevImage" class="nav-control" aria-label="Previous Image"
        >&#10094;</span
      >
      <span>Page {{ currentImageIndex + 1 }} of {{ totalImages }}</span>
      <span @click="nextImage" class="nav-control" aria-label="Next Image"
        >&#10095;</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
    totalImages() {
      return this.images.length;
    },
  },
  methods: {
    prevImage() {
      this.currentImageIndex =
        this.currentImageIndex > 0
          ? this.currentImageIndex - 1
          : this.totalImages - 1;
    },
    nextImage() {
      this.currentImageIndex =
        this.currentImageIndex < this.totalImages - 1
          ? this.currentImageIndex + 1
          : 0;
    },
  },
};
</script>

<style scoped>
.image-switcher {
  /* width: 100%; */
  max-width: 800px;
  margin: 24px auto;
  text-align: center;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-content {
  text-align: left;
  margin-bottom: 24px;
}

h1 {
  font-size: 24px;
  color: #2d6a4f;
  margin-bottom: 8px;
  margin-top: 8px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #eaecef;
  margin-bottom: 8px;
}

p {
  font-size: 16px;
  color: #6c757d;
}

.image-box {
  margin-bottom: 24px;
}

.image-box img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  transition: opacity 0.5s ease-in-out;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
}

.nav-control {
  background-color: #fff;
  color: #1a3a2a;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f1f8f3;
}

.nav-control:hover {
  background-color: #f1f8f3;
}

.pagination-controls span {
  font-size: 14px;
  color: #2d6a4f;
}

@media (max-width: 600px) {
  .image-switcher {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  .nav-control {
    font-size: 20px;
    padding: 6px;
  }

  .pagination-controls span {
    font-size: 12px;
  }
}
</style>
