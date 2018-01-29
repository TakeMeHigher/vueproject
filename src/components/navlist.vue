<template>
  <div class="navlist">
    <router-link to='/'>首页</router-link>
    <router-link to='/news'>新闻</router-link>
    <router-link to='/duanzi'>段子</router-link>
    <router-link to='/detail'>详细</router-link>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {

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
