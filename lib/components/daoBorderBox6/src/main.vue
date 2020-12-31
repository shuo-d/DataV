<template>
  <div class="dao-border-box-6" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height" >
     <defs>
        <filter x="-3.6%" y="-9.5%" width="107.2%" height="119.1%" filterUnits="objectBoundingBox" id="filter-2">
            <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.00392156863   0 0 0 0 0.619607843   0 0 0 0 1  0 0 0 0.268711757 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
     </defs>
     <g fill="none" stroke="#52A8E7" stroke-width="1">
        <!-- 暂设置三角与矩形间距为3  三角边：长=7:80 0.0875 矩形长：长=70:80 0.875  矩形高：高= 70:-->
        <!-- 三角 -->
        <path :d="`M 1 1 L ${width * 0.065} 1 L 1 ${width * 0.065} L 1 1`"></path>
        <path :d="`M ${width - 1 - (width * 0.065)} ${height - 1} L ${width - 1} ${height - 1} L ${width - 1} ${height - 1 - width *0.065} L ${width -1 - (width * 0.065)} ${height - 1}`"></path>
        <path
          fill="black"
          fill-opacity="1"
          filter="url(#filter-2)"
          :d="`M 1 1 L ${width * 0.065} 1 L 1 ${width * 0.065} L 1 1`"
        ></path>
        <path
          fill="black"
          fill-opacity="1"
          filter="url(#filter-2)"
          :d="`M ${width - 1 - (width * 0.065)} ${height - 1} L ${width - 1} ${height - 1} L ${width - 1} ${height - 1 - width *0.065} L ${width -1 - (width * 0.065)} ${height - 1}`"
        ></path>
        <!-- 矩形 -->
        <path :d="`M ${3 + 0.065 * width } 1 L ${width - 1 } 1 L ${width - 1} ${height - 3 - (0.065 * width)} L ${width - 3 - 1 -(0.065 * width)} ${height-1} L 1 ${height-1} L 1 ${3 + 0.065*width} L ${3 + 0.065 * width } 1`"></path>
        <path
          fill="black"
          fill-opacity="1"
          filter="url(#filter-2)"
          :d="`M ${3 + 0.065 * width } 1 L ${width - 1 } 1 L ${width - 1} ${height - 3 - (0.065 * width)} L ${width - 3 - 1 -(0.065 * width)} ${height-1} L 1 ${height-1} L 1 ${3 + 0.065*width} L ${3 + 0.065 * width } 1`"        ></path>
        <!-- 两个直角 -->
        <path :d="`M ${width - 1 - 5 -  width * 0.136 } 5 L ${width - 1 -5 } 5 L ${width - 1 - 5} ${ 5 + width * 0.136 / 1.8}`"></path>
        <path :d="`M 5 ${height - 1 - 5 - width * 0.136 / 1.8} L 5 ${height - 1 - 5} L ${ 5 + 1 + width * 0.136} ${height - 1 - 5 }`"></path>
     </g>
    </svg>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'
import computedSvgRealSize from '../../../mixin/computedSvgRealSize'


export default {
  name: 'DaoBorderBox6',
  mixins: [autoResize, computedSvgRealSize],
  components: {},
  props: {},
  data() {
    return {
      ref: "dao-border-box-6",
      basic: 14, // 固定边角长度14
    }
  },
  computed: {
      
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>