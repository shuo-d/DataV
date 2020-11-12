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
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(1.000000, 1.000000)" stroke-width="2">
          <rect
            stroke="#0A4C75"
            fill="url(#radialGradient-1)"
            x="1"
            y="1"
            :width="`${width - 4}`"
            :height="`${height - 4}`"
            rx="2"
          ></rect>
          <path
            :d="
              `M${lRTB('rt')[0]} L${lRTB('rt')[1]} C${lRTB('rt')[2]} L${lRTB('rt')[3]} L${lRTB('rt')[3]}`
            "
            stroke="url(#linearGradient-2)"
          ></path>
          <path
            :d="
              `M${lRTB('lt')[0]} L${lRTB('lt')[1]} C${lRTB('lt')[2]} L${lRTB('lt')[3]} L${lRTB('lt')[3]}`
            "
            stroke="url(#linearGradient-2)"
            :transform="
              `translate(${69.43514 * tempBase[0]}, ${64.310958 *
                tempBase[1]}) scale(-1, 1) translate(${-70.5 *
                tempBase[0]}, ${-63.8 * tempBase[1]}) `
            "
          ></path>
          <path
            :d="`M${lRTB('rb')[0]} L${lRTB('rb')[1]} C${lRTB('rb')[2]} L${lRTB('rb')[3]} L${lRTB('rb')[3]}`"
            stroke="url(#linearGradient-2)"
            :transform="`translate(${850.435140 * tempBase[0]}, ${263 * tempBase[1]}) scale(1, -1) translate(${-851 * tempBase[0]}, ${-262 * tempBase[1]}) `"
          ></path>
          <path
            :d="`M${lRTB('lb')[0]} L${lRTB('lb')[1]} C${lRTB('lb')[2]} L${lRTB('lb')[3]}`"
            stroke="url(#linearGradient-2)"
            :transform="`translate(${70.435140 * tempBase[0]}, ${261.810958 * tempBase[1]}) scale(-1, -1) translate(${-70.435140 * tempBase[0]}, ${-262.5 * tempBase[1]}) `"
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
const viewBase = [922, 329];

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
      return [this.width / viewBase[0], this.height / viewBase[1]];
    },
  },
  methods: {
    fade,
    lRTB(pos) {
      let posData = {}
      switch (pos) {
        case "lt":
          posData = {
            M: [0, 0],
            L: [137, 0],
            C: [138, 0, 139, 1, 139, 2],
            L1: [139, 129],
          }
          break
        case "rt":
          posData = {
            M: [781, 0.5],
            L: [917.87028, 0.5],
            C: [918.974849, 0, 919.87028, 0.8954305, 919.87028, 2],
            L1: [919.87028, 128.621915],
          }
          break
        case 'lb':
          posData = {
            M: [1,197.5],
            L: [137.87028,197.5],
            C: [138.974849,197.5, 139.87028,198.395431, 139.87028,199.5],
            L1: [139.87028,326.121915],
          }
          break
        case 'rb':
          posData = {
            M: [781,198],
            L: [917.87028,198],
            C: [918.974849,198, 919.87028,198.895431, 919.87028,200],
            L1: [919.87028,326.621915],
          }
          break
      }
      return Object.keys(posData).map((k, index) => {
            return posData[k]
              .map((item, index) => {
                return (
                  (index % 2 && item * this.tempBase[1]) ||
                  item * this.tempBase[0]
                );
              })
              .join(" ");
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.lRTB("lt"), "left");
      console.log(this.tempBase, "left1111");
      console.log(viewBase, "left222");
      console.log(this.width, "333");
    });
  },
};
</script>