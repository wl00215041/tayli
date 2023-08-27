<template>
  <div v-show="visible" class="dialog-wrapper">
    <div class="overlay"></div>
    <div ref="el" :style="style" style="position: fixed" class="dialog">
      <div class="dialog-header">
        <div @click="close" class="close"></div>
      </div>
      <div class="dialog-content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside, useDraggable } from '@vueuse/core';
import { ref } from 'vue';

const dialogRef = ref()
const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
onClickOutside(el, () => {
  visible.value = false
});

const close = () => {
  visible.value = false
}

const visible = ref(true)
defineExpose({
  close,
  visible,
  dialogRef,
  style,
  el
})





</script>

<style lang="scss" scoped>
.dialog-wrapper {
  display: block;
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .dialog {
    width: 500px;
    height: 500px;
    background-color: #9d7bf8;
    z-index: 2;

    .dialog-header {
      background-color: grey;
      height: 30px;
      display: flex;
      justify-content: flex-end;
      margin-right: 18px;

    }

    .close {
      cursor: pointer;
      padding: 12px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 1px;
        top: 12px;
        background-color: black;
        transform: rotate(45deg);
      }

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 12px;
        height: 1px;
        top: 12px;
        background-color: black;
        transform: rotate(-45deg);
      }
    }
  }
}</style>