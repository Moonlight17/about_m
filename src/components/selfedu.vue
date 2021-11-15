<template>
    <div id="SelfEdu" class="SelfEdu row justify-content-md-center">
      <p id="title">SELF-EDUCATION</p>
      <div class="col-sm-12 col-xl-12">
        <div class="desc">
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
  components: {

  },
  props: {
    data: Array,
    couses:Array
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