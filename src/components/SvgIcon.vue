<template>
  <div
    v-if="isExternal"
    :style="iconStyleOfExternal"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="localIconName" />
  </svg>
</template>

/** @component SVG 图标 */
<script setup lang="ts">
import { computed, defineProps } from "vue";
import { isExternalResource } from "../common/utils/validate";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

// 是否为外部资源
const isExternal = computed(() => isExternalResource(props.icon));

// 外部资源图标
const iconStyleOfExternal = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.icon}) no-repeat 50% 50%`,
  };
});

// 本地 SVG 图标名称
const localIconName = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
