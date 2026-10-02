<template>
<div class="hero">
  <div>
    <p class="name">{{firstName}} {{name}}</p>
  </div>
  <div class="desc">
    <p>{{desc}}</p>
  </div>
  <button class="scroll-btn" @click="scrollToNext">
    <font-awesome-icon icon="fa-solid fa-arrow-down" />
  </button>
</div>
</template>

<script>
export default {
  name: 'StartedPage',
  props: {
    name: String,
    firstName: String,
    desc: String
  },
  methods: {
    scrollToNext() {
      const next = document.getElementById('resume');
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
p.name {
  font-family: 'Courier New', 'Fira Code', monospace;
  color: #00d4ff;
  font-size: 4.6em;
  letter-spacing: 0.2em;
  margin-top: -40px;
  text-shadow:
    0 0 20px rgba(0, 212, 255, 0.3),
    0 0 40px rgba(0, 212, 255, 0.1),
    -1px -1px 0px #1a1a24,
    3px 3px 0px #1a1a24,
    6px 6px 0px #f5e550;
}
.desc p {
  color: #c0c0c0;
  font-weight: 400;
  font-size: 1.15em;
  max-width: 600px;
}
.scroll-btn {
  margin-top: 2rem;
  background: none;
  border: 2px solid rgba(0, 212, 255, 0.4);
  color: #00d4ff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s;
  animation: float 2s ease-in-out infinite;
}
.scroll-btn:hover {
  border-color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
@media (max-width: 576px) {
  p.name { font-size: 2.5em; letter-spacing: 0.1em; }
  .desc p { font-size: 1em; }
}
</style>