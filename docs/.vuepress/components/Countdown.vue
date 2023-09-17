<template>
  <div>
    <div v-if="showContent">
      <slot></slot>
    </div>
    <div v-else>
      <div class="card">
        {{ customMessage }}
      </div>
      <div class="blurred-content" v-if="!showContent">
        <slot></slot>
      </div>
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
  mounted() {
    this.checkDate();
  },
  methods: {
    checkDate() {
      const currentDate = new Date();
      const displayDate = new Date(this.date);

      if (currentDate >= displayDate) {
        this.showContent = true;
      }
    },
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    customMessage: {
      type: String,
      default:
        "The content for this deliverable will be made available prior to your scheduled lab class",
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

.blurred-content {
  filter: blur(4px); /* Apply blur effect */
  pointer-events: none; /* Make content un-clickable */
  opacity: 0.7; /* Adjust opacity for the blurred effect */
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Optional: Add a semi-transparent background */
}
</style>
