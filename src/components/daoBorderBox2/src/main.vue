<template>
  <div class="dao-border-box-2" :ref="ref">
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="84.4320618%"
          gradientTransform="translate(0.500000,0.500000),scale(0.355435,1.000000),rotate(90.000000),scale(1.000000,1.446426),translate(-0.500000,-0.500000)"
          id="radialGradient-1"
        >
          <stop stop-color="#122644" offset="0%"></stop>
          <stop
            stop-color="#002136"
            stop-opacity="0.169252622"
            offset="100%"
          ></stop>
        </radialGradient>
        <linearGradient
          x1="56.1693514%"
          y1="54.2635773%"
          x2="100%"
          y2="8.57931931%"
          id="linearGradient-2"
        >
          <stop stop-color="#0099FF" stop-opacity="0" offset="0%"></stop>
          <stop stop-color="#00DCFF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          transform="translate(1.000000, 1.000000)"
          stroke-width="2"
        >
          <rect
            stroke="#0A4C75"
            fill="url(#radialGradient-1)"
            x="2"
            y="1"
            :width="`${width - 4}`"
            :height="`${height- 4}`"
            rx="2"
          ></rect>
          <path
            d="M781,0 L917.87028,0 C918.974849,0 919.87028,0.8954305 919.87028,2 L919.87028,128.621915 L919.87028,128.621915"
            stroke="url(#linearGradient-2)"
          ></path>
          <path
            :d="`M${leftT[0]} L${leftT[1]} C${leftT[2]} L${leftT[3]} L${leftT[3]}`"
            stroke="url(#linearGradient-2)"
            transform="translate(69.435140, 64.310958) scale(-1, 1) translate(-69.435140, -64.310958) "
          ></path>
          <path
            d="M781,198 L917.87028,198 C918.974849,198 919.87028,198.895431 919.87028,200 L919.87028,326.621915 L919.87028,326.621915"
            stroke="url(#linearGradient-2)"
            transform="translate(850.435140, 262.310958) scale(1, -1) translate(-850.435140, -262.310958) "
          ></path>
          <path
            d="M1,197.5 L137.87028,197.5 C138.974849,197.5 139.87028,198.395431 139.87028,199.5 L139.87028,326.121915"
            stroke="url(#linearGradient-2)"
            transform="translate(70.435140, 261.810958) scale(-1, -1) translate(-70.435140, -261.810958) "
          ></path>
        </g>
      </g>
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from "../../../mixin/autoResize";
import { uuid } from "../../../util/index";

import { deepMerge } from "@jiaminghi/charts/lib/util/index";

import { deepClone } from "@jiaminghi/c-render/lib/plugin/util";

import { fade } from "@jiaminghi/color";
const viewBase = [922, 329]

export default {
  name: "DaoBorderBox2",
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
  },
  data() {
    const id = uuid();
    return {
      ref: "dao-border-box-2",
    };
  },
  computed: {
    tempBase() {
      return [this.width / viewBase[0], this.height / viewBase[1]]
    },
    leftT() {
      // let leftTData = [
      //   0, 0,
      //   136.87028, 0,
      //   137.974849,0, 138.87028,0.8954305, 138.87028,2 ,
      //   138.87028,128.621915
      //   // L:['138.87028','128.621915']
      // ]
      // return leftTData.map((item, index) => {
      //     return index % 2 && item * this.tempBase[1] || item * this.tempBase[0]
      // }).join(' ')
      let leftTData = {
        M: [0, 0],
        L: [137, 0],
        C: [138,0, 139,1, 139,2 ],
        L1: [139,129]
        // L:['138.87028','128.621915']
      }
      return Object.keys(leftTData).map((k, index) => {
        return leftTData[k].map((item, index) => {
          return index % 2 && item * this.tempBase[1] || item * this.tempBase[0]
      }).join(' ')
      })
    }
  },
  methods: {
    fade,
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.leftT, 'left')
      console.log(this.tempBase, 'left1111')
      console.log(viewBase, 'left222')
      console.log(this.width, '333')
    })
    
  },
};
</script>

<style lang="less">
.dao-border-box-2 {
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
