export default {
  methods: {
    computedSvgRealSize(arr, [widthCoefficient, heightCoefficient]) {
      return arr.map((item, idx) => {
        return idx % 2 && item * heightCoefficient || item * widthCoefficient
      }).join(' ')
    }
  }
}