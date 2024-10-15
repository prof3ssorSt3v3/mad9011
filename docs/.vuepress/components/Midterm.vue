<template>
  <div class="midterm">
    <div class="header">
      <h3 class="title">{{ title }}</h3>
    </div>
    <p class="description">{{ description }}</p>
    <div class="due-dates">
      <div class="due-date-row">
        <h4>Submission 1</h4>
        <Badge class="due-date" :text="dueDate" />
      </div>
      <div class="due-date-row">
        <h4>Submission 2</h4>
        <Badge
          v-if="secondaryDueDate"
          class="secondary-due-date"
          :text="secondaryDueDate"
        />
      </div>
    </div>
    <br />
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
  name: "Midterm",
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
      required: true, // Now required
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
.midterm {
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
  gap: 8px;
}

.due-date-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h4 {
  margin: 0;
}

.due-date,
.secondary-due-date {
  background-color: grey;
  color: white;
  margin-left: 8px;
}

.badge.disabled {
  background-color: grey;
  color: white;
}
</style>
