<template>
  <div class="dv-loading">
    <svg width="100px" height="100px">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="62.415, 62.415"
        stroke="#02bcfe"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0, 50 50;360, 50 50"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="20"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="31.7, 31.7"
        stroke="#3be6cb"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360, 50 50;0, 50 50"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcfe;#3be6cb"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="loading-tip">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DvLoading'
}
</script>

<style lang="less">
.dv-loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading-tip {
    font-size: 15px;
  }
}
</style>
