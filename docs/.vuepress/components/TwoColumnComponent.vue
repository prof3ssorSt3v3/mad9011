<template>
  <div class="two-column-component">
    <div class="first-column">
      <img :src="imageSrc" :style="imageStyle" alt="Image" />
    </div>
    <div class="column">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
      <a :href="linkUrl">{{ linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    description: String,
    linkUrl: String,
    linkText: String,
    imageSize: {
      type: String,
      default: "100%", // Default to 100% size if not provided
    },
  },
  computed: {
    imageStyle() {
      return {
        "max-width": this.imageSize,
        "max-height": this.imageSize,
      };
    },
  },
};
</script>

<style scoped>
.two-column-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaecef;
}

.column,
.first-column {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.first-column {
  max-width: fit-content;
  align-items: center;
}

a {
  color: #3eaf7c;
  text-decoration: underline;
}

h4 {
  margin: 0;
}
</style>
