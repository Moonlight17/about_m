<template>
  <div id="SelfEdu" class="section SelfEdu row justify-content-md-center">
    <p class="section-title">SELF-EDUCATION</p>
    <div class="col-sm-12 col-xl-12">
      <div class="desc glass-card">
        <p v-for="item in data" :key="item.id" v-html="item.text">
          {{item.text}}
        </p>
      </div>
      <div class="certs row">
        <div v-for="item in couses" :key="item.title" class="cert align-items-center col-sm-12 col-xl-4">
          <img :src="publicPath+item.path" class="img-thumbnail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfEdu',
  props: {
    data: Array,
    couses: Array
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>
#SelfEdu {
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10% 10% 10%;
}
.desc {
  text-align: justify;
  font-size: 1em;
  line-height: 1.7;
  color: #c0c0c0;
  margin-bottom: 2rem;
}
.cert {
  padding: 1em;
}
.cert img {
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.cert img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.15);
}
</style>