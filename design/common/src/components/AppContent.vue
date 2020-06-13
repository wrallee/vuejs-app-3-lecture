<template>
  <div>
    <ul>
      <li :key="item" v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: { // props validation 2
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>