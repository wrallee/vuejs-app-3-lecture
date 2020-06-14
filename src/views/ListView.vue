<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import SpinnerMixin from "../mixins/SpinnerMixin.js";

export default {
    components: {
        ListItem,
    },
    mixins: [SpinnerMixin],
}
</script>

<style>

</style>