<template>
  <div class="w-screen h-screen bg-f3 relative">
    <Header></Header>
    <div class="py-12 px-14 bg-[] absolute inset-0">
      <form>
        <TextField title="slot置換測試" :placeholder="randomText">
          <template #icon>
            <div
              class="absolute left-2 top-0 bottom-0 h-4 w-4 rounded-full bg-red-300 inline-block"
            ></div>
          </template>
        </TextField>
        <TextField placeholder="Password"></TextField>
        <v-btn block class="mb-8" color="white" size="large" variant="tonal" @click="userLogin">
          Log In
        </v-btn>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { login } from '../../services/user'
import { useRouter } from 'vue-router'
import TextField from '../../components/TextField.vue'
import Header from './Header.vue'
const username = ref('')
const password = ref('')
const router = useRouter()

const userLogin = () => {
  login({
    username: username.value,
    password: password.value
  }).then(() => {
    router.push({ name: 'home' })
  })
}

const randomText = ref('')

setInterval(() => {
  randomText.value = Math.random().toString(36).substring(7)
}, 1000)
</script>
<!-- <style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

}

form {
  text-align: left;
}

.login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ebebeb;
  padding: 24px;
}

.field-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.field {
  display: flex;
  flex-direction: row;
  gap: 12px;

  span {
    flex: 1
  }

  input {
    flex: 1
  }
}

.login-button {
  padding: 14px;
  border: 1px solid #ebebeb;
}
</style> -->
