<template>
  <div class="hello">
    <h1>游戏列表</h1>
    <router-link to="/snake">贪吃蛇</router-link>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
    count: String
  },
  created () {
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
