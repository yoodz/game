<template>
  <div class="hello">
    <Circle :percent="80">
      <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <h1>游戏列表</h1>
    <router-link to="/snake">贪吃蛇</router-link>
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
