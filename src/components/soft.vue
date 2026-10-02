<template>
  <div id="softs" class="section row justify-content-md-center">
    <p class="section-title">Soft Skills</p>
    <div class="col-sm-12 col-lg-12">
      <div id="SoftSkills" class="SoftSkills glass-card">
        <p id="desc" v-for="item in data.text" :key="item.id" v-html="item.text">
          {{item.text}}
        </p>
        <div v-for="i in data.skills" :key="i.title" class="soft">
          <p><span class="tech">{{i.title}} </span><span class="year">({{i.level}})</span></p>
          <div class="progress">
            <div class="progress-bar progress-bar-animated" role="progressbar"
              :style="{width: i.level+'0%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softs',
  props: {
    data: Object
  }
}
</script>

<style scoped>
#softs {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
#desc {
  padding: 0 0 15px 0;
  text-align: justify;
  line-height: 1.7;
  color: #c0c0c0;
}
.soft {
  text-align: left;
  padding: 12px 0 0 0;
  max-width: 100%;
  margin: 0 auto;
}
.soft p {
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
  height: 0.2em;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}
</style>