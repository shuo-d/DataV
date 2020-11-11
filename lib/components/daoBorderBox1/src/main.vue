<template>
  <div class="dao-border-box-1" :ref="ref">
    <svg class="dv-border-svg-container"  :width="width" :height="height" viewBox="0 0 267 103">
      <defs>
          <polygon points="16.964845 1 1 17.1022249 1 100.604248 249.15542 100.604248 265.1726 84.9547224 265.1726 1"></polygon>
          <filter x="-3.6%" y="-9.5%" width="107.2%" height="119.1%" filterUnits="objectBoundingBox" id="filter-2">
              <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
              <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
              <feColorMatrix values="0 0 0 0 0.00392156863   0 0 0 0 0.619607843   0 0 0 0 1  0 0 0 0.268711757 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
          </filter>
          <polygon id="path-3" points="11.5753516 -2.27373675e-13 0 -2.27373675e-13 0 11.6404777"></polygon>
          <filter x="-21.6%" y="-21.5%" width="149.3%" height="149.1%" filterUnits="objectBoundingBox" id="filter-4">
              <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
              <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
              <feColorMatrix values="0 0 0 0 0.00392156863   0 0 0 0 0.619607843   0 0 0 0 1  0 0 0 0.521388767 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
          </filter>
          <polygon id="path-5" points="264.9865 88.456291 253.411149 88.456291 253.411149 100.096769"></polygon>
          <filter x="-21.6%" y="-21.5%" width="149.3%" height="149.1%" filterUnits="objectBoundingBox" id="filter-6">
              <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
              <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
              <feColorMatrix values="0 0 0 0 0.00392156863   0 0 0 0 0.619607843   0 0 0 0 1  0 0 0 0.521388767 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
          </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(1.000000, 1.000000)">
              <g>
                  <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                  <use stroke="#019EFF" stroke-width="1" xlink:href="#path-1"></use>
              </g>
              <g>
                  <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                  <use stroke="#019EFF" stroke-width="1" xlink:href="#path-3"></use>
              </g>
              <g transform="translate(259.198824, 94.276530) scale(-1, -1) translate(-259.198824, -94.276530) ">
                  <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                  <use stroke="#019EFF" stroke-width="1" xlink:href="#path-5"></use>
              </g>
              <polyline stroke="#019EFF" points="221.730981 8.28814409 258.148966 8.28814409 258.148966 28.4184375"></polyline>
              <polyline stroke="#019EFF" transform="translate(26.120141, 83.021438) scale(-1, -1) translate(-26.120141, -83.021438) " points="7.9111486 72.956291 44.3291337 72.956291 44.3291337 93.0865844"></polyline>
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

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

export default {
  name: 'DaoBorderBox1',
  mixins: [autoResize],
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
      ref: 'border-box-13',

      defaultColor: ['#6586ec', '#019EFF'],

      mergedColor: []
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
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
}
</script>