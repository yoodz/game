<template>
  <div class="hello">
    <button @click="moveChess">click</button>
    <h1>{{ msg }} {{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count: String
  },
  created () {
  },
  methods: {
    focusChess (x, y) {
      this.ctx.beginPath()
      this.ctx.fillStyle = '#E74343'
      this.ctx.arc(15 + x * 30, 15 + y * 30, 6, 0, Math.PI * 2)
      this.ctx.fill()
    },

    removeChess (x, y) {
      this.ctx.beginPath()
      this.ctx.fillStyle = 'green'
      this.ctx.arc(15 + x * 30, 15 + y * 30, 6, 0, Math.PI * 2)
      this.ctx.fill()
    },

    moveChess () {
      for (let index = 0; index < 15; index++) {
        if (index > 0) {
          this.ctx.setTransform(1, 0, 0, 1, 0, 0)
          this.ctx.clearRect(0, 0, 450, 450)
          // this.removeChess(index - 1, index - 1)
          this.draw()
          console.log(index)
        }
        console.log(index)
        this.focusChess(index, index)
      }
    },
    draw () {
      for (var i = 0; i < this.col; i++) {
        this.ctx.moveTo(15 + 30 * i, 15)
        this.ctx.lineTo(15 + 30 * i, this.col * 30 - 15)
        this.ctx.stroke()
        this.ctx.moveTo(15, 15 + 30 * i)
        this.ctx.lineTo(this.col * 30 - 15, 15 + 30 * i)
        this.ctx.stroke()
      }
    }
  },
  mounted () {
    console.log(this.count)
    let opts = {
      'container': '.hello'
    }
    let oCanvas = document.createElement('canvas')
    this.col = (opts.width && opts.width / 30) || 15
    oCanvas.width = oCanvas.height = opts.width || 450
    this.canvas = oCanvas
    document.querySelector(opts.container || 'body').appendChild(this.canvas)
    this.ctx = oCanvas.getContext('2d')
    this.ctx.strokeStyle = '#bfbfbf'
    for (var i = 0; i < this.col; i++) {
      this.ctx.moveTo(15 + 30 * i, 15)
      this.ctx.lineTo(15 + 30 * i, this.col * 30 - 15)
      this.ctx.stroke()
      this.ctx.moveTo(15, 15 + 30 * i)
      this.ctx.lineTo(this.col * 30 - 15, 15 + 30 * i)
      this.ctx.stroke()
    }
    let that = this
    oCanvas.addEventListener('click', function (e) {
      // that.ctx.clearRect(0, 0, that.col*30, that.col*30);
      let x = Math.floor((e.offsetX) / 30)
      let y = Math.floor((e.offsetY) / 30)
      console.log(x + '---' + y)

      that.focusChess(x, y)
      // //重绘棋盘
      // that.drawBoard();

      // //移动聚焦效果
      // that.focusChess(x, y);

      // //重绘已经下好的棋子
      // that.redrawedChess()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  flex-grow: 1;
  margin: 0;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .4) inset;
}

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
