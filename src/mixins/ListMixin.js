import bus from "../utils/bus";

// Mixins
export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        bus.$emit('end:spinner');
    },
    // created() {
    //     bus.$emit('start:spinner');
    //     // #1
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             // #5
    //             bus.$emit('end:spinner')
    //         })
    //         .catch(error => console.log(error));
    // }
}

// HOC
// export default function create() {
//     // 재사용할 컴포넌트 옵션
// }