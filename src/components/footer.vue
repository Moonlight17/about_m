<template>
  <div class="footer">
    <div class="d-flex align-items-center justify-content-between" style="height: 100%;">
      <div class="p-1 text-muted vertical">
        <p class="year">© {{year}}</p>
      </div>
      <div class="p-1 text-muted vertical">
        <a target="blank" href="https://github.com/Moonlight17"><font-awesome-icon icon="fa-brands fa-github" class="icons"/></a>
        <a target="blank" href="https://www.linkedin.com/in/moonlight1790"><font-awesome-icon icon="fa-brands fa-linkedin" class="icons"/></a>
        <a target="blank" href="https://www.facebook.com/profile.php?id=100015795815781"><font-awesome-icon icon="fa-brands fa-facebook" class="icons"/></a>
        <a target="blank" href="https://www.instagram.com/moonlight1790/"><font-awesome-icon icon="fa-brands fa-instagram" class="icons"/></a>
      </div>
    </div>
    <button class="back-to-top" @click="scrollToTop" title="Back to top">
      <font-awesome-icon icon="fa-solid fa-arrow-up" />
    </button>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>
<style>
#app .footer {
  position: fixed;
  bottom: 30px;
  left: 30px;
  height: 50px;
  width: calc(100% - 60px);
  padding: 0;
  background: rgba(49, 49, 58, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;
}
#app .footer p {
  margin: 0;
}
#app .footer .year {
  padding: 15px;
}
#app .footer .icons {
  color: white;
  font-size: 1.3em;
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
}
#app .footer .icons:hover {
  color: #00d4ff;
  transition-duration: 0.5s;
  transform: scale(1.3);
  padding: 5px;
}
.back-to-top {
  position: fixed;
  bottom: 90px;
  right: 50px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(0, 212, 255, 0.4);
  background: rgba(49, 49, 58, 0.9);
  color: #00d4ff;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s;
  z-index: 100;
}
.back-to-top:hover {
  border-color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
}
@media (max-width: 768px) {
  #app .footer {
    bottom: 15px;
    left: 15px;
    width: calc(100% - 30px);
  }
  .back-to-top {
    right: 20px;
    bottom: 75px;
    width: 38px;
    height: 38px;
    font-size: 0.95em;
  }
}
</style>