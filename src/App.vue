<template>
  <div id="app" class="back">
    <!-- Navbar -->
    <nav class="navbar glass-nav" :class="{ 'nav-visible': showNav }">
      <div class="nav-container">
        <a href="#about" class="nav-brand">{{ me.firstName }} {{ me.name }}</a>
        <div class="nav-links" :class="{ 'nav-open': mobileMenuOpen }">
          <a href="#resume" class="nav-link" @click="closeMenu">About</a>
          <a href="#education" class="nav-link" @click="closeMenu">Timeline</a>
          <a href="#skills" class="nav-link" @click="closeMenu">Skills</a>
          <a href="#selfedu" class="nav-link" @click="closeMenu">Education</a>
          <a href="#projects" class="nav-link" @click="closeMenu">Projects</a>
          <a href="#contacts" class="nav-link" @click="closeMenu">Contacts</a>
        </div>
        <button class="nav-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- Hero -->
    <div id="about" class="section-container" ref="hero">
      <StartedPage :name="me.name" :firstName="me.firstName" :desc="me.desc"/>
    </div>

    <!-- Resume -->
    <div id="resume" class="section-container">
      <Resume :me="me"/>
    </div>

    <!-- Education & Work -->
    <div id="education" class="section-container">
      <Education :work="me.work" :edu="me.edu"/>
    </div>

    <!-- Hard Skills -->
    <div id="skills" class="section-container">
      <Skills :data="me.skills[0]"/>
    </div>

    <!-- Soft Skills -->
    <div id="soft" class="section-container">
      <Soft :data="me.soft[0]"/>
    </div>

    <!-- Self Education -->
    <div id="selfedu" class="section-container">
      <SelfEdu :couses="me.courses" :data="me.selfedu"/>
    </div>

    <!-- Projects -->
    <div id="projects" class="section-container">
      <Projects :projects="me.projects"/>
    </div>

    <!-- Contacts -->
    <div id="contacts" class="section-container">
      <Contacts :email="me.email" :contacts="me.contacts"/>
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Borders -->
    <div class="line top"></div>
    <div class="line bottom"></div>
    <div class="line left"></div>
    <div class="line right"></div>
  </div>
</template>

<script>
import StartedPage  from '@/components/started_page.vue';
import Resume       from '@/components/resume.vue';
import Education    from '@/components/education_work.vue';
import Skills       from '@/components/skills.vue';
import Soft         from '@/components/soft.vue';
import SelfEdu      from '@/components/selfedu.vue';
import Projects     from '@/components/projects.vue';
import Contacts     from '@/components/contacts.vue';
import Footer       from '@/components/footer.vue';

import json from './data.json'

export default {
  name: 'app',
  components: {
    StartedPage,
    Resume,
    Education,
    Skills,
    Soft,
    SelfEdu,
    Projects,
    Contacts,
    Footer,
  },
  data() {
    return {
      me: json,
      showNav: false,
      mobileMenuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.$nextTick(() => {
      const sections = document.querySelectorAll('.section-container');
      sections.forEach(section => observer.observe(section));
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showNav = window.scrollY > window.innerHeight * 0.8;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    }
  }
}
</script>

<style>
/* ===== CSS Variables ===== */
:root {
  --bg-primary: #1a1a24;
  --bg-secondary: #252530;
  --text-primary: #e0e0e0;
  --text-secondary: #b4b4b4;
  --accent-cyan: #00d4ff;
  --accent-green: #00ff88;
  --accent-yellow: #f5e550;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-primary) !important;
  margin: 0;
  padding: 0;
}

/* ===== App Container ===== */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.back {
  background-color: var(--bg-primary);
}

/* ===== Section Container (for animations) ===== */
.section-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  scroll-margin-top: 80px;
}
.section-container.section-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Section Title (global) ===== */
.section-title {
  text-align: left;
  font-size: 1.4em;
  color: var(--accent-cyan);
  font-family: 'Courier New', monospace;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-cyan), transparent);
}

/* ===== Glass Card Utility ===== */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(0, 212, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* ===== Navbar ===== */
.glass-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(26, 26, 36, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 110;
  transform: translateY(-100%);
  transition: transform 0.4s ease;
  display: flex;
  align-items: center;
}
.glass-nav.nav-visible {
  transform: translateY(0);
}
.nav-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  color: var(--accent-cyan);
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
.nav-brand:hover {
  color: var(--accent-cyan);
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s;
  letter-spacing: 0.5px;
}
.nav-link:hover {
  color: var(--accent-cyan);
}

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ===== Borders ===== */
#app .line {
  background: #12121a;
  content: '';
  position: fixed;
  z-index: 105;
}
#app .line.top {
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
}
#app .line.bottom {
  left: 0;
  top: auto;
  bottom: 0;
  width: 100%;
  height: 30px;
}
#app .line.left {
  left: 0;
  top: 0;
  width: 30px;
  height: 200%;
}
#app .line.right {
  left: auto;
  right: 0;
  top: 0;
  width: 30px;
  height: 200%;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  #app {
    width: 95%;
  }
  #app .line.top,
  #app .line.bottom {
    height: 15px;
  }
  #app .line.left,
  #app .line.right {
    width: 15px;
  }
  .glass-card {
    padding: 1rem;
  }
  .section-title {
    font-size: 1.1em;
  }

  /* Mobile nav */
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(26, 26, 36, 0.95);
    backdrop-filter: blur(14px);
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1.2rem;
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .nav-links.nav-open {
    transform: translateY(0);
  }
  .nav-toggle {
    display: flex;
  }
  .nav-link {
    font-size: 1em;
  }
}

@media (max-width: 576px) {
  .glass-card {
    padding: 0.8rem;
  }
}
</style>