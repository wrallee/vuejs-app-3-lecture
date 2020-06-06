<template>
  <div>
      <ul class="listItem-list">
        <li v-for="item in listItem" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{ item.points || 0}}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <!-- 타이틀 영역 -->
            <p class="listItem-title">
              <template v-if="item.domain">
                <a v-bind:href="item.url">
                  {{ item.title }}
                </a>
              </template>
              <template v-else>
                <router-link :to="`/item/${item.id}`">
                  {{ item.title }}
                </router-link>
              </template>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by
              <router-link
                v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
              <a
                v-else v-bind:href="`https://${item.domain}`">{{ item.domain }}</a>
            </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItem() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      } else if (name === 'jobs') {
        return this.$store.state.jobs;
      }
      return 'none'
    }
  },
  created() {
    // this.$store.dispatch(this.props.itemType);
    const name = this.$route.name;
    let actionName = '';
    if (name === 'news') {
      actionName = 'FETCH_NEWS';
    } else if (name === 'ask') {
      actionName = 'FETCH_ASK';
    } else if (name === 'jobs') {
      actionName = 'FETCH_JOBS';
    }

    this.$store.dispatch(actionName);
  }
}
</script>

<style scoped>
.listItem-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.listItem-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>