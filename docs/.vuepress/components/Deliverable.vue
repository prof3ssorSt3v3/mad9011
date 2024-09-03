<template>
  <div class="deliverable">
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <div class="due-dates">
        <Badge class="due-date" :text="dueDate" />
        <Badge
          v-if="secondaryDueDate"
          class="secondary-due-date"
          :text="secondaryDueDate"
        />
      </div>
    </div>
    <p class="description">{{ description }}</p>
    <router-link
      v-if="linkType === 'active'"
      :to="detailsLink"
      class="details-button"
      >View Details</router-link
    >
    <Badge
      v-else-if="linkType === 'paused'"
      class="coming-soon"
      text="Coming Soon"
      type="disabled"
    />
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
    secondaryDueDate: {
      type: String,
      default: "", // Optional, so no need to be required
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
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

.due-dates {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.due-date,
.secondary-due-date {
  background-color: grey;
  color: white;
  margin-left: 0px;
  margin-top: 5px;
}

.badge.disabled {
  background-color: grey;
  color: white;
}
</style>
