<template>
  <div class=" relative">
    <span class="text-white">{{ title }}</span>
    <slot name="icon">
      <div class="absolute left-2 top-0 bottom-0 h-4 w-4 rounded-full bg-yellow-300 inline-block"></div>
    </slot>
    <input class="bg-c10-card border focus:border-none focus:outline-none pl-8 border-[#515a57]" type="text"
      :placeholder="placeholder">
  </div>
</template>
<script setup lang="ts">

const { placeholder, title } = defineProps({
  placeholder: String,
  title: String || Number
})
</script>