<template>
    <div>
        <ul class="job-list">
            <li v-for="item in jobs" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                  {{ item.points || 0}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="job-title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <a v-bind:href="`https://${item.domain}`">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['jobs'])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style scoped>
.job-list {
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
.job-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>