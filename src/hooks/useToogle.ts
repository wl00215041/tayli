import { ref } from "vue"

export default () => {
  const checked = ref(false)

  const toggle = () => {
    checked.value = !checked.value
  }
  return {
    checked,
    toggle
  }
}