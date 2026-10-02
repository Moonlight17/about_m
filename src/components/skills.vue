<template>
  <div id="skills" class="section skills row">
    <p class="section-title">Hard Skills</p>
    <div class="com-sm-12 col-lg-6 column">
      <p class="mini_title">DevOps</p>
      <div id="DevOps" class="DevOps glass-card">
        <div v-for="i in data.DevOps" :key="i.title" class="skill">
          <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}})</span></p>
          <div class="progress">
            <div class="progress-bar progress-bar-animated" role="progressbar"
              :style="{width: (i.level/maxLevels.DevOps)*100+ '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="com-sm-12 col-lg-6 column">
      <p class="mini_title">Develop</p>
      <div id="Develop" class="Develop glass-card">
        <div v-for="i in data.Develop" :key="i.title" class="skill">
          <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}})</span></p>
          <div class="progress">
            <div class="progress-bar progress-bar-animated" role="progressbar"
              :style="{width: (i.level/maxLevels.Develop)*100+ '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: {
    data: Object
  },
  computed: {
    maxLevels() {
      const result = {};
      for (const category in this.data) {
        result[category] = Math.max(...this.data[category].map(s => s.level));
      }
      return result;
    }
  }
}
</script>

<style scoped>
#skills {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 8% 10% 8%;
}
.mini_title {
  width: 50%;
  margin: 0 auto 1.5rem auto;
  font-size: 1.2em;
  padding: 8px 7%;
  border: 2px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.column {
  margin-bottom: 10%;
}
.skill {
  text-align: left;
  padding: 15px 0 0 0;
}
.skill p {
  padding-bottom: 0;
  margin-bottom: 0;
  width: 100%;
  text-align: right;
}
.progress-bar {
  background: linear-gradient(90deg, #00d4ff, #00ff88);
}
.tech {
  font-size: 1em;
  font-weight: 600;
  display: inline-block;
  float: left;
  color: #e0e0e0;
}
.year {
  text-align: right;
  color: #888;
}
.progress {
  height: 0.3em;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}
</style>