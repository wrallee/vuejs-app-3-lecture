<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="item">
        <router-link slot="username" :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + item.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapState } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapState(['item'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>