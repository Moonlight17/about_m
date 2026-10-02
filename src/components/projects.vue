<template>
  <div id="projects" class="section projects-section">
    <p class="section-title">PROJECTS</p>
    <div class="projects-grid row">
      <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="project-card glass-card">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
          </div>
          <p class="project-desc">{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.techStack" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>
          <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
            View Project <font-awesome-icon icon="fa-solid fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: Array
  }
}
</script>

<style scoped>
#projects {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
.project-card {
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
}
.project-title {
  color: #e0e0e0;
  font-size: 1.15em;
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.project-desc {
  color: #b4b4b4;
  font-size: 0.9em;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
}
.tech-stack {
  margin-bottom: 1rem;
}
.tech-badge {
  display: inline-block;
  background: rgba(0, 212, 255, 0.12);
  color: #00d4ff;
  border-radius: 4px;
  padding: 3px 10px;
  margin: 2px 4px 2px 0;
  font-size: 0.78em;
  font-family: 'Courier New', monospace;
}
.project-link {
  color: #00d4ff;
  text-decoration: none;
  font-size: 0.9em;
  transition: opacity 0.3s;
}
.project-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}
</style>