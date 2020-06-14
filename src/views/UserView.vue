<template>
  <div>
    <user-profile :info="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">{{ 'Joined ' + user.created }}, </span>
      <span slot="karma">{{ user.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import SpinnerMixin from "../mixins/SpinnerMixin.js";
import { mapState } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapState(['user']),
  },
  // created() {
  //   const userName = this.$route.params.id;
  //   this.$store.dispatch('FETCH_USER', userName);
  // },
  mixins: [SpinnerMixin],
}
</script>

<style>

</style>