<template>
  <div class="dv-decoration-11" :ref="ref">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(1.000000, 1.000000)">
                <polygon stroke="#0197EF" stroke-width="1.0801964" fill-opacity="0.632129589" fill="#06192E" :points="polygonData1"></polygon>
                <polygon fill="#7FFFFD" :points="polygonData2"></polygon>
                <text font-family="PingFangSC-Regular, PingFang SC" :font-size="`${11 * tempBase[1]}`" font-weight="normal" fill="#FFFFFF">
                    <tspan :x="`${6.5 * tempBase[0]}`" :y="`${16 * tempBase[1]}`">{{title}}</tspan>
                </text>
                <text id="状态码数量" font-family="PingFangSC-Regular, PingFang SC" :font-size="`${8 * tempBase[1]}`" font-weight="normal" fill="#7ECBF2">
                    <tspan :x="`${7 * tempBase[0]}`" :y="`${26 * tempBase[1]}`">{{subTit}}</tspan>
                </text>
                <text id="状态码数量" font-family="PingFangSC-Regular, PingFang SC" :font-size="`${16 * tempBase[1]}`" font-weight="normal" fill="#152336">
                    <tspan :x="`${86 * tempBase[0]}`" :y="`${29 * tempBase[1]}`">{{content}}</tspan>
                </text>
            </g>
        </g>
    </svg>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'
import computedSvgRealSize from '../../../mixin/computedSvgRealSize'
import { deepMerge } from '@jiaminghi/charts/lib/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'
const viewBase = [142, 42]
export default {
  name: 'Decoration13',
  mixins: [autoResize, computedSvgRealSize],
  props: {
    title: {
      type: String,
      default: ''
    },
    subTit: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ref: 'decoration-11',
      polygon1: [6.93816765,0,50.9065081,0,58.7576411,6.75660851,133.859356,6.75660851,140,11.9804207,140,34.5237943 ,133.859356,40,6.93816765,40,1.60069802,34.5237943,1.60069802, 6.75660851],
      polygon2: [77.0056761, 8, 132.627563, 8, 138, 12.714151, 138, 33.0580803, 132.627563, 38,58,38]
    }
  },
  computed: {
    polygonData1() {
      return this.computedSvgRealSize(this.polygon1, this.tempBase)
    },
    polygonData2() {
      return this.computedSvgRealSize(this.polygon2, this.tempBase)
    },
    tempBase(state) {
      return [this.width / viewBase[0], this.height / viewBase[1]]
    }
  },
  // watch: {
  //   color () {
  //     const { mergeColor } = this
  //     mergeColor()
  //   }
  // },
  methods: {
    // mergeColor () {
    //   const { color, defaultColor } = this

    //   this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    // },
  },
  // mounted () {
  //   const { mergeColor } = this

  //   mergeColor()
  // }
}
</script>