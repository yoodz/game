<template>
  <div class='hello'>
    <MaskLayer v-show="over" :msg="msg" v-on:titleChanged="updateTitle" :reload="reload"/>
    <div class="return">
      <router-link to="/">返回首页</router-link>
    </div>
    <canvas id='ca' width='400' height='400' style='background-color: black'></canvas>
  </div>
</template>

<script>
import MaskLayer from '@/components/MaskLayer.vue'

export default {
  name: 'Snake',
  components: { MaskLayer },
  data () {
    return {
      snake: [41, 40],
      food: 43,
      n: null,
      direction: 1,
      over: false,
      msg: '游戏结束'
    }
  },
  created () {},
  methods: {
    updateTitle (e) {
      console.log(e)
      this.msg = e
    },
    reload () {
      this.over = false
      location.reload()
    },
    draw (seat, color) {
      this.ctx.fillStyle = color
      this.ctx.fillRect((seat % 20) * 20 + 1, ~~(seat / 20) * 20 + 1, 18, 18)
    },
    move () {
      let that = this
      setTimeout(function () {
        that.snake.unshift((that.n = that.snake[0] + that.direction))
        if (
          that.snake.indexOf(that.n, 1) > 0 ||
          that.n < 0 ||
          that.n > 399 ||
          (that.direction === 1 && that.n % 20 === 0) ||
          (that.direction === -1 && that.n % 20 === 19)
        ) {
          that.over = true
          return
        }

        that.draw(that.n, 'lime')
        if (that.n === that.food) {
          while (that.snake.indexOf((that.food = ~~(Math.random() * 400))) > 0) {}
          that.draw(that.food, 'yellow')
        } else {
          that.draw(that.snake.pop(), 'black')
        }
        that.move()
      }, 100)
    }
  },
  mounted () {
    let opts = {}
    let oCanvas = document.getElementById('ca')
    this.col = (opts.width && opts.width / 20) || 20
    oCanvas.width = oCanvas.height = opts.width || 400
    this.canvas = oCanvas
    this.ctx = oCanvas.getContext('2d')
    this.ctx.strokeStyle = '#bfbfbf'
    let that = this
    document.onkeydown = function (evt) {
      that.direction =
        that.snake[1] - that.snake[0] ===
        (that.n = [-1, -20, 1, 20][(evt || event).keyCode - 37] || that.direction)
          ? that.direction
          : that.n
    }
    that.move()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
[v-cloak]{ display: none }

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

.return {
  margin-bottom: 20px;
}
</style>
