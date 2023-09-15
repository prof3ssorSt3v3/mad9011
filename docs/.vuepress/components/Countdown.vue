<template>
  <div v-if="showContent">
    <slot></slot>
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
  },
};
</script>

<style scoped>
/* Your CSS styling goes here */
</style>
