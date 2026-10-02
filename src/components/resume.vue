<template>
  <div id="me" class="me section">
    <p class="section-title">ABOUT ME</p>
    <div class="resume-card glass-card">
      <div class="clearfix desc text-center">
        <img id="photo" :src="publicPath+'photo.jpg'" class="float-md-start mb-3">
        <p id="text" v-for="item in me.resume" :key="item.id">
          {{item.text}}
        </p>
      </div>
      <div id="data" class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">Name:</span><span class="info"> {{me.name}} {{me.firstName}}</span></p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">Age:</span><span class="info"> {{me.age}}</span></p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">Specialization:</span><span class="info"> {{me.specialization}}</span></p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">Country:</span><span class="info"> {{me.country}}</span></p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">City:</span><span class="info"> {{me.city}}</span></p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <p><span class="data">E-mail:</span><a class="info" :href="'mailto:'+me.email"> {{me.email}}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume',
  props: {
    me: Object
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    this.convert();
  },
  methods: {
    convert() {
      let age = new Date(this.me.age);
      let check = new Date();
      let milliDays = 1000*60*60*24;
      let AgeInDays = (check - age)/milliDays;
      this.me.age = Math.floor(AgeInDays/365) + " y.o.";
    }
  }
}
</script>

<style scoped>
#me {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
.resume-card {
  text-align: left;
}
img#photo {
  padding: 0;
  max-width: 180px;
  border-radius: 50%;
  border: 3px solid #00d4ff;
  margin: 10px 20px 10px 0;
}
#data {
  text-align: left;
  font-size: 1em;
  margin-top: 1.5rem;
}
.desc {
  text-align: justify;
  font-size: 1em;
  margin-bottom: 10px;
}
#text {
  text-align: justify !important;
  line-height: 1.7;
}
#data span.data {
  color: #00d4ff;
  font-weight: 600;
}
#data .info {
  color: #c0c0c0;
  text-decoration: none;
}
#data .info:hover {
  color: #00d4ff;
}
</style>