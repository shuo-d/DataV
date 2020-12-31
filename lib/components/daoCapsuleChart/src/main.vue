<template>
  <div class="dao-capsule-chart">
    <template v-if="mergedConfig">
      <div class="label-column">
        <div v-for="item in mergedConfig.data" :key="item.name">
          {{ item.name }}
        </div>
      </div>

      <div class="capsule-container">
        <div
          class="capsule-item"
          v-for="(capsule, index) in capsuleLength"
          :key="index"
        >
          <div
            class="capsule-item-column"
            :style="
              `width: ${capsule * 100}%; background-color: ${
                mergedConfig.colors[index % mergedConfig.colors.length]
              };`
            "
          ></div>
        </div>
      </div>
      <div class="item-value">
        <div
          v-for="(capsule, index) in capsuleLength"
          :key="index"
          class="capsule-item-value"
        >
          {{ capsuleValue[index] }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { deepMerge } from "@jiaminghi/charts/lib/util/index";
import autoResize from "../../../mixin/autoResize";
import { deepClone } from "@jiaminghi/c-render/lib/plugin/util";

export default {
  name: "DaoCapsuleChart",
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Capsule chart data
         * @type {Array<Object>}
         * @default data = []
         * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
         */
        data: [],
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: [
          "#3AFFFF",
          // "#32c5e9",
          // "#67e0e3",
          // "#9fe6b8",
          // "#ffdb5c",
          // "#ff9f7f",
          // "#fb7293",
        ]
      },

      mergedConfig: null,

      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: [],
    };
  },
  watch: {
    config() {
      const { calcData } = this;

      calcData();
    },
  },
  mounted() {
    const { calcData } = this;

    calcData();
  },
  methods: {
    calcData() {
      const { mergeConfig, calcCapsuleLengthAndLabelData } = this;

      mergeConfig();

      calcCapsuleLengthAndLabelData();
    },
    mergeConfig() {
      let { config, defaultConfig } = this;
      console.log(deepClone(defaultConfig, true), '111111')
      this.mergedConfig = deepMerge(
        deepClone(defaultConfig, true),
        config || {}
      );
    },
    calcCapsuleLengthAndLabelData() {
      const { data } = this.mergedConfig;

      if (!data.length) return;

      const capsuleValue = data.map(({ value }) => value);

      const maxValue = Math.max(...capsuleValue);

      this.capsuleValue = capsuleValue;

      this.capsuleLength = capsuleValue.map((v) =>
        maxValue ? v / maxValue : 0
      );

      const oneFifth = maxValue / 5;

      //   const labelData = Array.from(
      //     new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))
      //   )

      //   this.labelData = labelData

      //   this.labelDataLength = Array.from(labelData).map(v =>
      //     maxValue ? v / maxValue : 0
      //   )
    },
  },
  
};
</script>