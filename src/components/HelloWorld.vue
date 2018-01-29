<template>
  <div class="hello">
    <ul>
      <li v-for="item in arr">
        <div class="p1">
          <router-link :to="{path:'/detail',query:{ids:item.id}}">{{item.content}}</router-link>
        </div>
        <div class="p2">
          <img :src="item.imgUrl" >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        arr: []
      }
    },
    mounted () {
      var url = '../../static/news.json'
      var self = this
      this.$axios.get(url).then(function (response) {
        console.log(response.data.result.data)
        self.arr = response.data.result.data
      }).catch(function (error) {
        console.log(error)
      })

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

  .p1 {
    float: left;
    width: 700px;
  }

  .p2 {
    float: right;
  }
</style>
