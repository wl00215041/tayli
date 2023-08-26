<template>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <span>Dataset 1</span>
          <div class="card-header-title__actions">
            <div class="icon">
              <img :src="StarIcon" alt="">
            </div>
            <div class="icon">
              <img class="more-icon" :src="MoreIcon" alt="">
            </div>
          </div>
        </div>
        <ProblemType :type="type"></ProblemType>
        <div class="card-header-info">
          <div class="info-block">
            <img class="icon" :src="ImageIcon" alt="">
            <span>10,000</span>
          </div>
          <div class="info-block">
            <img class="icon" :src="NullExampleIcon" alt="">
            <span>2,315</span>
          </div>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="card-body">
        <div class="card-body-count">
          <span>2 versions / 3 models</span>
        </div>
        <div class="card-body-tags">
          <div class="tag">Item A</div>
          <div class="tag">Item B</div>
          <div class="tag">Item C</div>
        </div>
        <div class="card-body-desc">
          <span>Dataset description dataset description dataset description dataset description dataset…</span>
        </div>
      </div>
      <div class="card-fooer">
        <div class="card-footer-time">
          <div class="time">
            <img :src="TimeIcon" alt="">
            <span>2min ago</span>
          </div>
          <div class="card-fooer-avatars">
            <div class="avatar"></div>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
import StarIcon from '../../assets/svg/version_augmentation.svg'
import MoreIcon from '../../assets/svg/dataset_more.svg'
import ImageIcon from '../../assets/svg/dataset_image.svg'
import NullExampleIcon from '../../assets/svg/dataset_null_examples.svg'
import TimeIcon from '../../assets/svg/dataset_time.svg'
import ProblemType from './ProblemType.vue'

const hello = () => {
  alert('Hello world');
}
</script>

<style scoped lang="scss">
.card {
  width: 272px;
  padding: 24px;
  display: inline-block;
  background-color: #252525;
  color: white;
  border-radius: 8px;

  &-header {
    &-title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
      &__actions {
        display: flex;
        gap: 4px;
        .icon {
          padding: 4px;
          cursor: pointer;
          img {
            width: 16px;
          }
          .more-icon {
            width: 4px;
            height: 16px;
          }
        }
      }
    }

    &-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: 14px;
      font-weight: bold;
      .info-block {
        display: flex;
        gap: 4px;
        color: #929292;
      }
    }
  }
  &-body {
    font-size: 12px;
    &-count {
      color: #929292;
      margin-bottom: 12px;
    }

    &-tags {
      display: flex;
      gap: 4px;
      margin-bottom: 12px;
      .tag {
        display: inline-block;
        color: #85b9fd;
        background-color: #27363e;
        padding: 4px 8px;
        border-radius: 4px;
      }
    }
    &-desc {
      color: #929292;
      margin-bottom: 16px;
    }
  }
  &-footer {
    &-time {
      .time {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #929292;
      }
    }
  }
}

.split-line {
  height: 1px;
  background-color: #1a1a1a;
  margin: 16px -24px;
}

</style>