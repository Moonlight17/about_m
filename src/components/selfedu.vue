<template>
    <div id="SelfEdu" class="SelfEdu row justify-content-md-center">
      <p id="title">SELF-EDUCATION</p>
      <div class="col-sm-12 col-xl-12">
        <div class="desc">
          <p>Self-education is a big part of my life for many years already. Generally speaking, a man can feel himself "ok" just by learning and practicing one narrow technology stack. But I always feel need to "look around" for new interesting technology opportunities. That is why, every year I try to learn one or two new tech features, that I can use in my daily job.</p>
          <p>My favorite resource for self-education is freecodecamp.org. This is a non-profit developer community, that shares their knowledge with other people through interactive theory courses and a great number of challenging tasks to solve.</p>
        </div>
        <div class="certs row">
            <div v-for="item in data" :key="item.title" class="cert align-items-center col-sm-12 col-xl-4">
              <img :src="publicPath+item.path" class="img-thumbnail">
            </div>
        </div>
      </div>
    </div>
</template>


<script>

export default {
  name: 'SelfEdu',
  components: {

  },
  props: {
    data: Array
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
}
</script>

<style scoped>
#SelfEdu{
  color: #b4b4b4;
  position: relative;
  width: 100%;
  padding: 0 10%;
}
#title{
    text-align: left;
    font-size: 1.4em;
}
.desc{
    text-align: justify;
    font-size: 1em;
}
.cert{
  padding: 1em;
}
</style>