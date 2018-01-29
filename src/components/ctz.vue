<template>
  <div class="ctz">
    <router-link to='/'> heleloworld </router-link>

    <ul>
      <li v-for='item in arry'>{{item}}</li>
    </ul>

    <p v-for='item in arr'>
      {{item.name}}
      {{item.addr}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        arry: [11, 22, 33, 44, 55],
        arr: [
          {name: ' 陈太章 ', addr: ' 云南昆明 '},
          {name: ' tiga ', addr: ' 遥远的光 '},

        ]
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
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
