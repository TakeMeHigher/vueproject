<template>
  <div class="detail">
    <h1>我是详细页{{id}}</h1>
   <li >
     <div class="p1">
       {{obj.content}}
     </div>
       <div class="p2">
         <img :src="obj.imgUrl" alt="">
     </div>
   </li>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        obj:{},
        id:this.$route.query.ids
      }
    },
    mounted(){
      var url = '../../static/news.json';
      var self = this;
      this.$axios.get(url,{parmas:{id:this.id}}).then(function (response) {
        self.obj=response.data.result.data[0]
      }).catch(function (errot) {
        console.log(errot)
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
