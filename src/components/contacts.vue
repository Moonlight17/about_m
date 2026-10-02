<template>
  <div id="contacts" class="section contacts-section">
    <p class="section-title">CONTACTS</p>
    <div class="contacts-content glass-card">
      <div class="contact-item">
        <font-awesome-icon icon="fa-solid fa-envelope" class="contact-icon" />
        <a :href="'mailto:' + email" class="contact-link">{{ email }}</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="contact-icon" />
        <span>{{ contacts.location }}</span>
      </div>
      <div class="contact-item">
        <font-awesome-icon icon="fa-brands fa-github" class="contact-icon" />
        <a :href="contacts.github" target="_blank" class="contact-link">GitHub</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="contact-icon" />
        <a :href="contacts.linkedin" target="_blank" class="contact-link">LinkedIn</a>
      </div>
      <div class="contact-item" v-if="contacts.telegram">
        <font-awesome-icon icon="fa-brands fa-telegram" class="contact-icon" />
        <a :href="'https://t.me/' + contacts.telegram" target="_blank" class="contact-link">Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    email: String,
    contacts: Object
  }
}
</script>

<style scoped>
#contacts {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
.contacts-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.contact-item {
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.contact-item:last-child {
  border-bottom: none;
}
.contact-icon {
  width: 32px;
  color: #00d4ff;
  font-size: 1.15em;
  flex-shrink: 0;
}
.contact-link {
  color: #b4b4b4;
  text-decoration: none;
  transition: color 0.3s;
}
.contact-link:hover {
  color: #00d4ff;
}
</style>