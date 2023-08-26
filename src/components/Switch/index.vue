<template>
  <div class="switch" @click="() => toggle()" :class="{ checked: value }">
    <div class="swtich-toogle"></div>
  </div>

</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core';
const [value, toggle] = useToggle()
</script>

<style lang="scss" scoped>
.switch {
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #929292;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  &.checked {
    .swtich-toogle {
      right: 0;
    }
  }
  .swtich-toogle {
    position: absolute;
    right: 50%;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    background-color: #252525;
    border: 2px solid #929292;
    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.3);
    transition: right 0.3s;
    // right: 0;
  }
}
</style>