<template>
  <div class='hello'>
    <canvas id='ca' width='400' height='400' style='background-color: black'></canvas>
  </div>
</template>

<script>
export default {
  name: 'Snake',
  props: {
    msg: String,
    count: String
  },
  data () {
    return {
      x: 0,
      y: 0,
      snake: [41, 40],
      food: 43,
      n: null,
      direction: 1
    }
  },
  created () {},
  methods: {
    draw (seat, color) {
      this.ctx.fillStyle = color
      this.ctx.fillRect((seat % 20) * 20 + 1, ~~(seat / 20) * 20 + 1, 18, 18)
    },
    move () {
      let that = this
      setTimeout(function () {
        that.snake.unshift((that.n = that.snake[0] + that.direction))
        console.log(that.n)
        console.log(that.n % 20)
        if (
          that.snake.indexOf(that.n, 1) > 0 ||
          that.n < 0 ||
          that.n > 399 ||
          (that.direction === 1 && that.n % 20 === 0) ||
          (that.direction === -1 && that.n % 20 === 19)
        ) {
          return alert('finished')
        }

        that.draw(that.n, 'lime')
        if (that.n === that.food) {
          while (that.snake.indexOf((that.food = ~~(Math.random() * 400))) > 0) {}
          that.draw(that.food, 'yellow')
        } else {
          that.draw(that.snake.pop(), 'black')
        }
        that.move()
      }, 800)
    }
  },
  mounted () {
    let opts = {
      container: '.hello'
    }
    let oCanvas = document.getElementById('ca')
    this.col = (opts.width && opts.width / 20) || 20
    oCanvas.width = oCanvas.height = opts.width || 400
    this.canvas = oCanvas
    this.ctx = oCanvas.getContext('2d')
    this.ctx.strokeStyle = '#bfbfbf'
    let that = this
    document.onkeydown = function (evt) {
      console.log(that.snake)
      that.direction =
        that.snake[1] - that.snake[0] ===
        (that.n = [-1, -20, 1, 20][(evt || event).keyCode - 37] || that.direction)
          ? that.direction
          : that.n
      console.log(that.direction)
    }
    that.move()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
