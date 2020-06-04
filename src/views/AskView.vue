<template>
  <div>
        <p v-for="item in ask">
            <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>
                {{ item.time_ago }} by {{ item.user }}
            </small>
        </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        // #1
        // ask() {
        //     return this.$store.state.ask;
        // },
        // #2
        // ...mapState({
        //     ask: state => state.ask
        // }),
        // #3
        // ...mapGetters({
        //     fetchedAsk: 'fetchedAsk'
        // })
        // #4
        // ...mapGetters(['fetchedAsk'])
        // #5-1
        // ...mapState({
        //     ask: 'ask'
        // })
        // #5-2
        ...mapState(['ask'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>