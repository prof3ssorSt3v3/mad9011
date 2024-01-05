<template>
  <div class="deliverable">
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <Badge class="due-date" :text="dueDate" />
    </div>
    <p class="description">{{ description }}</p>
    <router-link
      v-if="linkType === 'active'"
      :to="detailsLink"
      class="details-button"
      >Details</router-link
    >
    <Badge
      v-else-if="linkType === 'paused'"
      class="coming-soon"
      text="Coming Soon"
      type="warning"
    />
    <!-- No link or badge for 'disabled' -->
    <hr v-if="!isLast" class="divider" />
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
      default: "",
    },
    isLast: {
      type: Boolean,
      default: false,
    },
    linkType: {
      type: String,
      default: "disabled", // 'active', 'paused', or 'disabled'
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
  margin-bottom: 0rem;
}

.badge,
.badge.disabled {
  background-color: grey;
  color: white;
}

.divider {
  border-top: 1px solid #eaecef;
}
</style>
