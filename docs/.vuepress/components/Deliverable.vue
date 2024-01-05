<template>
  <div class="deliverable">
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <Badge class="due-date" :text="dueDate" />
    </div>
    <p class="description">{{ description }}</p>
    <router-link :to="detailsLink" class="details-button">Details</router-link>
  </div>
</template>

<script>
export default {
  name: "Deliverable",
  props: {
    title: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    detailsLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.deliverable {
  /* Your styles for the deliverable component */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  /* Styles for the title */
}

.due-date {
  /* Styles for the due date badge */
}

.description {
  /* Styles for the description */
}

.details-button {
  /* Styles for the details button */
}
</style>
