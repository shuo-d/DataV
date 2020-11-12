<template>
  <div class="dao-border-box-3" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.920433408">
          <g fill="rgba(6, 25, 46,.7)" stroke="#00A1FF" stroke-width="2">
              <path :d="pathData"></path>
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
const viewBase = [181,115]
export default {
  name: 'DaoBorderBox3',
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
      ref: 'border-box-1',
      defaultColor: ['#4fd2dd', '#235fa7'],
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
    },
    computedPath(data, [widthCoefficient, heightCoefficient]) {
      // const tempD = 'M41.840825,1 L47.9827778,4.81355932 L135.544787,4.81355932 L142.018136,1 L171.683507,1 L179.5,8.53768814 L179.5,114 L1.5,114 L1.5,9.49824754 L10.8739807,1 L41.840825,1 Z'
      return data.reduce((arr,cur) => {
        const key = Object.keys(cur)[0]
        return key === 'Z' ? `${arr} Z` : `${arr} ${key}${cur[key][0] * widthCoefficient},${cur[key][1] * heightCoefficient}`
      }, '') 
    }
  },
  computed: {
    pathData() {
      const tempArr =[{"M":[41.840825,1]},{"L":[47.9827778,4.81355932]},{"L":[135.544787,4.81355932]},{"L":[142.018136,1]},{"L":[171.683507,1]},{"L":[179.5,8.53768814]},{"L":[179.5,114]},{"L":[1.5,114]},{"L":[1.5,9.49824754]},{"L":[10.8739807,1]},{"L":[41.840825,1]},{"Z":[]}]
      return this.computedPath(tempArr,this.tempBase)
    },
    tempBase() {
      return [this.width / viewBase[0], this.height / viewBase[1]]
    }
  },

  mounted () {
    const { mergeColor } = this

    mergeColor()
  }
}
</script>

<style lang="less">
.dao-border-box-3 {
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
