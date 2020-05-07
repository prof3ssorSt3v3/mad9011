<template>
  <div class="contact-card">
    <div class="contact-card--left">
      <img
        class="contact-card_img"
        :src="imgUrl"
        :alt="`headshot of ${name}`"
      />
      <h3 class="contact-card_name">{{ name }}</h3>
      <h2 class="contact-card_title">{{ title }}</h2>
    </div>
    <div class="contact-card--right">
      <div class="contact-card_bio">{{ bio }}</div>
      <div>
        <div v-for="item of details" class="contact-card_details">
          <span class="contact-card_details--label">{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const headshot = '/F2020/HeadshotPlaceholder.png';

export default {
  name: 'ContactCard',
  props: {
    name: { type: String, required: true },
    title: { type: String, default: 'Professor' },
    bio: { type: String, default: '' },
    imgUrl: { type: String, default: headshot },
    details: {
      type: Array,
      default: () => [
        { label: 'email', value: '' },
        { label: 'phone', value: '' },
        { label: 'office', value: '' },
      ],
    },
  },
};
</script>

<style>
.contact-card {
  --primary-colour: 62, 175, 124;
  --accent-colour: 44, 62, 80;
  --grid-columns: 1fr;
  display: grid;
  grid-template-columns: var(--grid-columns);
  border-radius: 0.5rem;
  border-top: 0.5rem solid rgb(var(--accent-colour));
  box-shadow: 0px 1px 8px 0px rgba(var(--accent-colour), 0.23);
  line-height: 1.5rem;
  padding: 1rem;
  margin: 1.5rem auto;
  grid-gap: 1rem;
  max-width: 550px;
}
.contact-card--left {
  display: flex;
  flex-direction: column;
}
.contact-card--right {
  display: grid;
  grid-template-rows: minmax(120px, auto) 1fr;
  grid-gap: 0.5rem;
}
.contact-card_name {
  font-size: 1rem;
  margin: 0;
}
.contact-card_title {
  color: rgb(var(--primary-colour));
  font-size: 0.75rem;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  border: none;
}
.contact-card_img {
  border-radius: 50%;
  min-width: 60px;
  width: 120px;
  margin-bottom: 0.5rem;
}
.contact-card_bio {
  margin-bottom: 1rem;
}
.contact-card_details {
  font-size: 0.8rem;
  opacity: 0.8;
  display: grid;
  grid-template-columns: 1.1fr 4.5fr;
  grid-gap: 0.25rem;
}
.contact-card_details--label {
  text-transform: uppercase;
  letter-spacing: 0.125px;
  font-size: 0.8em;
  font-weight: 600;
  opacity: 0.65;
}
@media screen and (min-width: 410px) {
  .contact-card {
    --grid-columns: 1.3fr 1.7fr;
  }
}
</style>
