<template>
  <div class="card">
    <div v-if="showContent">
      <slot></slot>
    </div>
    <div v-else>
      {{ customMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
  computed: {
    customMessage() {
      return (
        "The content of these deliverables will be made available prior to your scheduled lab class. " +
        this.targetDate.toDateString()
      );
    },
  },
  mounted() {
    this.calculateDateFromWeek();
    this.checkDate();
  },
  methods: {
    calculateDateFromWeek() {
      if (this.weekNumber >= 1 && this.weekNumber <= 15) {
        // Define a schedule of dates for each week (modify as needed)
        const schedule = [
          // Change each weeks date at the beginning of the term, use the Monday's date
          "2023-09-04",
          "2023-09-11",
          "2023-09-18",
          "2023-09-25",
          "2023-10-02",
          "2023-10-09",
          "2023-10-16",
          "2023-10-23",
          "2023-10-30",
          "2023-11-06",
          "2023-11-13",
          "2023-11-20",
          "2023-11-27",
          "2023-12-04",
          "2023-12-11",
          // Add more dates for weeks 4 to 15 as needed
        ];

        // Set the target date based on the week number
        this.targetDate = new Date(schedule[this.weekNumber - 1]);
      } else {
        this.targetDate = null; // Invalid week number, no target date
      }
    },
    checkDate() {
      if (this.targetDate) {
        const currentDate = new Date();

        if (currentDate >= this.targetDate) {
          this.showContent = true;
        }
      }
    },
  },
  props: {
    weekNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  --primary-colour: 62, 175, 124;
  --accent-colour: 44, 62, 80;
  border-radius: 0.5rem;
  border-top: 0.5rem solid rgb(var(--accent-colour));
  box-shadow: 0px 1px 8px 0px rgba(var(--accent-colour), 0.23);
  line-height: 1.5rem;
  padding: 1rem;
  margin: 1.5rem auto;
  grid-gap: 1rem;
  max-width: 550px;
}
</style>
