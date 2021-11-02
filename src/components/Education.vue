<template>
    <div id="educ" class="row">
        <h1>EDUCATION</h1>  <h1>Work</h1>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <ul v-for="i in edu" :key="i.id">
                <li>{{i.period}}</li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            Column
        </div>
    </div>
</template>


<script>

export default {
  name: 'Education',
  props: {
    edu: Array
  }
}
</script>

<style scoped>
#educ{
    color: white;
}
</style>