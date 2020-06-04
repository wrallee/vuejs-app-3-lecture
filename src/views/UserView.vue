<template>
  <div>
    <p>name: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user'])
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>