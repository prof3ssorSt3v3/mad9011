<template>
  <div class="list-item">
    <div class="column">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
    <div class="first-column">
      <img :src="imageSrc" alt="Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    content: String, // String content replacing the list
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eaecef;
}

.column,
.first-column {
  flex: 1;
  padding: 10px;
  align-items: center;
}

.first-column {
  max-width: 200px !important;
}

img {
  max-width: 100%;
  max-height: 100%; /* Ensure the image fits within the container */
}

a {
  color: #3eaf7c;
  text-decoration: underline;
}
h3 {
  margin: 0;
}
</style>
