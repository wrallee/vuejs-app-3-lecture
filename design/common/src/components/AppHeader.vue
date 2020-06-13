<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // props: ['title'],
  props: { // props validation 1
    title: String,
  },
}
</script>

<style>

</style>