<template>
  <div class="dao-border-box-5" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
    <defs>
        <polygon
          id="path-1" 
          :points="polygonData1"
        ></polygon>
        <filter x="-3.6%" y="-9.5%" width="107.2%" height="119.1%" filterUnits="objectBoundingBox" id="filter-2">
            <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.00392156863   0 0 0 0 0.619607843   0 0 0 0 1  0 0 0 0.268711757 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(1.000000, 1.000000)">
            <g>
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <use stroke="#019EFF" stroke-width="1" xlink:href="#path-1"></use>
            </g>
        </g>
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
import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'
const viewBase = [267,103]
export default {
  name: 'DaoBorderBox5',
  mixins: [autoResize, computedSvgRealSize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'dao-border-box5',
      defaultColor: ['#6586ec', '#019EFF'],
      mergedColor: [],
      polygon1: [16.964845,0, 0, 17.1022249, 0, 100.604248, 249.15542, 100.604248, 265.1726, 84.9547224, 265.1726, 0],
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    },
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  },
  computed:{
    polygonData1() {
      return this.computedSvgRealSize(this.polygon1, this.tempBase)
    },
    tempBase() {
      return [this.width / viewBase[0], this.height / viewBase[1]]
    }
  }
}
</script>

<style lang="less">
.dao-border-box-5 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
