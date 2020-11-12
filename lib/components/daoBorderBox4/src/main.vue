<template>
  <div class="dao-border-box-4" :ref="ref">
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g fill="none" stroke="#52A8E7" stroke-width="2">
        <path :d="`M ${2 * tempBase[0]},${2 * tempBase[1] + basic} L ${2 * tempBase[0]},${2 * tempBase[1]} L ${2 * tempBase[0] + basic},${2 * tempBase[1]}`"></path>
        <path :d="`M ${2 * tempBase[0]},${165 * tempBase[1] - basic} L ${2 * tempBase[0]},${165 * tempBase[1]} L ${2 * tempBase[0] + basic },${165 * tempBase[1]}`"></path>
        <path :d="`M ${460 * tempBase[0] - basic},${165 * tempBase[1]} L ${460 * tempBase[0]},${165 * tempBase[1]} L${460 * tempBase[0]},${165 * tempBase[1]- basic}`"></path>
        <path :d="`M ${460  * tempBase[0]- basic},${2 * tempBase[1]} L${460 * tempBase[0]},${2 * tempBase[1]} L${460 * tempBase[0]},${2 * tempBase[1] + basic}`"></path>
      </g>
    </svg>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from "../../../mixin/autoResize"

const viewBox = [462,167]

export default {
  name: "DaoBorderBox4",
  mixins: [autoResize],
  data() {
    return {
      ref: "dao-border-box-4",
      basic: 14, // 固定边角长度14
    };
  },
  created() {},
  watch: {},
  computed: {
      tempBase() {
        return [ this.width / viewBox[0], this.height / viewBox[1] ]
      }
  },
  mounted() {},
  methods: {},
};
</script>