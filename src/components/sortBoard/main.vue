<template>
  <ul id="list"></ul>
</template>

<script>
import Animate from './sort.js'
export default {
  name: 'SortBoard',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    let myAnimate = new Animate()
    myAnimate.init(document.getElementById('list'))
  },
  methods: {}
  
}
</script>
<style lang="scss" scoped>
    html, body, div, ul, li, img, span {
      padding: 0;
      margin: 0;
    }
 
    ul, li {
      list-style: none
    }
 
    span {
      display: inline-block;
    }
 
    img {
      vertical-align: top;
    }
 
    #box {
      padding: 20px;
      height: 700px;
    }
 
    #box ul {
      padding-left: 20px;
      position: relative;
    }
 
    #box li {
      margin-left: 60px;
      height: 28px;
      box-sizing: border-box;
      position: absolute;
      line-height: 28px;
      transition: width ease 1s, transform ease 1s, opacity ease 1s;
      opacity: 0;
      background: #ddd;
      border-radius: 20px;
      box-shadow: inset -5px 0px 25px rgba(0,0,0,.4);
    }
 
    #box li .name {
      position: absolute;
      left: -60px;
      white-space: nowrap;
    }
 
    #box li .count {
      margin-left: 15px;
      position: absolute;
      left: 100%;
      font-size: 18px;
      letter-spacing: 1px;
      color: #fff;
      font-style: italic;
      text-shadow: 1px 0 2px #000, 0 1px 2px #000;
    }
</style>
