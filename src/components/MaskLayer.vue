<template>
  <div class="mask-layer">
    <Circle :percent="80">
      <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <Card class="msg-box">
      <h1 @click="changeTitle">{{ msg }}</h1>
      <Button type="success" @click="restart">重新开始</Button>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'MaskLayer',
  props: {
    msg: String,
    reload: {}
  },
  created () {
    console.log(this.reload)
  },
  methods: {
    changeTitle () {
      this.$emit('titleChanged', '子向父组件传值')
    },
    restart () {
      this.reload()
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.msg-box {
  width: 200px;
  height: 200px;
  background-color: #f8f8f9;
  border-radius: 10px;
}
</style>
