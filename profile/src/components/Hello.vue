<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="tab in tabs">
        {{ tab.text }}

      </li>
    </ul>
    <span v-bind:title="message">
        悬停几秒后显示title内容
    </span>
    <div class="reverse">
      <p>{{ message }}</p>
      <button @click="reverse">点击翻转</button>

    </div>
    <p v-if="seen" @click="hide">
      now you see
    </p>
    <div v-bind:style="styleObject">
      <p>styleObject</p>
    </div>
    <div>
      <b v-for="n in 10">{{ n }}</b>
    </div>
    <div class="click">
      <button @click="count += 1">点击一次</button>
      <p>点击的次数 {{ count }}</p>
    </div>
    <div style="margin-top:20px;">
      <button @click="Greet">点击</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabs: [
        {text: 'aaa'},
        {text: 'bbb'}
      ],
      message: '与' + new Date() + '加载页面',
      seen: true,
      styleObject: {
        color: 'red'
      },
      count: 0,
      name: 'vue js'
    }
  },
  methods: {
    reverse: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    },
    hide: function () {
      this.seen = false
      console.log(this.seen)
    },
    Greet: function (event) {
      alert('hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
span {
  display: block;
  border: 2px dashed darkblue;
  border-radius: 9px;
  /* width: 500px; */
  margin: 10px auto;
}
.reverse {
  margin: 30px auto;
  /* width: 500px; */
  border: 2px solid silver;
  box-shadow: 5px 5px 5px #ccc;
  border-radius: 9px;
  padding: 10px;

}
.click {
  margin: 20px  auto;
  border: 2px solid rebeccapurple;
  border-radius: 6px;
  padding: 9px;
}
button{
  width: 90px;
  border: 2px dashed tan;
  border-radius: 9px;
}
</style>
