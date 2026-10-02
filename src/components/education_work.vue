<template>
  <div id="educ" class="section row">
    <p class="section-title">Education & Work Experience</p>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
      <vue-timeline-update v-for="i in edu" :key="i.id"
        :date="i.dateStart"
        :title="i.degree"
        :description="i.description"
        :category="i.category"
        icon="school"
        color="white"
        is-last
      />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
      <vue-timeline-update v-for="i in work" :key="i.id"
        :date="i.dateStart"
        :title="i.title"
        :description="i.description"
        :category="i.category"
        icon="code"
        color="white"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    work: Array,
    edu: Array,
  },
  created() {
    this.convert();
  },
  methods: {
    convert() {
      for (let i in this.work) {
        for (let j in this.work[i]) {
          if (j == 'dateStart' || j == 'dateEnd') {
            this.work[i][j] = new Date(this.work[i][j]);
          }
        }
      }
      for (let i in this.edu) {
        for (let j in this.edu[i]) {
          if (j == 'dateStart' || j == 'dateEnd') {
            this.edu[i][j] = new Date(this.edu[i][j]);
          }
        }
      }
    }
  }
}
</script>

<style scoped>
#educ {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
/* Override vuetimeline colors */
#educ >>> .gb-vue-timeline-update__title {
  color: #00d4ff !important;
}
#educ >>> .gb-base-badge {
  background: rgba(0, 212, 255, 0.12) !important;
  color: #00d4ff !important;
}
#educ >>> .gb-vue-timeline-update__date {
  color: #888 !important;
  font-size: 0.85em !important;
}
#educ >>> .gb-vue-timeline-update__description {
  color: #b4b4b4 !important;
}
#educ >>> .gb-vue-timeline-update--dark .gb-vue-timeline-update__left:after {
  background: #00d4ff !important;
}
</style>