<template>
  <div class="wrapper">
    <div tabindex="1" class="btn">2</div>
    <div class="btn">Normal</div>

    <div class="circle"></div>
    
    <div class="underground" v-for="i in 5" :key="i" :style="{width, '--delay': `${i}s` }"></div>
    <!-- <div class="underground" :style="{width, '--delay': '1s'}"></div>
    <div class="underground" :style="{width, '--delay': '1.5s'}"></div>
    <div class="underground" :style="{width, '--delay': '2.0s'}"></div>
    <div class="underground" :style="{width, '--delay': '2.5s'}"></div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const width = ref("50px")

setTimeout(() => {
  width.value = '100px'
}, 1000)


</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-color: #101010;
  padding: 64px;
}
.btn {
  display: inline-block;
  background-color: #54b8b6;
  cursor: pointer;
  user-select: none;
  padding: 8px 20px;
  border-radius: 4px;
  transition: all 0.3s;
  &:hover {
    background-color: #5cc7b2;
  }
  &:active {
    background-color: #5cc7b2;
    box-shadow: 0 0 10px 0 #54b8b6;
  }

  &:focus {
    background-color: #5cc7b2;
    border: 2px solid #9ff9e7;
  }
}

@keyframes ballAnimate {
  0% {
    transform: translateY(0);
    opacity: 0;
  }


  100% {
    transform: translateY(-80%);
    background-color: red;
    opacity: 1;
  }
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  animation-name: ballAnimate;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(.81,.43,.31,1.51);
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.underground {
  background-color: grey;
  width: 50px;
  height: 14px;
  border-radius: 50%;
  transform: translateY(-4px);
  transition: width 0.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
  transition-delay: var(--delay);
}
</style>