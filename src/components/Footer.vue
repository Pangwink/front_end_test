<template>
    <footer>
        <p>{{FooterText}}</p>
    </footer>
</template>
<script>
export default {
  data(){
      return{
          FooterText:'@ 2020 Copyright: Benjamat.com'
      }
  }
}
</script>

<style scoped>
    footer{
        background-color: rgb(127, 214, 255);
        padding: 13px;
        text-align: center;
        bottom:0;
        position:fixed;
        left: 0;
        width: 100%
    }
</style>
