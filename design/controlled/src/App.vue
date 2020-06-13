<template>
  <div id="app">
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  name: 'App',
  components: {
    CheckBox
  },
  data() {
    return {
      checked: true,
    }
  }
}
</script>