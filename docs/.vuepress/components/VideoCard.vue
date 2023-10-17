<template>
  <div class="video-card" :style="borderStyle">
    <div class="column">
      <slot></slot>
    </div>
    <div class="video-column">
      <iframe
        :src="youtubeUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    youtubeTitle: String,
    youtubeUrl: {
      type: String,
      default: "https://www.youtube.com/embed/TesDIVA28rM",
    },
    isFirst: Boolean, // Add a prop to indicate if it's the first in the list
  },
  computed: {
    borderStyle() {
      return this.isFirst
        ? "border-top: none;"
        : "border-top: 1px solid #eaecef;";
    },
  },
};
</script>

<style scoped>
.video-card {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center the content */
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.column,
.video-column {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.video-column {
  max-width: 250px;
  height: auto;
}

iframe {
  max-width: 100%;
  height: auto;
}
</style>
