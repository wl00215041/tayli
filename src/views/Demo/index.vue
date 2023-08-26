<template>
  <div class="wrapper">

    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Modal ref="modelRef"></Modal>
    <!-- <Switch :checked="loading"></Switch> -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Card from '../../components/Card/index.vue'
import Switch from '../../components/Switch/index.vue'
import Modal from './Model.vue'
import { provide } from 'vue';
import axios from 'axios';
import useService from '../../hooks/useService';

const modelRef = ref()

provide('problemType', 'Classification')




// onMounted(() => {
//   setTimeout(() => {
//     modelRef.value.close()
//   }, 3000)
// })

</script>
<style lang="scss" scoped>
.wrapper {
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

// .overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
//   z-index: 1;
// }
</style>